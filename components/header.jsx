"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faChevronDown,
  faGlobe,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { MobileNav } from "./mobileNav";

const Header = () => {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [currency, setCurrency] = useState("USD");

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
    { code: "es", name: "Spanish" },
    { code: "de", name: "German" },
    { code: "ar", name: "Arabic" },
    { code: "zh-CN", name: "Chinese (Simplified)" },
    { code: "zh-TW", name: "Chinese (Traditional)" },
    { code: "ja", name: "Japanese" },
    { code: "ko", name: "Korean" },
    { code: "pt", name: "Portuguese" },
    { code: "it", name: "Italian" },
    { code: "nl", name: "Dutch" },
    { code: "sv", name: "Swedish" },
    { code: "pl", name: "Polish" },
    { code: "ru", name: "Russian" },
    { code: "hi", name: "Hindi" },
    { code: "bn", name: "Bengali" },
    { code: "tr", name: "Turkish" },
    { code: "fa", name: "Persian" },
    { code: "id", name: "Indonesian" },
    { code: "ms", name: "Malay" },
    { code: "th", name: "Thai" },
    { code: "vi", name: "Vietnamese" },
    { code: "sw", name: "Swahili" },
    { code: "am", name: "Amharic" },
    { code: "yo", name: "Yoruba" },
    { code: "ha", name: "Hausa" },
    { code: "ig", name: "Igbo" },
  ];

  const currencies = ["USD", "EUR", "GHS", "NGN"];

  const translateTo = (lang) => {
    document.cookie = `googtrans=/en/${lang}; path=/`;
    document.cookie = `googtrans=/en/${lang}; path=/; domain=${window.location.hostname}`;
    window.location.reload();
  }


  return (
    <header className="w-full left-0 bg-[#f2f2f2] z-50 flex justify-between items-center md:px-12 sm:px-6 px-3 py-3">
      {/* Logo */}
      <Link href="/" className="flex flex-col justify-center items-center">
        <Image
          src="/logo.png"
          alt="Teamac Logo"
          width={1000}
          height={1000}
          className="rounded-md md:w-[90px] w-[80px]"
        />
        <div className="uppercase text-center w-full mt-1">
          <h1 className="text-[#00B4D8] font-extrabold text-xl m-0 p-0 leading-none">Teamac</h1>
          <p className="text-xs text-[#FF6F61] font-semibold m-0 p-0 leading-none">
            Global LTD
          </p>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center text-sm gap-8">
        <Link href="/" className="text-gray-700 hover:text-[#00B4D8] transition">
          Home
        </Link>
        <Link href="/offers" className="text-gray-700 hover:text-[#00B4D8] transition">
          Offers
        </Link>
        <Link href="/services" className="text-gray-700 hover:text-[#00B4D8] transition">
          Services
        </Link>
        <Link href="/about-us" className="text-gray-700 hover:text-[#00B4D8] transition">
          About Us
        </Link>
        <Link href="/contact" className="text-gray-700 hover:text-[#00B4D8] transition">
          Contact
        </Link>
      </nav>

      {/* Right Controls (Language + Currency + Mobile Toggle) */}
      {/* <div className="flex items-center gap-4"> */}
        {/* Language Dropdown */}
        {/* <div className="relative group">
          <button className="flex items-center gap-1 text-gray-700 hover:text-[#00B4D8] transition">
            <FontAwesomeIcon icon={faGlobe} className="text-lg" />
            <span>{language}</span>
            <FontAwesomeIcon icon={faChevronDown} className="text-xs mt-0.5" />
          </button>
          <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-1 w-24 text-sm z-50">
            {languages.map((lang,index) => (
              <button
                key={index}
                onClick={() => { translateTo(lang.code); setLanguage(lang.code) }}
                className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${language === lang ? "text-[#00B4D8] font-medium" : "text-gray-700"
                  }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div> */}

        {/* <select
          onChange={(e) => translateTo(e.target.value)}
          className="p-2 rounded-md border border-gray-300"
        >
          {languages.map((lang,index) => (
            <option value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select> */}


        {/* Currency Dropdown */}
        {/* <div className="relative group">
          <button className="flex items-center gap-1 text-gray-700 hover:text-[#00B4D8] transition">
            <FontAwesomeIcon icon={faDollarSign} className="text-lg" />
            <span>{currency}</span>
            <FontAwesomeIcon icon={faChevronDown} className="text-xs mt-0.5" />
          </button>
          <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-24 text-sm z-50">
            {currencies.map((cur) => (
              <button
                key={cur}
                onClick={() => setCurrency(cur)}
                className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                  currency === cur ? "text-[#00B4D8] font-medium" : "text-gray-700"
                }`}
              >
                {cur}
              </button>
            ))}
          </div>
        </div> */}

        
        
      {/* </div> */}

{/* Mobile Menu Toggle */}
      <button
          className="md:hidden text-[#0d4785] text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>

      {/* Mobile Navigation */}
      {menuOpen && (
        <MobileNav setViewMNav={setMenuOpen} />
      )}
    </header>
  );
};

export default Header;
