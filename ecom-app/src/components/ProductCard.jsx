import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function ProductCard({ product }) {
    const dispatch = useDispatch()
    // const navigate = useNavigate()
    return (
        <div className="product-card">
            <span className="category">{product.category}</span>
            <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.title} />
            </Link>
            <h4>{product.title.slice(0, 20)}...</h4>
            <p> ₹ {product.price}</p>

            <div className="btn-con">
                <button onClick={() => { dispatch(addToCart(product)) }} className="secondary-btn">Add to cart</button>
                <Link to={`/product/${product.id}`} className="primary-btn">View Details</Link>
            </div>
        </div>
    )
}

export default ProductCard