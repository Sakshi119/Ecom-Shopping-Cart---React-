import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../features/cart/cartSlice'
const Navbar = () => {
    const cartCount = useSelector(selectCartCount)
    return (
        <nav className='nav'>
            <div className='nav-links'>
                <NavLink to="/" className={({isActive})=> isActive ? "active-link" : ""}>Home</NavLink>
                <NavLink to="/products" className={({isActive})=> isActive ? "active-link" : ""}>Products</NavLink>
                <NavLink to="/cart" className={({isActive})=> isActive ? "active-link" : ""}>Cart ({cartCount})</NavLink>
            </div>
        </nav>
    )
}

export default Navbar