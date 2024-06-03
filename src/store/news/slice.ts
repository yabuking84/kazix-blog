import { NewsResultType, NewsType } from "@/schemas/news";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Getters } from "@/services/news/Getters";

interface State {
    news: NewsType[]
    nextPage: string
    status: 'loading' | 'succeeded' | 'failed' | 'idle'
}


const initState: State = {
    news: [],
    nextPage: '',
    status: 'idle',
};

const slice = createSlice({
    name: 'news',
    initialState: initState,
    reducers: {
        setNews(state, { payload }: { payload:  NewsResultType }) {
            state.news = payload.results
            state.nextPage = payload.nextPage || ''
        },
        addNews(state, { payload }: { payload:  NewsResultType }) {
            state.news = [
                ...state.news,
                ...payload.results
            ]
            state.nextPage = payload.nextPage || ''
        },
        setStatus(state, { payload }: { payload:  State['status'] }) {
            state.status = payload 
        },
    },
})


const topNews = createSelector([(state: RootState) => state.news], (state) => {
    return Getters.topNews(state.news)
})

const latestNews = createSelector([(state: RootState) => state.news], (state) => {
    return Getters.latestNews(state.news)
})



export {
    type State,
    slice,
    topNews,
    latestNews
}