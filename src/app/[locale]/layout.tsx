import { Work_Sans } from "next/font/google"
import "./globals.scss"
import { Locale, i18n } from "@/i18n.config"
import initTranslations from "@/i18n"
import Footer from "@/components/layout/default/footer"
import Header from "@/components/layout/default/header"

interface Props {
  params: { locale: Locale }
  children: React.ReactNode
}


const font = Work_Sans({ weight:['100','400','600', '700'], subsets: ["latin"] })


export function generateStaticParams() {
  return i18n.locales.map(locale => ({ locale }))
}


export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<Props>) {

  const { t } = await initTranslations(locale)


  const logo = `${process.env['HOST']}/webwunder-icon.png`
  const host = process.env['HOST']

  return (
    <html lang='en' suppressHydrationWarning={true}>
      <head>

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* SEO */}
        <link rel="canonical" href={host} />
        <title>{t('site-title') + ' - ' + t('site-desc')}</title>
        <meta name="description" content={t('site-desc')} />        
        <meta name="robots" content="max-image-preview:large" />
        <meta property="og:locale" content="de" />
        <meta property="og:site_name" content={t('site-title')} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={t('site-title')} />
        <meta property="og:description" content={t('site-desc')} />
        <meta property="og:url" content={host} />
        <meta property="og:image" content={logo} />
        <meta property="og:image:secure_url" content={logo} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('site-title')} />
        <meta name="twitter:description" content={t('site-desc')} />
        <meta name="twitter:image" content={logo} />
        {/* SEO */}

      </head>
      <body
        className={`${font.className} antialiased`}
        suppressHydrationWarning={true}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <div id="modal-section" />        
      </body>
    </html >
  )
}



export const runtime = 'edge' // 'nodejs' (default) | 'edge'
