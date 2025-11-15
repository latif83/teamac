import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { GoogleTranslate } from "@/components/googleTranslateScript";

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
    "Study Abroad",
    "Travel Packages",
    "Student Accommodation",
    "Scholarships",
    "Visa Assistance",
    "International Education",
    "Global Opportunities",
  ],
  authors: [{ name: "Teamac Global Agency" }],
  creator: "Teamac Global",
  metadataBase: new URL("https://teamac.com"), // Update this to your actual live domain

  openGraph: {
    title: "Teamac — Your Trusted Partner for Global Opportunities",
    description:
      "Teamac helps students and professionals achieve their dreams abroad with expert guidance in study abroad, travel, housing, and visa support.",
    url: "https://teamac.com",
    siteName: "Teamac",
    type: "website",
    images: [
      {
        url: "/logo.png", // Put this image in your /public/meta folder
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
    creator: "@TeamacGlobal", // your handle if you have one
    images: ["/meta/og-home.jpg"],
  },

  alternates: {
    canonical: "https://teamac.com",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
      </body>
    </html>
  );
}
