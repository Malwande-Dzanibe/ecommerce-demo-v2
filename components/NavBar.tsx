"use client"

import Link from 'next/link'
import React, {useContext, useEffect, useState} from 'react'
import context  from '@/store/ContextComponent'
import {FaCartPlus, FaGripfire} from "react-icons/fa"
import {FaHouseChimney} from "react-icons/fa6"

const NavBar = () => {

const usingContext = useContext(context) as ContextType

const [isClient, setIsClient] = useState(false)

useEffect(()=>{
  setIsClient(true)
},[isClient])

  return (isClient &&
    <div>
        <nav>
            <div className='logo-wrapper'>
                <Link className='logo' href={"/"}>
                   <FaGripfire/>
                   <p>logo</p>
                </Link>
            </div>
            <div className='links-wrapper'>
                <Link href={"/"} className='cart-w2'>
                <FaHouseChimney className='linkss2'/>
                <p>home</p>
                </Link>
                <Link href={"/cart"} className='cart-w'>
                <FaCartPlus className='linkss2'/>
                <p>cart</p>
                </Link>
                <Link className='linkss' href={"/cart"}>
                    {usingContext.totalQuantity}
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default NavBar