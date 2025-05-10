import React from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className='w-100% h-10 bg-emerald-900 flex'>
        <p className='text-white m-auto font-bold text-xs'>Free Shipping On Orders Over $75. Easy Returns.</p>
    </div>
    <div className='sticky top-0 w-full h-16 bg-white shadow-xl flex gap-10 z-50 '>
        <nav className='m-auto font-bold flex text-sm '>
        <Link to="men" className='m-auto mr-7 hover:border-b-2 hover:border-zinc-950'>MEN</Link>
        <Link to="women" className=' m-auto mr-7 hover:border-b-2 hover:border-zinc-950'>WOMEN</Link>
        <Link to="socks" className='mr-7 m-auto hover:border-b-2 hover:border-zinc-950'>SOCKS</Link>
        <Link to="newArrival" className='m-auto hover:border-b-2 hover:border-zinc-950' >NEW ARRIVAL</Link>
        </nav>
        <nav className='m-auto'>
        <Link to=""><img src="logo.svg" alt="" className='w-24 h-10 justify-center' /></Link>
        </nav>
        <nav className='m-auto font-bold flex'>
        <Link to="sustain" className='m-auto hover:border-b-2 hover:border-zinc-950'>SUSTAINABILITY</Link>
        <Link to="rerun" className='ml-7 m-auto hover:border-b-2 hover:border-zinc-950'>RERUN</Link>
        <Link to="stores" className='ml-7 m-auto hover:border-b-2 hover:border-zinc-950'>STORES</Link>
        <Link to="login" className='ml-7 m-auto'><img src="login.svg" alt="" className='w-5 h-10' /></Link>
        <Link to="help" className='ml-7 m-auto'><img src="help.svg" alt="" className='w-5 h-10' /></Link>
        <Link to="cart" className='ml-7 m-auto'><img src="cart.svg" alt="" className='w-5 h-10' /></Link>
        </nav>
    </div>
    </>
  )
}

export default Navbar
