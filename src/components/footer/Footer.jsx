import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return(
    <>
    <div className='footer-container'>
      <div className='footer-card'>
      <div className='footer-top'>
        <h1>STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</h1>
      </div>
      <div className='footer-top-input'>
        <input type='text' placeholder='Enter Your Email Address' />
        <button>Subscribe to NewsLetter</button>
      </div>
      </div>
      <div className='footer-bottom'>
        <div className='footer-cln-1'>
          <Link to='/' className='footer-cln-1-link'>SHOP.CO</Link>
          <p>We have clothes that suits your style and <br /> which you’re proud to wear. From <br /> women to men.</p>
        </div>
        <div className='footer-cln-2'>
          <ul className='footer-heading'>Company</ul>
          <ul className='ul'>About</ul>
          <ul className='ul'>Features</ul>
          <ul className='ul'>Works</ul>
          <ul className='ul'>Carrer</ul>
        </div>
        <div className='footer-cln-3'>
          <ul className='footer-heading'>Help</ul>
          <ul className='ul'>Costumer Support</ul>
          <ul className='ul'>Delivery Details</ul>
          <ul className='ul'>Terms & Conditions</ul>
          <ul className='ul'>Privacy Policy</ul>
        </div>
        <div className='footer-cln-4' >
          <ul className='footer-heading'>FAQ</ul>
          <ul className='ul'>Account</ul>
          <ul className='ul'>Manage Deliveries</ul>
          <ul className='ul'>Orders</ul>
          <ul className='ul'>Payments</ul>
        </div>
        <div className='footer-cln-5'>
          <ul className='footer-heading'>Resources</ul>
          <ul className='ul'>Free e-books</ul>
          <ul className='ul'>Development Tutorial</ul>
          <ul className='ul'>How to - Blog</ul>
          <ul className='ul'>Youtube Playlist</ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer
