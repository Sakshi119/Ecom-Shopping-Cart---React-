import React, { useContext } from 'react'

import About from './About'
import { Context } from '../Context/Context'

const Home = () => {

const {data,setData} = useContext(Context)
  return (
    <>
        <div>Home {data}</div>
        <input type='text' onChange={e => setData(e.target.value)} />
        <About />
    </>
  )
}

export default Home