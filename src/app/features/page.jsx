import React from "react";
import { fearuresData } from "@/utils/features-data";
function FeaturesPage() {
  const data = fearuresData;

  return (
    <div className="py-20">

        <div className="text-center">
            <h1 className="text-4xl font-bold">Why Choose QuickSaveVid?</h1>
            <p className="mt-3 dark:text-stone-300 text-slate-900">Our platform offers the best features to download TikTok videos quickly and easily</p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-5 p-10 w-full">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex justicfy-center items-center flex-col p-4 border bg-[#FFFFFF] dark:bg-black h-[230px] rounded shadow-md hover:shadow-xl hover:bg-gradient-to-b"
          >
            <div className="relative w-full ">
              <div className="absolute top-0 left-0">
                <p className="z-50 h-8 w-8 flex items-center justify-center rounded-full bg-[#6a60ee] text-white border">
                  {item.id}
                </p>
              </div>
            </div>

            <div className="mb-8 mt-4">{item.logo}</div>

            <div className="text-center">
              <p className="md:text-3xl font-bold text-[#6A60EE]">
                {item.title}
              </p>
              <span className="dark:text-stone-300 text-stone-800">
                {item.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesPage;
