"use client"

import LatestNews from "@/components/sections/home/latest-news";
import TopNewsSection from "@/components/sections/home/top-news";
import ViewMore from "@/components/sections/home/view-more";
import { NewsResultType, NewsType } from "@/schemas/news";
import { useActions } from "@/store/news/hooks";

interface Props {
  payload: {
    newsResult:NewsResultType,
  } 
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
  newsActions.setNews(props.payload.newsResult)

  return (
    <>
      <TopNewsSection />
      <LatestNews />
      <ViewMore />
    </>
  )
}