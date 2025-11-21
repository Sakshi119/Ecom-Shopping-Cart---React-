import React, { useContext } from 'react'
import { Context } from '../Context/Context'
import Testamonials from './Testamonials'

const Services = () => {
    const {data} = useContext(Context)
  return (
    <>
    <div>Services {data}</div>
    <Testamonials />
    </>
  )
}

export default Services