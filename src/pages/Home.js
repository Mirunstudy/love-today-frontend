import React from 'react'
import Hero from './../components/Hero';
import LatestCollection from '../components/LatestCollection';
import Bestseller from '../components/Bestseller';
import OutPolicy from './../components/OutPolicy';
import NewsletterBox from '../components/NewsletterBox';

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection />
      <Bestseller />
      <OutPolicy />
      <NewsletterBox />
    </div>
  )
}

export default Home
