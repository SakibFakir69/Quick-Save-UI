



import HeroSection from '@/components/hero-section';
import React from 'react'
import FAQsSection from './faq/page';
import AdBanner300x250 from '@/components/ads/banner-ads-300x250';
import HowItWorkPage from './how-it-work/page';



function HomePage() {
  return (
    <div className='min-screen'>

      <h1 className='py-14 md:py-20  dark:bg-black bg-[#F2F2FB]'></h1>





      <HeroSection />

 









      {/* <AdBanner300x250 /> */}

      <HowItWorkPage />

            <AdBanner300x250 />

      
      <FAQsSection />





    </div>
  )
}

export default HomePage;