"use client"

import { Provider } from "react-redux"
import { store } from "@/store"
import { NewsType } from "@/schemas/news"


export default function StoreProvider(props: Props) {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}

