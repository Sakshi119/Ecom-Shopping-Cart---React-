import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../features/products/productsSlice';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Products = () => {

  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.products)
  console.log(items)
  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  return (
    <>
      <Navbar />
      <div className='product-listing-container'>
        {items.map((p) => {
          return (
            <ProductCard key={p.id} product={p} />
          )
        })}
      </div>
    </>
  )
}

export default Products