import sanityClient from "@sanity/client"
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'fwib564z',
    dataset: 'production',
    apiVersion: '2023-07-07',
    useCdnL :true,
    token: process.env.SANITY_TOKEN
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)