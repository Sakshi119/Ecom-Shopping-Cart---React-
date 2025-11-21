import React from 'react'
import Contact from './contact'

import { useState } from 'react';
const About = ({data,setData}) => {
  return (
    <>
    
    <div>About {data}</div>
    <Contact data={data} setData={setData}></Contact>
    </>
  )
}

export default About