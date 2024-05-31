'use client' // Error components must be Client Components

import { Button } from '@/components/ui/button'
import { FlattenedNewsErrors } from '@/schemas/news'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { z } from 'zod'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  const t = useTranslations('error');

  return (
    <div className='flex flex-col items-center justify-center p-8'>
      <h2 className='pb-4'>{t('text')}</h2>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        {t('button')}
      </Button>
    </div>
  )
}