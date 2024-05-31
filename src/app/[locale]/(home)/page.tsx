import TopNewsSection from "@/components/sections/home/top-news";
import { Fetch } from "@/services/news/Fetch";

export default async function HomePage() {
  const news = await Fetch.news();
  return (
    <>
      <TopNewsSection news={news} />
    </>
  )
}
