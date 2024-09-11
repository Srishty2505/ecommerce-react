import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ecomContext } from '../App'
import CartQty from './CartQty'
// import { FaRupeeSign } from "react-icons/fa";

function Product({ product }) {
  const [cart, setCart] = useState([null])

   const {handleAddToCart , isProductInCart} = useContext (ecomContext)


console.log(cart)
  return (
    <div className='product'>
      <img src={product.image} alt="" />
      <div className="info">
        <h5>{product.title}</h5>
        <p><span>${product.price} </span></p>
        {isProductInCart(product) ? (
          <CartQty productID ={product.id} />
        ) : (
          <Link to="" onClick={() => handleAddToCart(product)}>Add to Cart</Link>
        )}
           
      </div>  
    </div>
  )
}

export default Product