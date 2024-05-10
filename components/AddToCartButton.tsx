"use client"

import React, { useContext } from 'react'
import { context } from '@/store/ContextComponent'
import {FaCartPlus} from "react-icons/fa"

type Props = {
    product : Product
}

const AddToCartButton = ({product}:Props) => {

    const usingContext = useContext(context) as ContextType
    
  return (
        <button className='detail2' onClick={()=>usingContext.onAdd(product, 1)}><div className='detail3'><p>add to cart</p><div><FaCartPlus/></div></div> </button>
  )
}

export default AddToCartButton