import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { addToCart, removeFromCart, increaseQty, decreaseQty, clearCart, selectCartItems, selectCartCount, selectCartSubTotal } from '../features/cart/cartSlice'
import { Link } from "react-router-dom";




const CartPage = () => {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  console.log(items, "cart items")
  const count = useSelector(selectCartCount)
  const subtotal = useSelector(selectCartSubTotal)


  return (
    <div className='cart-page'>
      <h2>Cart ({count} items)</h2>
      <div className='cart-item-list-section'>
        {items.map((item) => {

          return (
            <div key={item.id} className='item'>
              <img src={item.image} alt={item.title} />
              <div className='product-info'>
                <h4>{item.title}</h4>
                <p>₹ {item.price}</p>
                <div className='cart-btns'>
                  <button onClick={() => dispatch(decreaseQty(item.id))} className='cart-btn-pri'>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQty(item.id))} className='cart-btn-pri'>+</button>


                  <button onClick={() => dispatch(removeFromCart(item.id))} className='cart-btn-sec' style={{ marginLeft: '10px' }}>Remove</button>
                </div>

                <div className='subtotal'>
                  <h2>Subtotal</h2>
                  <h2>₹ {(item.price * item.quantity).toFixed(2)}</h2>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className='subtotal'>
        <h2>Total</h2>
        <h2>₹ {subtotal.toFixed()}</h2>
      </div>
      <Link to={`/products`} className="primary-btn">Back to shop</Link>

    </div>
  )
}

export default CartPage