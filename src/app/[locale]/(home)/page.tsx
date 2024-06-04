import { Fetch } from "@/services/news/Fetch";
import { PageState } from "./page-state";
import { Locale } from "@/i18n.config";
import Image from "next/image";

import BgImage from "@PUBLIC/bg-image.png";
import BgImageMobile from "@PUBLIC/bg-image-mobile.png";

import LatestNews from "@/components/sections/home/latest-news";
import TopNewsSection from "@/components/sections/home/top-news";
import ViewMore from "@/components/sections/home/view-more";

export default async function HomePage(props: { params: { locale: Locale } }) {
  const newsResult = await Fetch.news(props.params.locale);
  return (
    <>
      <div className="absolute top-0 z-0 overflow-clip w-full h-full dark:hidden">
        <Image className="object-cover w-full lg:hidden" src={BgImageMobile} alt="Bg Image" />
        <Image className="object-cover w-full hidden lg:block" src={BgImage} alt="Bg Image" />
      </div>

      <PageState payload={{ newsResult: newsResult }}>
        <TopNewsSection />
        <LatestNews />
        <ViewMore />
      </PageState>

    </>
  )
}
