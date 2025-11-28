import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { GoogleTranslate } from "@/components/googleTranslateScript";

import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata = {
  title: "Teamac | Travel, Study Abroad & Accommodation Services",
  description:
    "Teamac is your trusted partner for study abroad, travel packages, and accommodation assistance. Explore opportunities, secure scholarships, and start your global journey today.",

  keywords: [
    "Teamac",
    "Teamac Global",
    "Teamac Global Ltd",
    "teamacgloballtd",
    "Study Abroad",
    "Travel Packages",
    "Student Accommodation",
    "Scholarships",
    "Visa Assistance",
    "International Education",
    "Global Opportunities",
    "Travel Agency",
    "Education Abroad",
    "Student Travel",
    "Accommodation Abroad",
    "Study Overseas",
    "Travel Consultancy",
    "International Travel Services",
    "Teamac CEO",
    "Travel Agency",
    "Education Abroad",
    "Student Travel",
    "Accommodation Abroad",
    "Study Overseas",
    "Travel Consultancy",
    "International Travel Services"
  ],

  metadataBase: new URL("https://www.teamacgloballtd.com"),
  applicationName: "Teamac Global",
  authors: [{ name: "Teamac Global Agency" }],
  creator: "Teamac Global",
  publisher: "Teamac Global",

  category: "travel",

  openGraph: {
    title: "Teamac — Your Trusted Partner for Global Opportunities",
    description:
      "Teamac helps students and professionals achieve their dreams abroad with expert guidance in study abroad, travel, housing, and visa support.",
    url: "https://www.teamacgloballtd.com",
    siteName: "Teamac",
    type: "website",
    images: [
      {
        url: "https://www.teamacgloballtd.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Teamac — Study Abroad & Travel Experts",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Teamac | Study Abroad, Travel & Accommodation Experts",
    description:
      "Your all-in-one agency for travel, education abroad, and housing. Get expert guidance and exclusive scholarships with Teamac.",
    creator: "@TeamacGlobal",
    images: ["https://www.teamacgloballtd.com/logo.png"],
  },

  alternates: {
    canonical: "https://www.teamacgloballtd.com",
  },

  icons: {
    icon: "https://www.teamacgloballtd.com/favicon.ico",
    apple: "https://www.teamacgloballtd.com/logo.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">

      {/* Google Tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-90NF3HX9WQ"
        strategy="afterInteractive"
      />

      <Script id="ga4-init" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-90NF3HX9WQ');
          `}
      </Script>

      <body
        className={`${poppins.className} antialiased`}
      >
        <ToastContainer
          position="top-right"
          newestOnTop={true}
          pauseOnHover
          theme="light"
          autoClose={5000}
          hideProgressBar={false}
          stacked
        />
        <GoogleTranslate />
        {children}

        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
  {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Teamac Global Ltd",
    "url": "https://www.teamacgloballtd.com",
    "logo": "https://www.teamacgloballtd.com/logo.png",
    "sameAs": [
      "https://facebook.com/teamac",
      "https://instagram.com/teamac"
    ],
    "description": "Teamac is your trusted partner for study abroad, travel packages, and student accommodation assistance."
  }
  `}
        </Script>

      </body>
    </html>
  );
}
