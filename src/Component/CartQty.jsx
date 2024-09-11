import { MdRemoveShoppingCart } from "react-icons/md";
import React, { useContext } from 'react'
import { ecomContext } from "../App";


function CartQty({productID}) {
  const {handleRemoveFromCart  , increment , decrement , getproductquantity} = useContext (ecomContext)

  

  return (
   <div className='minicart'>
    <div className='cartqty'>
      <button onClick={()=>increment(productID)}>+</button>
        <p>{getproductquantity(productID)}</p>

      <button onClick={()=> decrement(productID)}>-</button>
    </div>
    <MdRemoveShoppingCart onClick={() =>handleRemoveFromCart(productID)} />

   </div>
  )
}

export default CartQty