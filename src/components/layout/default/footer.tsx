import {useTranslations} from 'next-intl';

export default async function Footer() {
    const t = useTranslations('footer');

    return (
        <footer className="border-t 
        bg-gradient-to-r to-indigo-950 from-primary
        ">
            <h1 className="text-center text-white py-6 px-6 text-lg">
                © {t('all-rights-reserved')}
            </h1>
        </footer>
    )
}

