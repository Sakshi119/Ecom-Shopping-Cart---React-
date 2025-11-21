import React from 'react'
import About from './about'
import { useState } from 'react';

const Home = ({data,setData}) => {
  return (
    <>
        <div>home {data}</div>
        <About data={data} setData={setData}> </About>
    </>
  )
}

export default Home