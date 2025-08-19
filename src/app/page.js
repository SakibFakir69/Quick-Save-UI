



import HeroSection from '@/components/hero-section';
import React from 'react'
import FAQsSection from './faq/page';
import AdBanner from '@/components/AdBanner';
import HowItWorkPage from './how-it-work/page';



function HomePage() {
  return (
    <div className='min-screen'>

      <h1 className='py-14 md:py-20  dark:bg-black bg-[#F2F2FB]'></h1>





      <HeroSection />

 









      {/* <AdBanner300x250 /> */}

      <HowItWorkPage />

                <AdBanner adKey="82b2719f640e5503f44c17db03880669" width={300} height={250} />

      
      <FAQsSection />





    </div>
  )
}

export default HomePage;