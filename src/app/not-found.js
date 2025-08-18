import React from "react";

import Link from "next/link";
const NotFoundPage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-white text-gray-900 transition-colors duration-200 dark:bg-neutral-950 dark:text-gray-100">
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-30 bg-[radial-gradient(closest-side,_#60a5fa,_transparent)] dark:opacity-20" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl opacity-30 bg-[radial-gradient(closest-side,_#a78bfa,_transparent)] dark:opacity-20" />
      </div>

      <section className="relative z-10 w-full max-w-lg">
        <div className="rounded-2xl border border-gray-200/60 bg-white/70 p-8 text-center shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-neutral-900/60">
          <h1 className="mb-2 text-[56px] leading-none font-extrabold tracking-tight sm:text-[80px] md:text-[96px]">
            <span className="bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-400">
              404
            </span>
          </h1>

          <h2 className="mb-3 text-xl sm:text-2xl font-semibold">
            Oops! That page can’t be found
          </h2>

          <p className="mb-8 text-base sm:text-lg text-gray-600 dark:text-gray-300">
            The page you’re looking for may have been moved or deleted.
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-gray-900/10 px-5 py-3 text-base font-medium transition 
                       hover:-translate-y-0.5 hover:shadow-lg 
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                       bg-gray-900 text-white hover:bg-gray-800 focus-visible:ring-gray-400 focus-visible:ring-offset-white
                       dark:border-white/10 dark:bg-white dark:text-neutral-900 dark:hover:bg-gray-100 dark:focus-visible:ring-gray-300 dark:focus-visible:ring-offset-neutral-900"
          >
            Go to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
