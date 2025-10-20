"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const WhyChooseUs = () => {
  const values = [
    {
      id: 1,
      text: "Trusted network of schools & travel partners.",
    },
    {
      id: 2,
      text: "Affordable, reliable, and transparent services.",
    },
    {
      id: 3,
      text: "24/7 support for clients.",
    },
  ];

  return (
    <section className="py-16 md:px-12 px-4">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-[#0d4785]">WHY CHOOSE US</h1>
        <div className="w-16 ml-8 relative">
          <hr className="w-16 h-1 rounded-md mt-2 bg-gradient-to-r from-[#FF6F61] to-[#00B4D8] border-none" />
          <span className="bg-gradient-to-r from-[#FF6F61] to-[#00B4D8] w-3 h-3 rounded-full absolute left-6 -top-1"></span>
        </div>
      </div>

      {/* Content */}
      <div className="mt-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {values.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 hover:translate-x-1 transition-all duration-300"
          >
            <div className="text-[#00B4D8] text-2xl flex-shrink-0">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="drop-shadow-sm"
                width={24}
                height={24}
              />
            </div>
            <p className="text-gray-800 text-base leading-relaxed font-medium">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
