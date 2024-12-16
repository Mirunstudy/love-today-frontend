import React from 'react'
import Title from './../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from './../components/NewsletterBox';

const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t '>
            <Title text1={'ABOUT '} text2={'US'} />
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                <p>Love Today Clothing Shop offers trendy and affordable fashion for all ages. With a diverse collection of stylish outfits, from casual wear to elegant ensembles, it’s your go-to destination for every occasion. Quality fabrics and unique designs make shopping here a delightful experience. Redefine your style with Love Today!</p>
                <p>
                With a commitment to customer satisfaction, Love Today Clothing Shop provides personalized service, helping shoppers discover outfits that suit their style and personality. Regular new arrivals and exclusive collections ensure there’s always something fresh and exciting for fashion enthusiasts.</p>

                <b className='text-gray-800'>Our Mission</b>
                <p>Our mission at Love Today Clothing Shop is to offer stylish, affordable clothing that inspires confidence, fosters self-expression, and ensures an enjoyable shopping experience for all.</p>
                
            </div>
        </div>
        <div className='text-4xl py-4'>
            <Title text1={'WHY '} text2={'CHOSE US'} />
        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Quality Assurance:</b>
                <p className='text-gray-600 '>At Love Today Clothing Shop, we prioritize quality by sourcing premium fabrics and ensuring meticulous craftsmanship. Every item undergoes strict quality checks, guaranteeing durable, comfortable, and stylish clothing for our valued customers.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Convenience:</b>
                <p className='text-gray-600 '>Our Shop ensures convenience with easy-to-navigate stores, flexible payment options, and a seamless online shopping experience. We strive to make fashion accessible anytime, anywhere, for our customers' satisfaction.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Exceptional Customer Service:</b>
                <p className='text-gray-600 '>At our Shop, exceptional customer service is our priority. Our friendly, knowledgeable team is dedicated to assisting you in finding the perfect outfit. We value your feedback and ensure a delightful, personalized shopping experience every time.</p>
            </div>
        </div>
        <NewsletterBox />

    </div>
    
  )
}

export default About
