import React, { useContext } from 'react'
import { Context } from '../Context/Context'

const Testamonials = () => {
    const {data} = useContext(Context)
  return (
    <div>Testamonials{data}</div>
  )
}

export default Testamonials