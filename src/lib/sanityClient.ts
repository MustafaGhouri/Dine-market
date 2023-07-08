import {createClient} from 'next-sanity';

export const client = createClient({
    token:process.env.NEXT_SANITY_API_TOKEN,
    apiVersion:'2023-07-07',
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId :process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ,
    useCdn:true,
})