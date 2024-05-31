import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { i18n } from './i18n.config';

const locales = i18n.locales;
const localePrefix = 'as-needed';

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });