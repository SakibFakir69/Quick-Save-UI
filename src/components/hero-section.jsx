"use client";

import React from "react";
import DownloadUI from "./download-ui/download-ui";


function HeroSection() {
  return (
    <div className="p-10  bg-[#F2F2FB] dark:bg-black md:flex justify-center  w-full flex-col   ">
      {/* text */}
  

      <div className="flex flex-col  ">

        <section className=" w-full ">
          <div className="flex w-full justify-center -mt-10 text-center flex-col md:gap-y-4">
            <h2 className="md:text-5xl text-2xl font-bold bg-gradient-to-b from-[#6162F0] to-[#8D55E4] bg-clip-text text-transparent  ">
              Download TikTok Videos <br className="md:visible invisible" />{" "}
              Without Watermark
            </h2>

            <span className=" text-center">
              The fastest and easiest way to save TikTok videos in HD quality
              without any watermarks. Free,{" "}
              <br className="md:visible invisible" />
              secure, and no registration required.
            </span>
          </div>
        </section>

        {/* download ui */}
        <section className="flex justify-center ">
          <DownloadUI />
        </section>
        
      </div>
    </div>
  );
}

export default HeroSection;
