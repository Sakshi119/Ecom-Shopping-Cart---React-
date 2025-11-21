import React from 'react'
import Testamonials from './testamonials'
import { useState } from 'react';
const Services = ({data,setData}) => {
  return (
    <>
        <div>Services {data}</div>
        <Testamonials data={data} setData={setData}></Testamonials>
    </>
  )
}

export default Services