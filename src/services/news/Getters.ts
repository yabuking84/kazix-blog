import { app } from "@/app.config";
import { NewsType } from "@/schemas/news";

export class Getters {

    static latestNews(news: NewsType[]) {
        const ret = []
        const len = news.length
        for (let i = app.topNews.count; i < len; i++) {
            if (i >= len) break
            ret.push(news[i])
        }
        return ret;        
    }
    static topNews(news: NewsType[]) {
        const tops = []
        const len = news.length
        for (let i = 0; i < app.topNews.count; i++) {
            if (i >= len) break
            tops.push(news[i])
        }
        return tops;   
    }
}