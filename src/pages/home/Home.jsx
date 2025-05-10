import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import ProductCard from '../../components/navbar/ProductCard'

function Home() {

  return (
    <>
        <div className='flex h-16'>
          <div></div>
          <div className='m-auto'>
            <Link to="men" className='mr-10 hover:border-b-2 hover:border-zinc-700'>Men's Shoes</Link>
            <Link to="women" className='hover:border-b-2 hover:border-zinc-700'>Women's Shoes</Link>
            <Link to="newArrival" className='ml-10 hover:border-b-2 hover:border-zinc-700'>New Arrival</Link>
          </div>
          <div></div>
        </div>

        <div className='w-100% h-screen bg-[url(hero.avif)] bg-cover flex pt-60 pr-10'>
          <div className='w-full'></div>
          <div></div>
          <div className='w-3/4'>
          <h1 className='text-white text-7xl text-right mt-5 font-medium'>Deliciously <br /> Comfortable</h1>
          <p className='text-white text-base text-right mt-8 font-mono font-normal'>Great taste starts with light, airy sneakers</p>
          <div className='flex mt-10'>
            <div className='w-1/3'></div>
            <button className='m-auto text-lg text-center font-mono bg-white w-40 justify-center h-11 hover:text-white hover:bg-black font-semibold'>SHOP MEN</button>
            <button className='m-auto text-lg text-center font-mono bg-white w-40 justify-center h-11 hover:text-white hover:bg-black font-semibold'>SHOP WOMEN</button>
          </div>
          </div>
        </div>

        <div className='flex w-100% h-[34rem] p-10 gap-5'>
          <div className='w-96 h-full bg-black'>
            <div className='w-96 h-full bg-slate-600'>
              <div className='w-96 h-full overflow-hidden'>
                <img src="card1.avif" alt="" className='w-96 h-full transition-transform ease-in-out hover:scale-105'/>
              </div>
              <div></div>
            </div>
          </div>

          <div className='w-96 h-full bg-black'>
            <div className='w-96 h-full bg-slate-600'>
              <div className='w-96 h-full overflow-hidden'>
                <img src="card2.avif" alt="" className='w-96 h-full transition-transform ease-in-out hover:scale-105'/>
              </div>
              <div></div>
            </div>
          </div>

          <div className='w-96 h-full bg-black'>
            <div className='w-96 h-full bg-slate-600'>
              <div className='w-96 h-full overflow-hidden'>
                <img src="card3.avif" alt="" className='w-96 h-full transition-transform ease-in-out hover:scale-105'/>
              </div>
              <div></div>
            </div>
          </div>

        </div>
    </>
  )
}

export default Home
