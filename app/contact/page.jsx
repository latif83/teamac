"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! We’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Header />

      <section className="bg-gray-200 py-16 px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0d4785]">
            Get in Touch
          </h1>
          <p className="mt-3 text-gray-600 text-sm md:text-base">
            Have questions or need assistance? Our friendly team is always ready
            to help. Reach out to us — we’d love to hear from you.
          </p>
          <div className="w-16 mx-auto relative mt-4">
            <hr className="w-16 h-1 rounded-md bg-gradient-to-r from-[#FF6F61] to-[#00B4D8] border-none" />
            <span className="bg-gradient-to-r from-[#FF6F61] to-[#00B4D8] w-3 h-3 rounded-full absolute left-6 -top-1"></span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-md p-8 border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-[#0d4785] mb-6">
              Send Us a Message
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none resize-none"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full py-2.5 text-sm font-medium text-white bg-[#00B4D8] rounded-lg hover:bg-[#0092b3] transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6 text-gray-700">
            <div className="flex items-start gap-4">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-[#00B4D8] text-xl mt-1"
              />
              <div>
                <h3 className="font-semibold text-[#0d4785]">Email Us</h3>
                <p>info@teamacgloballtd.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-[#FF6F61] text-xl mt-1"
              />
              <div>
                <h3 className="font-semibold text-[#0d4785]">Call Us</h3>
                <p>+90 533 847 92 00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-[#00B4D8] text-xl mt-1"
              />
              <div>
                <h3 className="font-semibold text-[#0d4785]">Visit Us</h3>
                <p>Lefke, North Cyprus</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
              {/* Call */}
              <Link
                href="tel:+905338479200"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-[#000] hover:bg-[#000] hover:text-white text-[#000] transition-all duration-300"
                title="Call Us"
              >
                <FontAwesomeIcon icon={faPhoneAlt} width={25} height={25} />
              </Link>

              {/* Facebook */}
              <Link
                href="https://www.facebook.com/share/17dTdp3osn/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-[#00B4D8] hover:bg-[#00B4D8] hover:text-white text-[#00B4D8] transition-all duration-300"
                title="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} width={25} height={25} />
              </Link>

              {/* Instagram */}

              <Link
                href="https://www.instagram.com/teamac_global_ltd?igsh=MTJmeHpubGpjZThzdw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-[#FF6F61] hover:bg-[#FF6F61] hover:text-white text-[#FF6F61] transition-all duration-300"
                title="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} width={25} height={25} />
              </Link>

              {/* WhatsApp */}
              <Link
                href="https://wa.me/905338479200"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-lime-600 hover:bg-lime-600 hover:text-white text-lime-600 transition-all duration-300"
                title="WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} width={25} height={25} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
