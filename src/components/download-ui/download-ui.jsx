"use client";
import React, { useState, useEffect } from "react";
import { FcDownload } from "react-icons/fc";
import axios from "axios";
import AdBanner from "../AdBanner";

import { useDownloadVideoMutation } from "../redux/api/download/download";

function DownloadUI() {

  const [downloadVideo,{isLoading,error}] = useDownloadVideoMutation();

  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoData, setVideoData] = useState(null);

  const [count, setCount] = useState(0);

  // Fetch current count on component mount
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await axios.get("https://tik-1-kzxw.onrender.com/counter");
        setCount(res.data?.count || 0);
        console.log(res?.data, "data");
      } catch (err) {
        console.error("Failed to fetch count:", err);
      }
    };
    fetchCount();
  }, []);

  const counterFunction = async () => {
    try {
      const res = await axios.post(
        "https://tik-1-kzxw.onrender.com/api/counter"
      );
    } catch (error) {
      console.error("Failed to update counter:", error);
    }
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

      // Set video data to state
      setVideoData(res.data);

      setUrl(""); // clear input
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
          <div className="relative flex-1">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-4 py-2 pr-20 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your TikTok video link"
            />

            {/* Paste button inside input */}
            <button
              onClick={() => {
                navigator.clipboard.readText().then((text) => setUrl(text));
              }}
              className="absolute top-1/2 right-1.5 transform -translate-y-1/2 bg-indigo-500 text-white px-3  py-1 rounded-md hover:bg-indigo-600 transition text-sm"
            >
              Paste
            </button>
          </div>

          <button
            onClick={tiktokVideoDownload}
            className="flex items-center justify-center gap-2 bg-gradient-to-b from-[#5E63F0] to-[#9453E2] text-white px-6 py-3 rounded-md hover:opacity-90 transition"
            disabled={loading}
          >
            {loading ? "Downloading..." : "Submit"}
          </button>
        </section>

        {/* Ads */}
        <div className="mt-6"></div>

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
          
            <p className="text-sm mb-4">{videoData.title}</p>

            <a
              onClick={() => setVideoData(null)}
              href={`https://tik-1-kzxw.onrender.com${videoData.downloadUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
              download={true}
            >
              <FcDownload/>Download Now
            </a>
          </div>
        )}
      </div>
      <h1 className="text-center">
        Total video Download <span>{count}</span>
      </h1>
    </div>
  );
}

export default DownloadUI;
