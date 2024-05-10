"use client"

import React, { useEffect } from 'react'
import { createContext, useState } from 'react'
import {toast} from 'react-hot-toast'


export const context = createContext<ContextType|null>(null)

const ContextComponent = ({children}: {
  children: React.ReactNode;
}) => {

  const cartInL = ()=>{

    let result: any;

    if(typeof window !== 'undefined'){
      result = localStorage.getItem("cartInL")
    }
    if(result === undefined || null){
      result = []
    }

    return result?JSON.parse(result):[]
  }

  const quantityFromL = ()=>{
    let result: any;

    if(typeof window !== 'undefined'){
      result = localStorage.getItem("quantityFromL")
    }
    if(result === undefined || null){
      result = 1
    }

    return result?JSON.parse(result):1
  }

  const totalQuantityFromL = ()=>{
    let result: any;

    if(typeof window !== 'undefined'){
      result = localStorage.getItem("totalQuantityFromL")
    }
    if(result === undefined || null){
      result = 0
    }

    return result?JSON.parse(result):0
  }

  const totalPriceFromL = ()=>{
    let result: any;

    if(typeof window !== 'undefined'){
      result = localStorage.getItem("totalPriceFromL")
    }
    if(result === undefined || null){
      result = 0
    }

    return result?JSON.parse(result):0
  }

  const [cartItems, setCartItems] =useState<Product[]>(cartInL)
  const [quantity, setQuantity] = useState<number>(quantityFromL)
  const [totalQuantity, setTotalQuantity] = useState<number>(totalQuantityFromL)
  const [totalPrice, setTotalPrice] = useState<number>(totalPriceFromL)
  
  const incQuantity = ()=>{
    setQuantity((prev)=>{
      return prev + 1
    })
  }
  
  const decQuantity = ()=>{
    setQuantity((prev)=>{
      if(prev === 1) return 1
      return prev - 1
    })
  }

  const onAdd = (product : Product, quantity : number)=>{
    const productIndex = cartItems.findIndex((item)=>{
      return item._id === product._id
    })

    if(productIndex >= 0){
      cartItems[productIndex].quantity += quantity
    }else{
      product.quantity = quantity
      setCartItems((prev)=>{
        return [...prev, {...product}]
      })
    }

    setQuantity(1)
    setTotalQuantity((prev)=>{
      return prev + quantity
    })
    setTotalPrice((prev)=>{
      return prev + product.price * quantity
    })

    toast.success(quantity > 1 ? `${quantity} items added to Cart` : `${quantity} item added to Cart`)

  }

  const toggleQuantityCart = (value : string, product : Product)=>{

    const newCartItems = cartItems.map((item)=>{
      if(item._id === product._id){
        return {
          ...item,
          quantity : item.quantity + 1
        }
      }
      return item
    })

    const newCartItems2 = cartItems.map((item)=>{
      if(item._id === product._id){
        return {
          ...item,
          quantity : item.quantity - 1
        }
      }
      return item
    })

    if(value === "inc"){
      setCartItems([...newCartItems])
      setTotalQuantity((prev)=>{
        return prev + 1
      })
      setTotalPrice((prev)=>{
        
        if(typeof(product.price) === "string"){
          product.price = Number(product.price)
        }
        
        return prev + product.price
      })
    }

    if(value === "dec"){
      if(product.quantity > 1){
        setCartItems([...newCartItems2])
        setTotalQuantity((prev)=>{
          return prev - 1
        })
        setTotalPrice((prev)=>{
          return prev - product.price
        })
      }
    }
  }
  
  const onRemove = (product : Product)=>{ 
    const newCartItems = cartItems.filter((item)=>{
      return item._id !== product._id
    })

    setCartItems([...newCartItems])
    setTotalQuantity((prev)=>{
      return prev - product.quantity
    })
    setTotalPrice((prev)=>{
      return prev - product.price * product.quantity
    })

    toast.success(product.quantity > 1 ? `${product.quantity} items removed from Cart` : `${product.quantity} item removed from Cart`)
  }

  useEffect(()=>{
    localStorage.setItem("cartInL", JSON.stringify(cartItems))
    localStorage.setItem("quantityFromL", JSON.stringify(quantity))
    localStorage.setItem("totalQuantityFromL", JSON.stringify(totalQuantity))
    localStorage.setItem("totalPriceFromL", JSON.stringify(totalPrice))
  },[cartItems, quantity, totalQuantity, totalPrice])

  return (
    <context.Provider value={{
      quantity,
      cartItems,
      totalPrice,
      totalQuantity,
      incQuantity,
      decQuantity,
      onAdd,
      toggleQuantityCart,
      onRemove
    }}>
      {
        children
      }
    </context.Provider>
  )
}

export default ContextComponent 