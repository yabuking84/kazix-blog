import FadeIn from '@/components/transitions/fadein';
import { useTranslations } from 'next-intl';

export default async function Footer() {
    const t = useTranslations('footer');

    return (
        <footer className="border-t">
            <FadeIn className="text-center  py-6 px-6 text-lg">
                <h1 >
                    © {t('all-rights-reserved')}
                </h1>
            </FadeIn>
        </footer>
    )
}

