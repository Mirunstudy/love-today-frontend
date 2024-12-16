import React, { useContext, useState,useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const Bestseller = () => {

    const {products}= useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);

    useEffect(()=>{
        console.log("Products:", products);
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestSeller(bestProduct.slice(0,5))
    },[products])

  return (
    <div className='my-10 '>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLER'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Discover our best-seller collection! Trendy, high-quality clothing designed for comfort and style. Perfect for every occasion, with a variety of options to suit your unique taste.
        </p>
      </div>
      <div className='grid grid-col2-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
            {products.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image } name={item.name} price={item.price} />
            ))}

        </div>

    </div>
  )
}

export default Bestseller
