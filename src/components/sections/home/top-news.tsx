"use client"

import { useStore } from "@/store/news/hooks";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ComponentProps } from "react";

interface Props extends ComponentProps<'section'> { }

import Creators from "./top-news/creators";
import PublishDate from "./top-news/publish-date";
import CreatorImage from "./top-news/creator-image";

export default function TopNewsSection(props: Props) {
    const t = useTranslations('blog');

    const { topNews } = useStore()
    return (
        <section className="py-8 break-all">
            <div className="container px-0 flex flex-col justify-start items-center">
                <Image className="w-full object-cover rounded-xl" src={topNews[0].image_url} alt="Image" width={400} height={400} />
                <div className="border-2 rounded-xl p-2">
                    <div>{t('top')}</div>
                    <p>{topNews[0].title}</p>

                    <CreatorImage src={topNews[0].source_icon} />
                    <Creators creators={topNews[0].creator} />
                    <PublishDate date={topNews[0].pubDate} />
                </div>
            </div>
        </section>
    )
}