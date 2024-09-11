import React, { useContext } from 'react'
import "./App.jsx"
import { Link } from 'react-router-dom'
import { ecomContext } from './App.jsx'

function Header() {
  const {cart} = useContext(ecomContext);
  return (
    <>
      <header>
        <h1>Ecommerce</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/cart">Cart <span>{cart.length}</span></Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </header>
    </>
  )
}

export default Header