import React, { useContext } from 'react'
import { Context } from '../Context/Context'
import Services from './Services'

const Contact = () => {
    const {data} = useContext(Context)
  return (
    <>
    <div>Contact {data}</div>
    <Services />
    </>
  )
}

export default Contact