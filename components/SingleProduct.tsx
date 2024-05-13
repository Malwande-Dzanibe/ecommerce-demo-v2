"use client"

import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import context from '@/store/ContextComponent'
import {FaArrowAltCircleLeft, FaArrowAltCircleRight, FaPlusCircle, FaMinusCircle} from "react-icons/fa"
import { Oval } from 'react-loader-spinner'
import toast from 'react-hot-toast'

type Props = {
    product : Product
}

const SingleProduct = ({product}:Props) => {

const usingContext = useContext(context) as ContextType
const [index, setIndex] = useState(0)
const [isClient, setIsClient] = useState(false)

const noPayment = ()=>{
  return toast.success("no payment gateway system for this demo")
}

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

useEffect(()=>{
  setIsClient(true)
},[isClient])

if(!isClient){
  return (
    <div className='spinner'>
        <Oval
        height="80"
        width="80"
        color="rgb(28, 190, 227)"
        ariaLabel="loading"
        wrapperClass="true"
    />
    </div>
  )
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
                <button className='buy-now' onClick={()=>noPayment()}>Buy Now</button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default SingleProduct