"use client"

import { NewsResultType } from "@/schemas/news";
import Image from "next/image";
import { ComponentProps, useState } from "react";

interface Props extends ComponentProps<'section'> {
    news: NewsResultType
}

export default function TopNewsSection({ news }: Props) {

    const tops = []
    const len = news.results.length
    for (let i = 0; i < 3; i++) {
        if(i>=len) break
        tops.push(news.results[i])
    }

    return (
        <section className="py-8 break-all">
            <div className="container px-0 flex flex-col justify-start items-center">

                <Image className="w-full object-cover" src={tops[0].image_url} alt="Image" width={400} height={400} />
            </div>
        </section>
    )
}