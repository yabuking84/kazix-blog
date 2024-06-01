import { useTranslations } from "next-intl";

export default function TestPage() {
    const t = useTranslations('global');
    return (
        <div className="container p-8 flex flex-col items-center">
            <h1>TEST!!</h1>
            {t('site-title')}
        </div>
    )
}