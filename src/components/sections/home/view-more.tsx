"use client"

import Spinner from "@/components/common/spinner";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n.config";
import { Fetch } from "@/services/news/Fetch";
import { useActions, useStore } from "@/store/news/hooks";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useMemo } from "react";

export default function ViewMore() {
    const params = useParams<{ locale: Locale }>()

    const newsStore = useStore();
    const newsActions = useActions();

    const viewMore = async () => {
        try {
            newsActions.setStatus('loading')
            const newsResult = await Fetch.news(params.locale, newsStore.store.nextPage);
            newsActions.setStatus('succeeded')
            newsActions.addNews(newsResult)
        } catch (error) {
            newsActions.setStatus('failed')
        }
    }

    const t = useTranslations('blog')

    const isLoading = useMemo(()=>newsStore.store.status==='loading',[newsStore.store.status])
    return (
        <section className="py-8 mb-20">
            <div className="container px-0 flex justify-center">
                <Button onClick={viewMore} 
                disabled={isLoading}
                className="px-8 py-6" variant={'outline'}>
                    {t('view-more')}
                    {isLoading? <Spinner className="ms-4" /> : null}
                </Button>
            </div>
        </section>
    )
}



