import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=''>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                Welcome to Footer Cloths Shop, where fashion meets quality and affordability! From trendy casuals to elegant formals, we offer a wide range of styles for every occasion. Discover top-notch fabrics, the latest designs, and unmatched value. Shop with us for a seamless blend of comfort, style, and elegance!
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5 '>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600' >
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5  '>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600' >
                    <li>+94-76-068-5458</li>
                    <li>mirunstudy2000@gmail.com</li>
                </ul>
            </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center '>Copyright 2024@ lovetoday.com - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
