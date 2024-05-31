import { z } from 'zod'

const imgTypes = ['apng', 'avif', 'gif', 'jpeg', 'jpg', 'png', 'svg', 'webp', 'bmp', 'ico', 'tiff']

const result = {
    article_id: z.string(),
    title: z.string(),
    link: z.string(),
    creator:z.string().array().nullish()
}

const news = {
    status: z.string().trim().min(3, {
        message: 'Invalid Status!'
    }),
    "totalResults": z.number({
        invalid_type_error: 'Invalid Total Results!'
    }),
    results: z.array()
}

export const CreateNewsSchema = z.object({

})
export type CreateNewsType = z.infer<typeof CreateNewsSchema>
export type FlattenedCreateNewsErrors = z.inferFlattenedErrors<typeof CreateNewsSchema>;

export const EditNewsSchema = z.object({
    email: News.email.optional(),
    first_name: News.first_name.optional(),
    last_name: News.last_name.optional()
})
export type EditNewsType = z.infer<typeof EditNewsSchema>
export type FlattenedEditNewsErrors = z.inferFlattenedErrors<typeof EditNewsSchema>;


export const NewsSchema = z.object(News)
export type NewsType = z.infer<typeof NewsSchema>

export const NewssSchema = z.array(NewsSchema)
export type NewssType = z.infer<typeof NewssSchema>



