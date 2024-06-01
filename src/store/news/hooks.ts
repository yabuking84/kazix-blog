import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { slice } from "./slice";
import { NewsType } from "@/schemas/news";


const useStore = () => {
    return {
        store: useAppSelector((state) => state.news),
        topNews: useAppSelector((state) => {
            const tops = []
            const len = state.news.news.length
            for (let i = 0; i < 3; i++) {
                if(i>=len) break
                tops.push(state.news.news[i])
            }
            return tops;
        })
    }
}

const useActions = ()=>{
    const dispatch = useAppDispatch()
    const actions = slice.actions;
    return {
        setNews(news: NewsType[]){
            dispatch(actions.setNews(news))
        }
    }
}

export {
    useStore,
    useActions
}