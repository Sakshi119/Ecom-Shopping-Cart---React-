import React, { useContext } from 'react'
import { Context } from '../Context/Context'
import Contact from './Contact'

const About = () => {

    const {data} = useContext(Context)
  return (
    <>
    <div>About {data}</div>
    <Contact />
    </>
  )
}

export default About