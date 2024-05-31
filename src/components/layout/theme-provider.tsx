"use client"

import { ThemeProvider } from "next-themes";


export default function ClientThemeProvider(props:Props){
    return (
        <ThemeProvider attribute="class">{props.children}</ThemeProvider>
    )
}