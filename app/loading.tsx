"use client"

import React from 'react'
import {Oval} from  "react-loader-spinner"

const loading = () => {
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

export default loading