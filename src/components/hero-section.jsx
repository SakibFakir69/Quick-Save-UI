import React from "react";

function HeroSection() {
  return (
    <div className=" bg-[#F2F2FB] dark:bg-black h-screen flex justify-center  py-16 w-full ">
      {/* text */}

      <section className=" w-full ">

        <div className="flex w-full justify-center text-center flex-col md:gap-y-4">

          <h2 className="md:text-5xl text-2xl font-bold bg-gradient-to-b from-[#6162F0] to-[#8D55E4] bg-clip-text text-transparent  ">

            Download TikTok Videos <br className="md:visible invisible"/> Without Watermark
          </h2>

          <span className=" text-center">

            The fastest and easiest way to save TikTok videos in HD quality
            without any watermarks. Free, <br className="md:visible invisible"/>secure, and no registration required.
          </span>
        </div>

          <h1 className='bg-gradient-to-b from-teal-400 to-pink-400 bg-clip-text text-transparent text-center text-5xl py-20'> Soon!</h1>
      </section>
    </div>
  );
}

export default HeroSection;
