"use client"

import Spinner from "@/components/common/spinner";
import FadeIn from "@/components/transitions/fadein";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n.config";
import { Fetch } from "@/services/news/Fetch";
import { useActions, useStore } from "@/store/news/hooks";
import { useLocale, useTranslations } from "next-intl";
import { useMemo } from "react";

export default function ViewMore() {
    const newsStore = useStore();
    const newsActions = useActions();
    const locale = useLocale() as Locale;

    const viewMore = async () => {
        try {
            newsActions.setStatus('loading')
            const newsResult = await Fetch.news(locale, newsStore.store.nextPage);
            newsActions.setStatus('succeeded')
            newsActions.addNews(newsResult)
        } catch (error) {
            newsActions.setStatus('failed')
        }
    }

    const t = useTranslations('blog')

    const isLoading = useMemo(() => newsStore.store.status === 'loading', [newsStore.store.status])
    return (
        <section className="py-8 pb-20 relative">
            <div className="container px-0 flex justify-center">
                <FadeIn>
                    <Button onClick={viewMore}
                        disabled={isLoading}
                        className="px-8 py-6" variant={'outline'}>
                        {t('view-more')}
                        {isLoading ? <Spinner className="ms-4" /> : null}
                    </Button>
                </FadeIn>
            </div>
        </section>
    )
}



