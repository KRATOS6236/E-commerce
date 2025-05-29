import React from 'react'
import './Home.css'

function Home() {

  // function fetchData(){
  //   fetch('https://fakestoreapi.com/products')
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // }
  // useEffect(() => {
  //   fetchData()
  // }, [])

  return (
    <>
       <div className='hero-container'>
        <h1>FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE</h1>
        <p>Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your individuality and cater to your sense of style.</p>
        <button>Shop Now</button>
        <div className='hero-row'>
          <div className='hero-row-1'>
            <h1>200+</h1>
            <p>International Brands</p>
          </div>
          <div className='hero-row-1'>
            <h1>2,000+</h1>
            <p>High-Quality Products</p>
          </div>
          <div className='hero-row-1'>
            <h1>30,000+</h1>
            <p>Happy Customers</p>
          </div>
        </div>
       </div>
    </>
  )
}

export default Home
