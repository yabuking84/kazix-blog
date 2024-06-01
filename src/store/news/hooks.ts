import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { slice, selectTopNews, latestNews } from "./slice";
import { NewsType } from "@/schemas/news";


const useStore = () => {

    return {
        store: useAppSelector((state) => state.news),
        topNews: useAppSelector(selectTopNews),
        latestNews: useAppSelector(latestNews),
    }
}

const useActions = () => {
    const dispatch = useAppDispatch()
    const actions = slice.actions;
    return {
        setNews(news: NewsType[]) {
            dispatch(actions.setNews(news))
        }
    }
}

export {
    useStore,
    useActions
}