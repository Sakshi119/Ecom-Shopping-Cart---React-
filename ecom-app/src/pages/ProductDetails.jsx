import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../features/products/productsSlice';
import { addToCart } from '../features/cart/cartSlice';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { singleProduct, singleStatus } = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(getSingleProduct(id))
  }, [id, dispatch])

  if (singleStatus === "loading") return <p>Loading...</p>
  if (singleStatus === "failed") return <p>Something went wrong!</p>
  if (!singleProduct) return null

  return (
    <>
      <Navbar></Navbar>
      <div className='product-details'>
        <div className='detail-product-container'>
          <div className='product-left-side'>
            <img src={singleProduct.image} alt={singleProduct.title} width="300" />
          </div>
          <div className='product-right-side'>
            <h2>{singleProduct.title}</h2>
            <p>{singleProduct.description}</p>
            <p className='price'>₹ {singleProduct.price}</p>
          </div>
        </div>

        <button onClick={() => dispatch(addToCart(singleProduct))} className='primary-btn'>
          Add to Cart
        </button>
        <Link to={`/products`} className="secondary-btn">Back to shop</Link>
      </div>
    </>
  )
}

export default ProductDetails