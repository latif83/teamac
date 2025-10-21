"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faGlobe, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "@/components/header";
import Footer from "@/components/footer";

const OffersPage = () => {
    // Dummy offers data
    const offers = [
        {
            id: 1,
            title: "Study in Canada",
            description:
                "Get up to 20% off tuition fees when applying to selected partner universities through Teamac.",
            image: "/grad.jpg",
            country: "Canada",
            category: "Study Abroad",
            validity: "Valid till December 2025",
        },
        {
            id: 2,
            title: "Affordable Travel Packages to Dubai",
            description:
                "Enjoy flexible travel options and accommodation packages designed for your perfect getaway.",
            image: "/dubai.jpg",
            country: "UAE",
            category: "Travel & Tourism",
            validity: "Valid till March 2026",
        },
        {
            id: 3,
            title: "Student Accommodation Deals in the UK",
            description:
                "Secure your student housing early and save up to 15% on rent in top student cities across the UK.",
            image: "/accomodation.jpg",
            country: "United Kingdom",
            category: "Accommodation",
            validity: "Valid till August 2025",
        },
        {
            id: 4,
            title: "Visa Consultation Discount",
            description:
                "Book your visa consultation now and enjoy a 10% discount on our expert processing services.",
            image: "/visa.jpg",
            country: "Ghana",
            category: "Consultation",
            validity: "Valid till June 2026",
        },
    ];

    return (
        <>

            {/* Header here */}

            <Header />

            {/* Filter and Offers here... */}

            <section>

                <div className="h-[200px] bg-[url('/bg4.jpg')] bg-center bg-cover bg-black flex flex-col justify-center items-center text-center px-4 relative">
                <div className="absolute bg-black/60 h-full w-full z-0"></div>
                  <div className="relative z-10 ">
                      <h1 className="text-xl font-bold text-white text-center">
                        Explore Our Latest Offers
                    </h1>
                    <p className="text-sm text-gray-200">
                        Discover exclusive deals on study abroad programs, travel packages,
                        and accommodation solutions tailored just for you.
                    </p>
                  </div>
                </div>

                {/* Layout Container */}
                <div className="flex flex-col md:flex-row md:px-12 px-4 gap-8">
                    {/* Sidebar / Filters */}
                    <aside className="md:w-1/4 border-r-2 p-5 h-svh sticky top-0 z-50">
                        <h2 className="text-lg font-bold text-[#0d4785] mb-4">
                            Filter Offers
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">
                                    Service
                                </label>
                                <select className="w-full bg-white border border-gray-300 rounded-md text-sm px-3 py-2 focus:ring-2 focus:ring-[#00B4D8] focus:outline-none">
                                    <option>All Services</option>
                                    <option>Study Abroad</option>
                                    <option>Travel</option>
                                    <option>Accommodation</option>
                                    <option>Consultation</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm text-gray-600 mb-1">
                                    Country
                                </label>
                                <select className="w-full bg-white border border-gray-300 rounded-md text-sm px-3 py-2 focus:ring-2 focus:ring-[#00B4D8] focus:outline-none">
                                    <option>All Countries</option>
                                    <option>Canada</option>
                                    <option>UK</option>
                                    <option>Ghana</option>
                                    <option>UAE</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm text-gray-600 mb-1">
                                    Sort by
                                </label>
                                <select className="w-full bg-white border border-gray-300 rounded-md text-sm px-3 py-2 focus:ring-2 focus:ring-[#00B4D8] focus:outline-none">
                                    <option>Newest</option>
                                    <option>Oldest</option>
                                </select>
                            </div>

                            <button className="w-full bg-[#00B4D8] text-white py-2 text-sm font-medium rounded-md hover:bg-[#0092b3] transition">
                                Apply Filters
                            </button>
                        </div>
                    </aside>

                    {/* Main Offers Grid */}
                    <div className="md:w-3/4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
                        {offers.map((offer) => (
                            <div
                                key={offer.id}
                                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                            >
                                <Image
                                    src={offer.image}
                                    alt={offer.title}
                                    width={400}
                                    height={250}
                                    className="w-full h-52 object-cover"
                                />
                                <div className="p-2 flex flex-col justify-between h-[250px]">
                                    <div>
                                        <h2 className="font-semibold text-[#0d4785] mb-2 line-clamp-1">
                                            {offer.title}
                                        </h2>
                                        <p className="text-sm text-gray-600 line-clamp-2">
                                            {offer.description}
                                        </p>
                                    </div>

                                    <div className="mt-4 text-sm text-gray-500 space-y-1">
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faGlobe}
                                                className="text-[#00B4D8] mr-2"
                                            />
                                            {offer.country}
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faTag}
                                                className="text-[#FF6F61] mr-2"
                                            />
                                            {offer.category}
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faCalendarAlt}
                                                className="text-[#00B4D8] mr-2"
                                            />
                                            {offer.validity}
                                        </div>
                                    </div>

                                    <button className="mt-4 bg-[#00B4D8] hover:bg-[#0092b3] text-white text-sm font-medium py-2 rounded-md transition-all duration-300">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            {/* Footer here */}
            <Footer />

        </>
    );
};

export default OffersPage;
