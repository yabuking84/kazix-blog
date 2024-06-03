"use client"

import LatestNews from "@/components/sections/home/latest-news";
import TopNewsSection from "@/components/sections/home/top-news";
import ViewMore from "@/components/sections/home/view-more";
import { NewsResultType } from "@/schemas/news";
import { useActions } from "@/store/news/hooks";

interface Props {
  payload: {
    newsResult: NewsResultType,
  }
}

/**
 * - All Components here will always be client components. 
 * - If you want to use server components put it on page.tsx
 * - will set data from server components to redux first so client components can access it
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