"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#000] text-white">
      <div className="mx-auto w-full max-w-screen-xl p-6 md:py-10">
        <div className="md:flex md:justify-between md:items-start">
          {/* Logo & Short Description */}
          <div className="mb-6 md:mb-0 max-w-sm">
            <a href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Teamac Logo"
                width={60}
                height={60}
                className="mr-3"
              />
              <span className="flex items-center justify-center flex-col">
                <span className="self-center uppercase text-xl font-bold text-white">
                  Teamac
                </span>
                <span className="uppercase text-xs font-semibold">
                  GLOBAL LTD
                </span>
              </span>
            </a>
            <p className="mt-3 text-sm text-gray-300 leading-relaxed">
              Your trusted partner for{" "}
              <span className="text-[#00B4D8] font-semibold">
                Travel, Study Abroad
              </span>{" "}
              and{" "}
              <span className="text-[#FF6F61] font-semibold">
                Accommodation Solutions
              </span>
              .
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase text-white">
                Explore
              </h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="hover:text-[#00B4D8] transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about-us" className="hover:text-[#00B4D8] transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/our-services" className="hover:text-[#00B4D8] transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/offers" className="hover:text-[#00B4D8] transition">
                    Offers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase text-white">
                Support
              </h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/contact-us" className="hover:text-[#00B4D8] transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/contact-us" className="hover:text-[#00B4D8] transition">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="/testimonials" className="hover:text-[#00B4D8] transition">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase text-white">
                Legal
              </h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-[#00B4D8] transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00B4D8] transition">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-600" />

        {/* Socials + Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-sm text-gray-300 text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#00B4D8] font-semibold uppercase">Teamac</span>. All
            Rights Reserved.
          </span>

          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-300 hover:text-[#00B4D8] transition"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#00B4D8] transition"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#00B4D8] transition"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#00B4D8] transition"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
