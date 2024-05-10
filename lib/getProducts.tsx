import { createClient,groq } from 'next-sanity'

const getProducts = async () : Promise<Product[]>=> {

  const client = createClient({
    projectId : "jormnwr0",
    dataset: "production",
    apiVersion: "2024-04-29",
    useCdn: true
  })

  const posts = await client.fetch(groq`*[_type == "products"]{
    _createdAt,
    _updatedAt,
    _type,
    _id,
    "image" : image[].asset->url,
    name,
    description,
    price,
    "slug" : slug.current,
    quantity
  }`  )

  return posts
}

export default getProducts