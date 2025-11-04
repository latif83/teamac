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

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [currency, setCurrency] = useState("USD");

  const languages = ["EN", "FR", "ES"];
  const currencies = ["USD", "EUR", "GHS", "NGN"];

  return (
    <header className="w-full left-0 bg-white shadow-md z-50 flex justify-between items-center md:px-12 px-6 py-3">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Teamac Logo"
          width={1000}
          height={1000}
          className="rounded-md w-[70px]"
        />
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
        <Link href="/about" className="text-gray-700 hover:text-[#00B4D8] transition">
          About Us
        </Link>
        <Link href="/contact" className="text-gray-700 hover:text-[#00B4D8] transition">
          Contact
        </Link>
      </nav>

      {/* Right Controls (Language + Currency + Mobile Toggle) */}
      <div className="flex items-center gap-4">
        {/* Language Dropdown */}
        <div className="relative group">
          <button className="flex items-center gap-1 text-gray-700 hover:text-[#00B4D8] transition">
            <FontAwesomeIcon icon={faGlobe} className="text-lg" />
            <span>{language}</span>
            <FontAwesomeIcon icon={faChevronDown} className="text-xs mt-0.5" />
          </button>
          <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-24 text-sm z-50">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                  language === lang ? "text-[#00B4D8] font-medium" : "text-gray-700"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

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

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#0d4785] text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-inner">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <Link href="/" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-[#00B4D8]">
              Home
            </Link>
            <Link href="/offers" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-[#00B4D8]">
              Offers
            </Link>
            <Link href="/services" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-[#00B4D8]">
              Services
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-[#00B4D8]">
              About Us
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-[#00B4D8]">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
