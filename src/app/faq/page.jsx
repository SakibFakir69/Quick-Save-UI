"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is this TikTok downloader free to use?",
    answer: "Yes! Our TikTok downloader is completely free. You can download unlimited TikTok videos without any hidden fees.",
  },
  {
    question: "Do I need to install any app?",
    answer: "No installation required. Just paste the TikTok video link here and download instantly from your browser.",
  },
  {
    question: "Can I download videos without watermark?",
    answer: "Yes, our downloader lets you save TikTok videos with or without watermark based on your choice.",
  },
  {
    question: "Is it safe to use?",
    answer: "Absolutely. We don’t store your downloads or require login. It’s 100% secure and private.",
  },
  {
    question: "Does it work on mobile?",
    answer: "Yes! Our TikTok downloader works perfectly on iPhone, Android, tablets, and desktop browsers.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 dark:from-gray-900 dark:via-gray-800 dark:to-black py-16 px-4 md:px-12 rounded-3xl shadow-lg m-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg text-white dark:text-pink-400">
          Frequently Asked Questions
        </h2>
        <p className="text-lg mb-12 text-white/90 dark:text-gray-300">
          Quick answers about using our TikTok downloader
        </p>
      </div>
      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 dark:border dark:border-gray-700 text-gray-900 dark:text-gray-200 rounded-2xl shadow-md transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-lg hover:text-pink-600 dark:hover:text-pink-400"
            >
              {faq.question}
              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-pink-500 dark:text-pink-400" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-700 dark:text-gray-300 text-base leading-relaxed animate-fadeIn">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
