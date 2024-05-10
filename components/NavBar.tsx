"use client"

import Link from 'next/link'
import React, {useContext, useEffect, useState} from 'react'
import context  from '@/store/ContextComponent'
import {FaCartPlus} from "react-icons/fa"

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
                    LOGO
                </Link>
            </div>
            <div className='links-wrapper'>
                <Link href={"/cart"}>
                <FaCartPlus className='linkss2'/>
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