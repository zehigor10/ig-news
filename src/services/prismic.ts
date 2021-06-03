import Priscmic from '@prismicio/client'; 

export function getPrismicClient(req?: unknown){
    const prismic = Priscmic.client(
        process.env.PRISMIC_ENDPOINT,
        {
            req,
            accessToken: process.env.PRISMIC_ACCESS_TOKEN
        }
    )

    return prismic;
}