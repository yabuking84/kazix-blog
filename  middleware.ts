import { i18nRouter } from 'next-i18n-router'
import { i18n } from "@/i18n.config"
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  return i18nRouter(request, i18n)
}

// only applies this middleware to files in the app directory
export const config = {
  // matcher: ['/((?!api|_next|.*\\..*).*)']
  matcher: '/((?!api|static|.*\\..*|_next).*)'
}