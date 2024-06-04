import createMiddleware from 'next-intl/middleware';
import { i18n, localePrefix } from './i18n.config';

export default createMiddleware({
  locales: i18n.locales,
  // localePrefix: localePrefix,
  defaultLocale: i18n.defaultLocale
});

// only applies this middleware to files in the app directory
export const config = {
  // matcher: ['/((?!api|_next|.*\\..*).*)']
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(en|tr)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};