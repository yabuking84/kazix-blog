"use client"

import { NewsResultType } from "@/schemas/news";
import { useActions } from "@/store/news/hooks";
import { ReactNode } from "react";

interface Props {
  children: ReactNode
  payload: {
    newsResult: NewsResultType,
  }
}

/**
 * Sets data from server components to redux first so client components can access it
 * @param props 
 * @returns 
 */
export function PageState(props: Props) {

  // set news store here
  const newsActions = useActions();
  newsActions.setNews(props.payload.newsResult)

  return (
    <>
      {props.children}
    </>
  )
}