 import React from 'react'
 import SingleProduct from '@/components/SingleProduct'
import getOneProduct from '@/lib/getOneProduct'

type Params = {
  params : {productSlug : string}
}

const page = async ({params}:Params) => {

  const productSlug = params.productSlug  

  const product = await getOneProduct(productSlug)
  
  return (
    <div>
      <SingleProduct product = {product}/>
    </div>
  )
}

export default page