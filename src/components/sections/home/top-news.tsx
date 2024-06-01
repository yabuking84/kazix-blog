"use client"

import { useStore } from "@/store/news/hooks";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ComponentProps } from "react";

interface Props extends ComponentProps<'section'> { }

import UserSVG from "@/assets/svg/account-circle.svg"
import Creators from "./top-news/creators";

export default function TopNewsSection(props: Props) {
    const t = useTranslations('blog');

    const { topNews } = useStore()
    return (
        <section className="py-8 break-all">
            <div className="container px-0 flex flex-col justify-start items-center">

                <Image className="w-full object-cover rounded-xl" src={topNews[0].image_url} alt="Image" width={400} height={400} />

                <div>
                    <div>{t('top')}</div>
                    <p>{topNews[0].title}</p>
                    <div>
                        {topNews[0].source_icon ?
                            <Image className="object-cover rounded-full h-8 w-8"
                                src={topNews[0].source_icon} alt="Image" width={30} height={30} />
                            : <UserSVG />}

                        <Creators creators={topNews[0].creator} />

                    </div>
                </div>
            </div>
        </section>
    )
}