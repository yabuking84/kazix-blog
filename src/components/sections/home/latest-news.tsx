"use client"

import Pill from "./top-news/pill";
import CreatorImage from "./top-news/creator-image";
import Creators from "./top-news/creators";
import PublishDate from "./top-news/publish-date";
import { useStore } from "@/store/news/hooks";
import ArticleImage from "./top-news/article-image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Locale } from "@/i18n.config";

export default function LatestNews() {
    const { latestNews } = useStore()
    const params = useParams<{ locale: Locale }>()
    const t = useTranslations('blog');
    return (
        <section className="py-8">
            <div className="container px-0 flex flex-col justify-start items-center relative 
                lg:items-start">
                <h2 className="text-3xl w-full my-8 mb-16 font-bold">{t('latest-news')}</h2>

                <div className="grid gap-8 lg:grid-cols-3">
                    {latestNews.map(e => (
                        <Link 
                        locale={params.locale}
                        key={e.article_id} href={{
                            pathname: '/article/'+e.article_id,
                          }} >
                            <div className=" h-full flex flex-col p-2 py-4 bg-secondary border rounded-lg">
                                <ArticleImage src={e.image_url} />
                                <div className="flex flex-col flex-grow
                                            rounded-xl p-4 py-6 ">
                                    <Pill text={e.category?.[0]} />
                                    <p className="text-[30px] font-bold leading-tight mb-6 flex-grow ">
                                        {e.title}
                                    </p>
                                    <div className="flex items-center space-x-4 mb-6 text-primary">
                                        <CreatorImage src={e.source_icon} />
                                        <Creators creators={e.creator} />
                                    </div>
                                    <PublishDate date={e.pubDate} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}