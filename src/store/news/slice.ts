import { NewsResultType, NewsType } from "@/schemas/news";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { app } from "@/app.config";

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


const selectTopNews = createSelector([(state: RootState) => state.news], (state) => {
    const tops = []
    const len = state.news.length
    for (let i = 0; i < app.topNews.count; i++) {
        if (i >= len) break
        tops.push(state.news[i])
    }
    return tops;
})

const latestNews = createSelector([(state: RootState) => state.news], (state) => {
    const ret = []
    const len = state.news.length
    for (let i = app.topNews.count; i < len; i++) {
        if (i >= len) break
        ret.push(state.news[i])
    }
    return ret;
})



export {
    type State,
    slice,
    selectTopNews,
    latestNews
}