"use client"

import React, { useContext, useState } from 'react'
import Image from 'next/image'
import context from '@/store/ContextComponent'
import {FaArrowAltCircleLeft, FaArrowAltCircleRight, FaPlusCircle, FaMinusCircle} from "react-icons/fa"

type Props = {
    product : Product
}

const SingleProduct = ({product}:Props) => {

const usingContext = useContext(context) as ContextType
const [index, setIndex] = useState(0)

const nextImage = ()=>{
  if(index < product.image.length - 1){
    setIndex((prev)=>{
      return prev + 1
    })
  }
}

const prevImage = ()=>{
  if(index)
  setIndex((prev)=>{
    return prev - 1
  })
}

  return (
    <div className='wrapper2'>
      <div className='left'>
        <Image src={product.image[index]} alt={product.name} width={400} height={400}/>
        <div className='change-images'>
        <button className='fa1' onClick={()=>prevImage()}><FaArrowAltCircleLeft/></button>
         <button  className='fa2' onClick={()=>nextImage()}><FaArrowAltCircleRight/></button>
          {
            product.image.map((item, imageIndex)=>{
              return(
                <div className={index === imageIndex ? "btn2":"btn"} key={imageIndex}></div>
              )
            })
          }
        </div>

      </div>
      <div className='right'>
      <p className='p-title'>Product Price</p>       
          <div>
              <h4 className='price2'>R{product.price}</h4>
              <p className='p-title'>Product Name</p>        
              <h4 className='title2'>{product.name}</h4>
              <p className='p-title'>Product Description</p>        
              <p className='description'>{product.description}</p>
          </div> 
          <div className='quantity-wrapper'>
            <div className='quantity'>
              Quantity : {usingContext.quantity}
            </div>
            <div>
              <button className={`qb`} onClick={()=>usingContext.decQuantity()}><FaMinusCircle/></button>
              <button className='qb' onClick={()=>usingContext.incQuantity()}><FaPlusCircle/></button>
            </div>
          </div>
          <div className='buy-buttons-wrapper'>
              <div >
                <button className='add-to-cart' onClick={()=>usingContext.onAdd(product, usingContext.quantity)}>Add To Cart</button>
              </div>
              <div >
                <button className='buy-now'>Buy Now</button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default SingleProduct