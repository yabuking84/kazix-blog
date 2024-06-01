import Article from "@/components/sections/home/article";
import { Locale } from "@/i18n.config";
import { Fetch } from "@/services/news/Fetch";

export default async function ArticlePage({ params }: { params: { articleId: string, locale: Locale } }) {
    const news = await Fetch.article(params.locale, params.articleId);
    return (
        <Article news={news} />
    )
}
