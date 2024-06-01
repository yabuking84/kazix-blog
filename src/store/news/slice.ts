import { NewsType } from "@/schemas/news";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

interface State {
    news: NewsType[];
    status: 'loading' | 'succeeded' | 'failed' | 'idle'
}


const initState: State = {
    news: [],
    status: 'idle',
};

const slice = createSlice({
    name: 'auth',
    initialState: initState,
    reducers: {
        setNews(state, { payload }: { payload: NewsType[] }) {
            state.news = payload
        },
    },
})


const selectTopNews = createSelector([(state: RootState) => state.news], (state) => {
    const tops = []
    const len = state.news.length
    for (let i = 0; i < 3; i++) {
        if (i >= len) break
        tops.push(state.news[i])
    }
    return tops;
})

const latestNews = createSelector([(state: RootState) => state.news], (state) => {
    const ret = []
    const len = state.news.length
    for (let i = 2; i < len; i++) {
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