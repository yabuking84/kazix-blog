"use client"

import { useStore } from "@/store/news/hooks";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { ComponentProps, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi
} from "@/components/ui/carousel";
import AutoHeight from 'embla-carousel-auto-height';

import SliderButtons from './top-news/slider-buttons';

import Creators from "./top-news/creators";
import PublishDate from "./top-news/publish-date";
import CreatorImage from "./top-news/creator-image";
import Pill from "./top-news/pill";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Locale } from "@/i18n.config";

interface Props extends ComponentProps<'section'> { }

export default function TopNewsSection(props: Props) {
    const t = useTranslations('blog');

    const [api, setApi] = useState<CarouselApi>()
    const locale = useLocale() as Locale;

    const { topNews } = useStore()
    return (
        <section className="py-8">
            <div className="container px-0 flex flex-col justify-start items-center relative
            lg:items-start">

                <Carousel
                    setApi={setApi}
                    className="w-full"
                    opts={{
                        loop: true,
                    }}
                    plugins={[AutoHeight()]}
                >
                    <CarouselContent>
                        {topNews.map(e => (
                            <CarouselItem className="items-start" key={e.article_id}>
                                <Link
                                    locale={locale}
                                    key={e.article_id} href={{
                                        pathname: '/article/'+e.article_id,
                                    }}>
                                    <div className="h-full w-full">
                                        <Image className="w-full h-[500px] object-cover rounded-xl"
                                        
                                            src={e.image_url} alt="Image"
                                            width={1000} height={600} />

                                        <div className="lg:max-h-40">
                                            <div className="flex flex-col bg-background border-2 
                                            rounded-xl p-4 py-6 relative -top-9
                                            lg:max-w-[50%] lg:p-12 lg:-top-0 lg:-translate-y-3/4 lg:left-16">
                                                <Pill text={e.category?.[0]} />
                                                <p className="text-[36px] font-bold leading-tight mb-6">
                                                    {e.title}
                                                </p>
                                                <div className="flex items-center space-x-4 mb-6 text-primary">
                                                    <CreatorImage src={e.source_icon} />
                                                    <Creators creators={e.creator} />
                                                </div>
                                                <PublishDate date={e.pubDate} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <SliderButtons api={api} />
                </Carousel>

            </div>
        </section>
    )
}