import Image from "next/image";
import { Fetch } from "@/services/news/Fetch";

export default async function TopNewsSection() {
  const news = await Fetch.news();
  return (
        <section>
            <div className="container flex justify-center">
                Top News
            </div>
        </section>
    )
}