// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css"
import { createContext, useState } from 'react';

export const ecomContext = createContext(null)




function App() {

  //Pages: Home, About, Products, Blog, Contact

  // APIs: 
  // products: https://fakestoreapi.com/products
  // blog: https://jsonplaceholder.typicode.com/posts

  const [cart, setCart] = useState([])

  function handleAddToCart(obj) {

    const productaddingtocart= {...obj , quantity:1}
    setCart([...cart, productaddingtocart])
  }

  function isProductInCart(product)
  {
        
        const productFound = cart.find((cartitem) =>{
        return cartitem.id ===product.id;
        })
        return productFound
  }
  function handleRemoveFromCart(productID)
  {
    setCart(
    cart.filter((cartitem)=> {
      return cartitem.id !== productID })
    )
  }

  function getproductquantity(productID)
  {
const productfound =cart.find((cartitem) =>
{
return cartitem.id ===productID;
})
  return productfound.quantity
  }
 
  function increment(productID)
  {
    setCart (cart.map(cartitem => cartitem.id === productID ? {...cartitem , quantity : cartitem.quantity + 1}: cartitem))
  }
  function decrement(productID)
  {
   setCart( cart.map(cartitem => cartitem.id === productID ?{...cartitem , quantity: cartitem.quantity-1} : cartitem))
  }

  return (
    <BrowserRouter>
      <ecomContext.Provider value={{cart , setCart ,handleAddToCart ,  isProductInCart , handleRemoveFromCart , increment , decrement , getproductquantity }}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </main>
        <Footer />
      </ecomContext.Provider>
    </BrowserRouter>
  );
}

export default App
