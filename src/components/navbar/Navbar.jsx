import React from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom'
import Home from '../../pages/home/Home'
import Cart from '../../pages/cart/Cart'
import New from '../../pages/newArrivals/New'

function Navbar() {
  return (
    <>
    <div className="top-navbar">
      <p>Sign up and get 20% off to your first order. Sign Up Now</p>
    </div>
    <div className="nav-row">
      <div className='logo'>
        <h1>SHOP.COM</h1>
      </div>
      <div className="nav-pages">
        <Link to="/">Shop</Link>
        <Link to="/login">Login</Link>
        <Link to="/newArrival">New Arrivals</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <div className="search"></div>
      <div className='nav-btn'></div>
    </div>
    </>
  )
}

export default Navbar
