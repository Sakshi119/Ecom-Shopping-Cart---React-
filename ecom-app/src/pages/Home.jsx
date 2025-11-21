import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className='home-section'>
        <h1>Welcome to Happy Star Shop 🛍️</h1>
        <Link to="/products" className="primary-btn" style={{ background: "#f2c73d" }}>Go to Products</Link>
      </div>
    </>
  )
}

export default Home