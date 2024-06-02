export const app = {
    topNews: { count: 3 },
    allNews: { maxSize: 9 }
}


export const api = {
    news: {
        latest: `https://newsdata.io/api/1/latest?image=1&size=${app.allNews.maxSize}`,
        article: 'https://newsdata.io/api/1/latest'
    },
    options: {
        headers: {
            'X-ACCESS-KEY': process.env['NEXT_PUBLIC_NEWS_API_KEY'] || ''
        },
    }
}