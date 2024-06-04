"use client"

import { NewsResultType } from "@/schemas/news";
import { useActions } from "@/store/news/hooks";


import LatestNews from "@/components/sections/home/latest-news";
import TopNewsSection from "@/components/sections/home/top-news";
import ViewMore from "@/components/sections/home/view-more";


interface Props {
  payload: {
    newsResult: NewsResultType,
  }
}

/**
 * Sets data from server components to redux first so client components can access it
 * This is for client components only
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