import { NewsType } from "@/schemas/news";
import { createSlice } from "@reduxjs/toolkit";

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

export {
    type State,
    slice
}