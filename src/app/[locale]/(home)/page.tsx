import { Fetch } from "@/services/news/Fetch";
import { PageState } from "./page-state";

export default async function HomePage() {
  const newsResult = await Fetch.news();
  return (
    <>
      <PageState news={newsResult.results} />
    </>
  )
}
