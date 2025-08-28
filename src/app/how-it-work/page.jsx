"use client"
import { useState,useEffect } from "react";
import HowitWorkSection from "@/components/how-it-work";
import React from "react";

function HowItWorkPage() {


   



  return (
    <section
      id="how-it-works"
      className="py-20 bg-white dark:bg-gray-900"
      aria-labelledby="how-it-works-title"
    >

      {/* Heading for SEO */}
      <h2
        id="how-it-works-title"
        className="text-4xl font-bold text-center text-gray-900 dark:text-white"
      >
        How It Works
      </h2>

      {/* Subheading / description */}
      <p className="mt-3 text-center text-lg text-gray-700 dark:text-stone-400 max-w-2xl mx-auto">
        Download any TikTok video in three simple steps
      </p>

      {/* Steps component */}
      <HowitWorkSection />
    </section>
  );
}

export default HowItWorkPage;
