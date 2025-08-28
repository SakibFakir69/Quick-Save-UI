"use client";
import React, { useState ,useEffect} from "react";
import { FcDownload } from "react-icons/fc";
import axios from "axios";
import AdBanner from "../AdBanner";


function DownloadUI() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoData, setVideoData] = useState(null);

  const [count, setCount] = useState(0);

  const counterFunction = async () => {
    try {
      const res = await axios.post(
        "https://tik-1-kzxw.onrender.com/api/counter"
      );
      setCount(res.data?.count);
      console.log(res);
    } catch (error) {}
  };


  const tiktokVideoDownload = async () => {
    if (!url.trim()) {
      alert("Please enter your URL");
      return;
    }

    try {
      setLoading(true);
      setVideoData(null);

      const res = await axios.post(
        `https://tik-1-kzxw.onrender.com/api/download-tiktok`,
        { url }
      );
      counterFunction();
      setVideoData(res.data);
  
      setUrl(" ");
    
    } catch (error) {
      console.error("Error downloading video:", error);
      alert("Failed to download. Please check the URL or try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-6">
      <div className="bg-white dark:bg-black shadow-2xl p-6 md:p-10 rounded-xl">
        <section className="flex flex-col md:flex-row gap-3 md:gap-4">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your TikTok video link"
          />

          <button
            onClick={tiktokVideoDownload}
            className="flex items-center justify-center gap-2 bg-gradient-to-b from-[#5E63F0] to-[#9453E2] text-white px-6 py-3 rounded-md hover:opacity-90 transition"
            disabled={loading}
          >
            {loading ? (
              "Downloading..."
            ) : (
              <>
                <FcDownload /> Download
              </>
            )}
          </button>
        </section>

        {/* Ads */}
        <div className="mt-6">
          <AdBanner
            adKey={"a51c2a35bf43564107606e2490f4cb45"}
            height={50}
            width={320}
          />
        </div>

        <div className="hidden sm:block mt-3">
          <AdBanner
            adKey="9280d5e6ff1b44ad1a4c06975a4bcf03"
            width={468}
            height={60}
            delay={500}
          />
        </div>

        {/* Download result */}
        {videoData && (
          <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
            <h3 className="font-semibold mb-2">Download Ready:</h3>
            <p className="text-sm mb-4">{videoData.title}</p>

            <a
              onClick={() => videoData(null)}
              href={`https://tik-1-kzxw.onrender.com${videoData.downloadUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
              download={true}
            >
              Click here to download your video
            </a>
          </div>
        )}
      </div>
      <h1 className="text-center">
        Total vide Download <span>{count}</span>
      </h1>
    </div>
  );
}

export default DownloadUI;
