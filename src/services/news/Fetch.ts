import { waits } from "@/lib/utils";
import newsMockData from "@/mocks/news.json"

export class Fetch {
    static async news(){
        
        // mock fetch here
        //////////////////////////
        await waits()
        return newsMockData;
        //////////////////////////



    }
}