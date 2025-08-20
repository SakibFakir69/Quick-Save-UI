import React from "react";
import { fearuresData } from "@/utils/features-data";
import AdBanner from "@/components/AdBanner";
function FeaturesPage() {
  const data = fearuresData;

  return (
    <section
      id="features"
      className="py-20 bg-white dark:bg-gray-900"
      aria-labelledby="features-title"
    >
      <div className="flex justify-center border ">
        <AdBanner
          adKey="82b2719f640e5503f44c17db03880669"
          width={300}
          height={250}
        />

      </div>
      {/* Section header */}
      <div className="text-center max-w-3xl mx-auto">
        <h2
          id="features-title"
          className="text-4xl font-bold text-gray-900 dark:text-white"
        >
          Why Choose QuickSaveVid?
        </h2>
        <p className="mt-3 text-lg text-gray-700 dark:text-stone-300">
          Our platform offers the best features to download TikTok videos
          quickly and easily
        </p>
      </div>

      {/* Features grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 max-w-6xl mx-auto">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex justify-center items-center flex-col p-6 border rounded-2xl shadow-md bg-white dark:bg-blacktransition-all duration-300 dark:bg-black"
          >
            {/* Feature number */}
            <div className="relative w-full">
              <div className="absolute top-0 left-0">
                <p className="h-8 w-8 flex items-center justify-center rounded-full bg-[#6a60ee] text-white border">
                  {item.id}
                </p>
              </div>
            </div>

            {/* Logo */}
            <div className="mb-4 mt-8">{item.logo}</div>

            {/* Title & description */}
            <div className="text-center">
              <p className="md:text-2xl font-bold text-[#6A60EE]">
                {item.title}
              </p>
              <p className="mt-2 text-gray-800 dark:text-stone-300">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesPage;
