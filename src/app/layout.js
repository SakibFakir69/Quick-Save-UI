import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import './../style/globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footerpage from "@/components/footer";

import Navbar from "@/components/nav-bar";
import { ThemeProvider } from "@/components/ui/theme-provider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "QuicksaveVid - Download TikTok Videos Without Watermark Free & High Quality",
  description: "Download TikTok videos quickly, for free, without watermark, and in high quality. Fast TikTok video downloader for all devices.",
  keywords: ["TikTok downloader", "Download TikTok videos", "TikTok video without watermark", "High-quality TikTok download"],
  openGraph: {
    title: "QuicksaveVid - Download TikTok Videos Without Watermark Free & High Quality",
    description: "Download TikTok videos quickly, for free, without watermark, and in high quality. Fast TikTok video downloader for all devices.",
    url: "https://www.quicksavevid.com",
    siteName: "QuicksaveVid",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QuicksaveVid - TikTok Video Downloader",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuicksaveVid - Download TikTok Videos Without Watermark Free & High Quality",
    description: "Download TikTok videos quickly, for free, without watermark, and in high quality. Fast TikTok video downloader for all devices.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.quicksavevid.com",
    languages: {
      "x-default": "https://www.quicksavevid.com", // Default for all other countries
      "en-US": "https://www.quicksavevid.com",
      "en-GB": "https://www.quicksavevid.com",
      "en-CA": "https://www.quicksavevid.com",
      "en-AU": "https://www.quicksavevid.com",
      "de-DE": "https://www.quicksavevid.com",
    },
  },

};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Search Console verification */}
        <meta
          name="google-site-verification"
          content="aRj8NbPQtAzHymP4PaNW_3IwNfrVQ1JQ8DE854Kl_IM"
        />
        <meta href="https://img.icons8.com/fluency/50/quick-mode-on.png"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Analytics />
          <SpeedInsights />

          <nav>
            <Navbar />


          </nav>

          <main>

            {children}




          </main>

          <footer>
            <Footerpage />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
