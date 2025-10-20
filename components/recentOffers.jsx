"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompress, faExpand } from "@fortawesome/free-solid-svg-icons";

const RecentOffers = () => {
    // 🔹 Offer data array
    const offers = [
        {
            id: 1,
            title: "Study in Canada",
            description:
                "Get a 20% discount on tuition fees for select universities. Enjoy top-ranked institutions, easy visa processes, and career opportunities after graduation.",
            image: "/canada.jpg",
        },
        {
            id: 2,
            title: "Explore Turkey",
            description:
                "Enjoy discounted flight + hotel packages to Istanbul and Cappadocia. Perfect for family vacations and solo travelers alike.",
            image: "/turkey.jpg",
        },
        {
            id: 3,
            title: "UK Student Visa Support",
            description:
                "We’ll help you apply to top UK universities with personalized counseling, document prep, and step-by-step visa guidance.",
            image: "/visa.jpg",
        },
        {
            id: 4,
            title: "Accommodation in Canada",
            description:
                "Find affordable student apartments near your university with verified landlords and secure booking options.",
            image: "/accomodation.jpg",
        },
    ];

    const [expandedImage, setExpandedImage] = useState(null);

    const toggleImage = (id) => {
        setExpandedImage(expandedImage === id ? null : id);
    };

    return (
        <section className="md:pt-40 pt-12 pb-16 bg-[url(/bg1.png)] bg-cover bg-no-repeat md:px-12 px-3">
            {/* Section Header */}
            <h1 className="text-xl font-bold text-[#0d4785]">RECENT OFFERS</h1>
            <div className="w-16 ml-8 relative">
                <hr className="w-16 h-1 rounded-md mt-2 bg-gradient-to-r from-[#FF6F61] to-[#00B4D8] border-none" />
                <span className="bg-gradient-to-r from-[#FF6F61] to-[#00B4D8] w-3 h-3 rounded-full absolute left-6 -top-1"></span>
            </div>

            {/* Offer Grid */}
            <div className="mt-5 grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                {offers.map((offer) => (
                    <div
                        key={offer.id}
                        className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        {/* Offer Image */}
                        <div className="relative">
                            <Image
                                src={offer.image}
                                width={400}
                                height={300}
                                alt={offer.title}
                                className={`w-full object-cover rounded-t-lg transition-all duration-300 ${expandedImage === offer.id ? "h-80" : "h-48"
                                    }`}
                            />

                            {/* Expand Button */}
                            <button
                                onClick={() => toggleImage(offer.id)}
                                className="absolute bottom-2 right-2 bg-[#00B4D8]/90 text-white text-xs px-3 py-1 rounded-md hover:bg-[#0092b3]"
                            >
                                {/* {expandedImage === offer.id ? "Collapse" : "Expand"} */}
                                <FontAwesomeIcon
                                    icon={expandedImage === offer.id ? faCompress : faExpand}
                                    width={16}
                                    height={16}
                                />

                            </button>
                        </div>

                        {/* Offer Content */}
                        <div className="p-4">
                            <h2 className="font-bold mt-3 text-[#0d4785] line-clamp-1">{offer.title}</h2>
                            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                                {offer.description}
                            </p>

                            {/* View Details Button */}
                            <div className="flex justify-center mt-4">
                                <Link
                                    href={`/offers/${offer.id}`}
                                    className="text-[#FF6F61] text-sm px-4 py-2 rounded-md hover:text-[#000] transition-all duration-500 flex items-center gap-2"
                                >
                                    <span>View Details</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>

                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View More Button */}
            <div className="mt-10 flex justify-center">
                <Link
                    href="/offers"
                    className="bg-[#00B4D8] text-white px-6 py-2 rounded-md hover:bg-[#0092b3] transition-all font-semibold flex items-center gap-2 text-sm"
                >
                    <span>View All Offers</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

                </Link>
            </div>
        </section>
    );
};

export default RecentOffers;
