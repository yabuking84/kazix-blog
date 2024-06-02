import { NewsType } from "@/schemas/news";
import Pill from "./top-news/pill";
import ArticleImage from "./top-news/article-image";
import CreatorImage from "./top-news/creator-image";
import Creators from "./top-news/creators";
import PublishDate from "./top-news/publish-date";

export default function Article(props: { news: NewsType }) {
    return (
        <section className="py-8">
            <div className="container px-0">
                <div className="h-full flex flex-col p-2 py-4 min-h-[calc(100svh-185px)]">
                    <Pill text={props.news.category?.[0]} />
                    <p className="text-[30px] font-bold leading-tight mb-6 flex-grow ">
                        {props.news.title}
                    </p>
                    <div className="flex items-center space-x-4 mb-6 text-primary">
                        <CreatorImage src={props.news.source_icon} />
                        <Creators creators={props.news.creator} />
                    </div>
                    <PublishDate className="mb-16 lg:mb-10" date={props.news.pubDate} />
                    <ArticleImage className="mb-16 lg:mb-10" src={props.news.image_url} />
                    <p className="">
                        {props.news.content === 'no-content' ? props.news.description : props.news.content}
                    </p>

                </div>
            </div>
        </section>
    )
}