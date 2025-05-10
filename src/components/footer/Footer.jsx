import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='bg-zinc-800 w-100%'>
      <div className='flex pt-16 cursor-pointer'>
        <div className='ml-8'>
          <ul className='text-white font-mono'>
            <li className='font-bold text-lg'>HELP</li>
            <li className='mt-2.5 text-base'>Chat with us!</li>
            <li className='mt-2.5 text-base'>1-888-963-8944</li>
            <li className='mt-2.5 text-base'>1-814-251-9966 (Text)</li>
            <li className='mt-2.5 text-base'>help@allbirds.com</li>
            <li className='mt-2.5 text-base'>Returns/Exchanges</li>
            <li className='mt-2.5 text-base'>FAQ/Contact Us</li>
            <li className='mt-2.5 text-base'>FAQ/Contact Us</li>
            <li className='mt-2.5 text-base'>Afterpay</li>
          </ul>
        </div>
        <div className='ml-36'>
          <ul className='text-white font-mono'>
            <li className=' font-bold text-lg'>SHOP</li>
            <li className='mt-3.5 text-base'>Men's Shoes</li>
            <li className='mt-3.5 text-base'>Women's Shoes</li>
            <li className='mt-3.5 text-base'>Men's Apparel</li>
            <li className='mt-3.5 text-base'>Women's Apparel</li>
            <li className='mt-3.5 text-base'>Socks</li>
            <li className='mt-3.5 text-base'>Gift Cards</li>
            <li className='mt-3.5 text-base'>Refer a Friend</li>
          </ul>
        </div>
        <div className='ml-36'>
          <ul className='text-white font-mono'>
            <li className=' font-bold  text-lg'>COMPANY</li>
            <li className='mt-3 text-base'>Our Stores</li>
            <li className='mt-3 text-base'>Our Story</li>
            <li className='mt-3 text-base'>Our Materials</li>
            <li className='mt-3 text-base'>Sustainability</li>
            <li className='mt-3 text-base'>Investors</li>
            <li className='mt-3 text-base'>Shoe Care</li>
            <li className='mt-3 text-base'>Affiliates</li>
            <li className='mt-3 text-base'>Bulk Orders</li>
            <li className='mt-3 text-base'>Careers</li>
            <li className='mt-3 text-base'>Press</li>
            <li className='mt-3 text-base'>Allbirds Responsible Disclosure Program</li>
            <li className='mt-3 text-base'>California Transparency Act</li>
            <li className='mt-3 text-base'>Community Offers</li>
            <li className='mt-3 text-base'>Our Blog</li>
            <li className='mt-3 text-base'>Patents</li>
          </ul>
        </div>
      </div>
      <div className='text-white flex mt-10'>
        <div className='m-8'>
          <h2 className='font-bold font-serif'>FOLLOW THE FLOCK</h2>
          <p className='mt-5 font-sans'>Exclusive offers, a heads up on new things, <br/> and sightings of Allbirds in the wild. Oh, we <br /> have cute sheep, too. #allbirds</p>
        </div>
        <div>
          {/* Country flags */}
        </div>
      </div>
      <div className='pb-20 mt-20'>
      <p className='text-white text-center pt-5'>© 2024 Allbirds, Inc. All Rights Reserved. Terms, Privacy & Accessibility</p>
      <p className='text-white text-center pt-5'>Do Not Sell My Personal Information</p>
      </div>
    </div>
  )
}

export default Footer
