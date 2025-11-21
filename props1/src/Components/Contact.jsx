import React from 'react'
import Services from './services'
import { useState } from 'react';
const Contact = ({data,setData}) => {
  return (
      
      <>
    
      <div>Contact {data}</div>
      <Services data={data} setData={setData}></Services>
    </>
  )
}

export default Contact