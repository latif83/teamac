"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompress, faExpand } from "@fortawesome/free-solid-svg-icons";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';




const RecentOffers = () => {
    // 🔹 Offer data array
    const [offers, setOffers] = useState([])

    const [expandedImage, setExpandedImage] = useState(null);

    const [loading, setLoading] = useState(true)

    const getFeaturedOffers = async () => {
        setLoading(true)
        try {
            const res = await fetch(`/api/offers/featured`)
            const data = await res.json()
            if (!res.ok) {
                return toast.error(data.msg)
            }
            setOffers(data.featuredOffers)
        }
        catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getFeaturedOffers()
    }, [])

    const toggleImage = (id) => {
        setExpandedImage(expandedImage === id ? null : id);
    };

    return (

        <section className="md:pt-40 pt-12 pb-16 bg-[url(/bg1.png)] bg-cover bg-no-repeat md:px-12 px-3">
            {/* Section Header */}
            <h1 className="text-xl font-bold text-[#0d4785]">FEATURED OFFERS</h1>
            <div className="w-16 ml-8 relative">
                <hr className="w-16 h-1 rounded-md mt-2 bg-gradient-to-r from-[#FF6F61] to-[#00B4D8] border-none" />
                <span className="bg-gradient-to-r from-[#FF6F61] to-[#00B4D8] w-3 h-3 rounded-full absolute left-6 -top-1"></span>
            </div>

            {/* Offer Grid */}
            <Swiper
                slidesPerView={2.5}
                spaceBetween={30}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                navigation={true}
                modules={[Pagination, Autoplay, Navigation, EffectFade]}
                className="mySwiper mt-5"
                breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 16 },
                    480: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2.3, spaceBetween: 25 },
                    1024: { slidesPerView: 2.5, spaceBetween: 30 },
                }}
            >
                {loading ?
                    <>
            {[1, 2, 3, 4].map((num) => (
                <SwiperSlide key={num} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-12 animate-pulse">

                    {/* Skeleton Image */}
                    <div className="relative h-48 bg-gray-200 rounded-t-lg">
                        <button className="absolute bottom-2 right-2 bg-[#00B4D8]/50 text-white text-xs px-3 py-1 rounded-md">
                            <FontAwesomeIcon icon={faExpand} width={16} height={16} />
                        </button>
                    </div>

                    {/* Skeleton Text */}
                    <div className="p-4">
                        <h2 className="h-4 w-32 bg-gray-200 rounded-lg"></h2>
                        <p className="h-8 w-full mt-3 bg-gray-200 rounded-lg"></p>

                        <div className="flex justify-center mt-4">
                            <span className="text-sm px-4 py-2 rounded-md flex items-center gap-2 text-gray-300">
                                <span>Loading…</span>
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </>
                    : offers.length > 0 ? (
                        offers.map((offer) => (
                            <SwiperSlide
                                key={offer.id}
                                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-12"
                            >
                                {/* Offer Image */}
                                <div className="relative">
                                    <img
                                        src={offer.thumbnail?.url}
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
                                        <FontAwesomeIcon
                                            icon={expandedImage === offer.id ? faCompress : faExpand}
                                            width={16}
                                            height={16}
                                        />
                                    </button>
                                </div>

                                {/* Offer Content */}
                                <div className="p-4">
                                    <h2 className="font-bold mt-3 text-[#0d4785] line-clamp-1">
                                        {offer.title}
                                    </h2>
                                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                                        {offer.description}
                                    </p>

                                    <div className="flex justify-center mt-4">
                                        <Link
                                            href={`/offers/${offer.id}`}
                                            className="text-[#FF6F61] text-sm px-4 py-2 rounded-md hover:text-[#000] transition-all duration-500 flex items-center gap-2"
                                        >
                                            <span>View Details & Apply</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColo
                                            
                                            r"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    ) : (
                        <NoOffersSlide />
                    )}
            </Swiper>


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


const NoOffersSlide = () => (
    <SwiperSlide className="flex items-center justify-center py-16 mb-12">
        <div className="text-center text-sm flex flex-col items-center justify-center">
            <p className="font-semibold">No Featured Offers</p>
            <p>Please try again later!</p>
        </div>
    </SwiperSlide>
);