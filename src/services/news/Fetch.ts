import { waits } from "@/lib/utils";
import newsMockData from "@/mocks/news.json";
import articleMockData from "@/mocks/article.json";
import { NewsResultSchema, type NewsResultType, NewsSchema, NewsType } from "@/schemas/news";
import { Locale } from "@/i18n.config";
import { api } from "@/app.config";





export class Fetch {
    /**
     * this will be cached by next so can be called anywhere
     * @returns {NewsResultType}
     */
    static async news(locale: Locale, nextPage = ""): Promise<NewsResultType> {
        const options: RequestInit = api.options
        
        let params: { language: Locale, page?: string } = {
            language: locale,
        }
        if (nextPage) params = {
            ...params,
            page: nextPage
        };
        const paramsUrl = new URLSearchParams(params)
        
        // const res = await fetch(`${api.news.latest}&${paramsUrl}`, options)
        // if (!res.ok) {
        //     // This will activate the closest `error.js` Error Boundary
        //     throw new Error('Failed to fetch data')
        // }
        // const newsResult =  await res.json()
        // return NewsResultSchema.parse(newsResult);
         
        // mock fetch here
        //////////////////////////
        await waits(2000)
        return NewsResultSchema.parse(newsMockData)
        //////////////////////////

    }
    /**
     * this will be cached by next so can be called anywhere
     * @returns {NewsResultType}
     */
    static async article(locale:Locale, articleId: string): Promise<NewsType> {
        const options: RequestInit = api.options
        
        let params: { id: string } = {
            id: articleId
        }
        const paramsUrl = new URLSearchParams(params)
        // const res = await fetch(`${api.news.article}?`+paramsUrl, options)
        // if (!res.ok) {
        //     // This will activate the closest `error.js` Error Boundary
        //     throw new Error('Failed to fetch data')
        // }
        // const newsResult =  await res.json()
        // const parsedRes =  NewsResultSchema.parse(newsResult);
        // return NewsSchema.parse(parsedRes.results[0])
        
        // mock fetch here
        //////////////////////////
        await waits(2000)
        return NewsSchema.parse(articleMockData)
        //////////////////////////

    }
}