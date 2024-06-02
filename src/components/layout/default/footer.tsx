import FadeIn from '@/components/transitions/fadein';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LogoSVG from "@PUBLIC/kazix-blog-logo.svg"
import { Locale } from '@/i18n.config';

export default async function Footer(props: { locale: Locale }) {
    const tFooter = useTranslations('footer');
    const tGlobal = useTranslations('global');

    return (
        <footer className="border-t bg-secondary">
            <FadeIn className=" container text-center py-6 px-0 text-lg">
                <div className="'m-2 px-2 flex flex-col items-start'" >
                    <div className='text-start my-16'>
                        <h2 className='font-bold text-xl mb-4'>{tFooter('about')}</h2>
                        <p className='lg:max-w-[500px]'>{tFooter('text')}</p>
                    </div>

                    <div className='border-b w-full mb-12 lg:mb-6'></div>

                    <div className='lg:flex lg:justify-between'>
                        <Link className="flex items-center" href={'/' + props.locale}>
                            <LogoSVG className="text-6xl me-4 " />
                            <div className='flex flex-col items-start'>
                                <span className="font-bold text-2xl">
                                    {tGlobal('site-title')}
                                </span>
                                <span>
                                    © {tFooter('all-rights-reserved')}
                                </span>
                            </div>
                        </Link>

                        <ul className='flex flex-col divide-y text-start my-12 
                        lg:flex-row lg:divide-y-0 lg:my-4 '>
                            <li className='py-4 lg:px-4'>{tFooter('terms-of-use')}</li>
                            <li className='py-4 lg:px-4'>{tFooter('privacy-policy')}</li>
                            <li className='py-4 lg:px-4'>{tFooter('cookie-policy')}</li>
                        </ul>
                    </div>
                </div>
            </FadeIn>
        </footer>
    )
}

