"use client";
import HeroSection from '@/components/hero-section';
import React, { useState } from 'react';
import FAQsSection from './faq/page';
import HowItWorkPage from './how-it-work/page';
import FeaturesPage from './features/page';
import Head from 'next/head';
import AdBanner from '@/components/AdBanner';
function HomePage() {
  const [key, setKey] = useState('');

  setTimeout(() => {
    setKey("82b2719f640e5503f44c17db03880669");
  }, 1000);

  return (
    <>
      {/* SEO Head */}
      <Head>
        <title>QuicksaveVid - Free TikTok Video Downloader Without Watermark</title>
        <meta
          name="description"
          content="Download TikTok videos quickly, for free, without watermark, and in high quality. Works on all devices."
        />
        <meta name="keywords" content="TikTok downloader, download TikTok videos, TikTok MP4, TikTok without watermark" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.quicksavevid.com" />

        {/* Open Graph */}
        <meta property="og:title" content="QuicksaveVid - Free TikTok Video Downloader" />
        <meta property="og:description" content="Download TikTok videos quickly, for free, without watermark, and in high quality." />
        <meta property="og:url" content="https://www.quicksavevid.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.quicksavevid.com/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="QuicksaveVid - Free TikTok Video Downloader" />
        <meta name="twitter:description" content="Download TikTok videos quickly, for free, without watermark, and in high quality." />
        <meta name="twitter:image" content="https://www.quicksavevid.com/og-image.png" />
        <meta name="robots" content="index, follow"></meta>
      </Head>

      <main className='min-h-screen py-20'>

        {/* Hero section should have main H1 for SEO */}
        <HeroSection />

        <div>
          <script async="async" data-cfasync="false" src="//pl27471326.profitableratecpm.com/733b453a7f1c82e2a1d4106d67c54f94/invoke.js"></script>
          <div id="container-733b453a7f1c82e2a1d4106d67c54f94"></div>

        </div>

        <HowItWorkPage />

        <FeaturesPage />













        <FAQsSection />


      </main>
    </>
  );
}

export default HomePage;
