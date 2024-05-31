import { z } from 'zod'

const imgTypes = ['apng', 'avif', 'gif', 'jpeg', 'jpg', 'png', 'svg', 'webp', 'bmp', 'ico', 'tiff']

const news = z.object({
    article_id: z.string(),
    title: z.string(),
    description: z.string(),
    link: z.string().optional(),
    pubDate: z.string().optional(),
    creator: z.string().array().nullish(),
    image_url: z.string()
        .trim()
        .nullish()
        .transform(val => {
            if (!val) return 'no-image'
            return val
        })
})

const newsResult = z.object({
    status: z.string().trim().min(3, {
        message: 'Invalid Status!'
    }),
    "totalResults": z.number({
        invalid_type_error: 'Invalid Total Results!'
    }),
    results: z.array(news)
})


export const NewsResultSchema = newsResult
export type NewsResultType = z.infer<typeof NewsResultSchema>
export const NewsSchema = news
export type NewsType = z.infer<typeof NewsSchema>

export type FlattenedNewsErrors = z.inferFlattenedErrors<typeof NewsResultSchema>;



