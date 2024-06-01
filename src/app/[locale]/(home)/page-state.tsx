"use client"

import LatestNews from "@/components/sections/home/latest-news";
import TopNewsSection from "@/components/sections/home/top-news";
import { NewsType } from "@/schemas/news";
import { useActions } from "@/store/news/hooks";

interface Props {
  news: NewsType[]
}

/**
 * This will set data from server components to redux so 
 * client components can access it
 * @param props 
 * @returns 
 */
export function PageState(props: Props) {

  // set news store here
  const newsActions = useActions();
  newsActions.setNews(props.news)

  return (
    <>
      <TopNewsSection />
      <LatestNews />
    </>
  )
}