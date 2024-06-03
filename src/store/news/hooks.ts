import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { slice, topNews, latestNews, State } from "./slice";
import { NewsResultType, NewsType } from "@/schemas/news";


const useStore = () => {

    return {
        store: useAppSelector((state) => state.news),
        topNews: useAppSelector(topNews),
        latestNews: useAppSelector(latestNews),
    }
}

const useActions = () => {
    const dispatch = useAppDispatch()
    const actions = slice.actions;
    return {
        setNews(newsResult: NewsResultType) {
            dispatch(actions.setNews(newsResult))
        },
        addNews(newsResult: NewsResultType) {
            dispatch(actions.addNews(newsResult))
        },
        setStatus(status: State['status']) {
            dispatch(actions.setStatus(status))
        }
    }
}

export {
    useStore,
    useActions
}