import { waits } from "@/lib/utils";
import newsMockData from "@/mocks/news.json"
import { NewsResultSchema, NewsResultType } from "@/schemas/news";

export class Fetch {
    /**
     * this will be cached by next so can be called anywhere
     * @returns {NewsResultType}
     */
    static async news(){
        // mock fetch here
        //////////////////////////
        await waits(2000)
        return NewsResultSchema.parse(newsMockData)
        //////////////////////////
        

    }
}