



import HeroSection from '@/components/hero-section';
import React from 'react'
import FAQsSection from './faq/page';
import AdBanner300x250 from '@/components/ads/banner-ads-300x250';

function HomePage() {
  return (
    <div className='h-screen'>

      <h1 className='py-14 md:py-20  dark:bg-black bg-[#F2F2FB]'></h1>

      <HeroSection />

      <FAQsSection />
      <AdBanner300x250 />





    </div>
  )
}

export default HomePage;