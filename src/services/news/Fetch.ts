import articleMockData  from '@/mocks/article.json';
import newsMockData  from '@/mocks/news.json';
import { NewsResultSchema, type NewsResultType, NewsSchema, NewsType } from "@/schemas/news";
import { Locale } from "@/i18n.config";
import { api } from "@/app.config";
import { waits } from "@/lib/utils";


export class Fetch {

    static async news(locale: Locale, nextPage = ""): Promise<NewsResultType> {

        // mock fetch here
        //////////////////////////
        // await waits(2000)
        // return NewsResultSchema.parse(newsMockData)
        //////////////////////////


        const options: RequestInit = api.options

        let params: { language: Locale, page?: string } = {
            language: locale,
        }
        if (nextPage) params = {
            ...params,
            page: nextPage
        };
        const paramsUrl = new URLSearchParams(params)

        const res = await fetch(`${api.news.latest}&${paramsUrl}`, options)
        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data')
        }
        const newsResult = await res.json()
        return NewsResultSchema.parse(newsResult);


    }

    static async article(locale: Locale, articleId: string): Promise<NewsType> {

        // mock fetch here
        //////////////////////////
        // await waits(2000)
        // return NewsSchema.parse(articleMockData)
        //////////////////////////

        const options: RequestInit = api.options

        let params: { id: string } = {
            id: articleId
        }
        const paramsUrl = new URLSearchParams(params)

        const res = await fetch(`${api.news.article}?` + paramsUrl, options)
        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data')
        }
        const newsResult = await res.json()
        const parsedRes = NewsResultSchema.parse(newsResult);
        return NewsSchema.parse(parsedRes.results[0])
    }
}