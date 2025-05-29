import React from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom'

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
        <Link to="/" className='nav-link'>Shop</Link>
        <Link to="/login" className='nav-link'>Login</Link>
        <Link to="/newArrival" className='nav-link'>New Arrivals</Link>
        <Link to="/cart" className='nav-link'>Cart</Link>
      </div>
      <div className="search">
        <input type="text" placeholder='Search For Products..' className='search-input' />
      </div>
      <div className='nav-btn'>
        <Link to="/login" className='nav-btn-1'>Sign Up</Link>
        <Link to="/login" className='nav-btn-2'>Login</Link>
      </div>
    </div>
    </>
  )
}

export default Navbar