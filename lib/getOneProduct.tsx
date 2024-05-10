import { createClient,groq } from 'next-sanity'

const getOneProduct = async (productSlug:string) : Promise<Product>=> {

    const client = createClient({
        projectId : "jormnwr0",
        dataset: "production",
        apiVersion: "2024-04-29",
        useCdn: true
    })

    const product = client.fetch(groq`*[_type == "products" && slug.current == $productSlug][0]{
        _createdAt,
        _updatedAt,
        _type,
        _id,
        "image" : image[].asset->url,
        name,
        description,
        price,
        quantity
    }`,{productSlug})

  return  product
}

export default getOneProduct