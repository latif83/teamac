"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Thanks to Teamac, I secured admission in Canada with smooth visa processing. Their guidance made the entire journey stress-free!",
      name: "Sarah A.",
    },
    {
      id: 2,
      quote:
        "Teamac handled my travel arrangements perfectly. Everything from my ticketing to accommodation was seamless and affordable.",
      name: "Michael T.",
    },
    {
      id: 3,
      quote:
        "Their consultants are professional and supportive. I’m now studying in the UK — couldn’t have done it without them!",
      name: "Jennifer K.",
    },
    {
      id: 4,
      quote:
        "I highly recommend Teamac. The process was transparent and they were available every step of the way — truly reliable!",
      name: "David L.",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
    }, 7000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Split testimonials into pairs of 2 per slide
  const slides = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    slides.push(testimonials.slice(i, i + 2));
  }

  return (
    <section className="py-20 md:px-12 px-4 bg-gradient-to-t from-[#00B4D8] to-[#FF6F61] relative overflow-hidden">
      {/* Header */}
      <h1 className="text-xl font-bold text-[#0d4785] text-center">WHAT OUR CLIENTS SAY</h1>
      <div className="w-16 mx-auto relative">
        <hr className="w-16 h-1 rounded-md mt-2 bg-gradient-to-r from-[#FF6F61] to-[#00B4D8] border-none" />
        <span className="bg-gradient-to-r from-[#FF6F61] to-[#00B4D8] w-3 h-3 rounded-full absolute left-6 -top-1"></span>
      </div>

      {/* Slider */}
      <div className="mt-12 relative max-w-5xl mx-auto">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 grid-cols-1 gap-8 transition-all duration-700 ease-in-out ${
              index === current
                ? "opacity-100 scale-100 relative"
                : "opacity-0 scale-95 absolute inset-0"
            }`}
          >
            {slide.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="text-[#00B4D8] text-2xl mb-4"
                />
                <p className="text-gray-700 italic leading-relaxed text-base">
                  “{item.quote}”
                </p>
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  className="text-[#FF6F61] text-xl mt-4"
                />
                <h3 className="mt-6 font-semibold text-[#0d4785]">{item.name}</h3>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="mt-10 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-[#00B4D8]" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
