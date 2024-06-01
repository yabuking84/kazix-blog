import createMiddleware from 'next-intl/middleware';
import { i18n, localePrefix } from './i18n.config';

export default createMiddleware({
  locales: i18n.locales,
  // localePrefix: localePrefix,
  defaultLocale: i18n.defaultLocale
});

// only applies this middleware to files in the app directory
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};