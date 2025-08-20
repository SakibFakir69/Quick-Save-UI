"use client"
import HeroSection from '@/components/hero-section';
import React, { useState } from 'react'
import FAQsSection from './faq/page';
import AdBanner from '@/components/AdBanner';
import HowItWorkPage from './how-it-work/page';
import FeaturesPage from './features/page';

function HomePage() {

  const  [ key , setKey ] = useState('');

  setTimeout(()=>{
    setKey("82b2719f640e5503f44c17db03880669")

  },1000)



  return (
    <div className='min-screen'>
      {/* This empty h1 seems unnecessary - consider removing it */}
      <h1 className='py-14 md:py-20 dark:bg-black bg-[#F2F2FB]'></h1>

      <HeroSection />

      <HowItWorkPage />
      
      {/* Make sure this component is properly imported */}
      <AdBanner  adKey={key}
        width={300} 
        height={250} 
        delay={200} />

        <FeaturesPage/>

      <FAQsSection />
    </div>
  )
}

export default HomePage;