import { Fetch } from "@/services/news/Fetch";
import { PageState } from "./page-state";
import { Locale } from "@/i18n.config";

export default async function HomePage(props: { params: { locale: Locale } }) {
  const newsResult = await Fetch.news(props.params.locale);
  return (
    <>
      <PageState news={newsResult.results} />
    </>
  )
}
