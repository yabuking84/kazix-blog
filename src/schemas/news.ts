import { z } from 'zod'

const imgTypes = ['apng', 'avif', 'gif', 'jpeg', 'jpg', 'png', 'svg', 'webp', 'bmp', 'ico', 'tiff']

const news = z.object({
    article_id: z.string(),
    title: z.string(),
    description: z.string().nullable()
        .transform(val => {
            if (!val || !val.length) return ""
            return val
        }),
    content: z.string()
        .transform(val => {
            if (!val || val.includes('ONLY AVAILABLE IN PAID PLANS'))
                return 'no-content'
            else
                return val
        }),
    link: z.string().optional(),
    pubDate: z.string().optional(),
    source_icon: z.string().nullable().optional()
        .transform(val => {
            if (!val) return 'no-image'
            return val
        }),
    category: z.string().array().nullish()
        .transform(val => {
            if (!val || !val.length) return undefined
            return val.map(e => e.toLowerCase())
        }),
    creator: z.string().array().nullish()
        .transform(val => {
            if (!val) return undefined
            return val
        }),
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
    nextPage: z.string().nullable(),
    results: z.array(news)
})


export const NewsResultSchema = newsResult
export type NewsResultType = z.infer<typeof NewsResultSchema>
export const NewsSchema = news
export type NewsType = z.infer<typeof NewsSchema>

export type FlattenedNewsErrors = z.inferFlattenedErrors<typeof NewsResultSchema>;



