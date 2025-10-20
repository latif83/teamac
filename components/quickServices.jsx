"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGraduationCap,
    faPlaneDeparture,
    faHouseChimneyUser,
    faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const QuickServices = () => {
    const services = [
        {
            id: 1,
            title: "Study Abroad & Education Counseling",
            icon: faGraduationCap,
            description: "Personalized guidance for your academic journey abroad.",
        },
        {
            id: 2,
            title: "Travel & Flight Packages",
            icon: faPlaneDeparture,
            description: "Affordable travel itineraries and flight arrangements.",
        },
        {
            id: 3,
            title: "Accommodation Assistance",
            icon: faHouseChimneyUser,
            description: "Find student housing and short-term stays with ease.",
        },
        {
            id: 4,
            title: "Consultations & Agency Services",
            icon: faBriefcase,
            description: "Professional one-on-one consultations and global support.",
        },
    ];

    return (
        <section className="bg-black py-16 md:px-12 px-4 text-white relative overflow-hidden">
            {/* Decorative gradient blur */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00B4D8]/10 via-transparent to-[#FF6F61]/10 pointer-events-none"></div>

            {/* Section Header */}
            <h1 className="text-xl font-bold relative z-10">OUR SERVICES</h1>
            <div className="w-16 ml-8 relative z-10">
                <hr className="w-16 h-1 rounded-md mt-2 bg-gradient-to-r from-[#FF6F61] to-[#00B4D8] border-none" />
                <span className="bg-gradient-to-r from-[#FF6F61] to-[#00B4D8] w-3 h-3 rounded-full absolute left-6 -top-1"></span>
            </div>

            {/* Service Cards */}
            <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="group bg-white text-black rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-[#00B4D8] to-[#FF6F61] text-white text-2xl shadow-md transition-all duration-300 group-hover:scale-110">
                                <FontAwesomeIcon icon={service.icon} width={28} height={28} />
                            </div>

                            <h2 className="font-bold text-md mt-4 text-[#0d4785] leading-tight">
                                {service.title}
                            </h2>
                            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Services Button */}
            <div className="mt-10 flex justify-center relative z-10">
                <Link
                    href="/services"
                    className="bg-[#00B4D8] text-white px-6 py-2 rounded-md hover:bg-[#0092b3] transition-all font-semibold text-sm flex items-center gap-2"
                >

                    <span>View All Services</span>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
                </Link>
            </div>
        </section>
    );
};

export default QuickServices;
