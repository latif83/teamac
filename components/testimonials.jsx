"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { TestimonialForm } from "./NewFeedback";
import { useState } from "react";
import { TestimonialSuccessMessage } from "./FeedbackSuccess";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            title: "Smooth Visa Processing",
            quote:
                "Thanks to Teamac, I secured admission in Canada with smooth visa processing. Their guidance made the entire journey stress-free!",
            name: "Ama Serwaa",
            location: "Accra, Ghana",
        },
        {
            id: 2,
            title: "Reliable Travel Arrangements",
            quote:
                "Teamac handled my travel arrangements perfectly. Everything from ticketing to accommodation was seamless and affordable.",
            name: "Kwesi Mensah",
            location: "Kumasi, Ghana",
        },
        {
            id: 3,
            title: "Professional Consultants",
            quote:
                "Their consultants are professional and supportive. I’m now studying in the UK — couldn’t have done it without them!",
            name: "Chidinma Okafor",
            location: "Lagos, Nigeria",
        },
        {
            id: 4,
            title: "Highly Recommended",
            quote:
                "I highly recommend Teamac. The process was transparent and they were available every step of the way — truly reliable!",
            name: "Thabo Mokoena",
            location: "Johannesburg, South Africa",
        },
    ];

    const [giveFeedback, setGiveFeedback] = useState(false)
    const [feedbackSuccess,setFeedbackSuccess] = useState(false)

    return (
        <section className="bg-[#F4E1D2]/40 bg-[url('/bg2.jpg')] bg-cover bg-center bg-fixed relative py-16 px-6 md:px-12">

            {giveFeedback && <TestimonialForm setGiveFeedback={setGiveFeedback} onSuccess={setFeedbackSuccess} />}
            {feedbackSuccess && <TestimonialSuccessMessage onClose={setFeedbackSuccess} />}

            <div className="absolute h-full w-full bg-[#000]/40 top-0 left-0 z-0"></div>
            {/* Header */}
            <div className="text-center relative z-10 max-w-3xl mx-auto mb-12">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#fff]">
                    What Our Clients Say
                </h2>
                <div className="w-16 mx-auto relative mt-4">
                    <hr className="w-16 h-1 rounded-md bg-gradient-to-r from-[#fff] to-[#00B4D8] border-none" />
                    <span className="bg-gradient-to-r from-[#fff] to-[#00B4D8] w-3 h-3 rounded-full absolute left-6 -top-1"></span>
                </div>
                <p className="mt-3 text-gray-50 text-sm md:text-base">
                    Real stories from students and professionals who trusted{" "}
                    <span className="text-[#00B4D8] font-bold">Teamac</span> to guide
                    their journeys abroad.
                </p>

            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 mb-10">
                {testimonials.map((t) => (
                    <figure
                        key={t.id}
                        className="relative flex flex-col justify-center items-center text-center p-8 md:p-12 bg-[url('/bg1.png')] bg-cover bg-center rounded-xl shadow-md hover:shadow-xl transition-all duration-500"
                    >
                        {/* Light overlay for readability */}
                        <div className="absolute inset-0 bg-white/85 rounded-xl"></div>

                        {/* Testimonial content */}
                        <blockquote className="relative z-10 mx-auto max-w-2xl">
                            <FontAwesomeIcon
                                icon={faQuoteLeft}
                                className="text-[#00B4D8] text-xl mb-3"
                            />
                            <p className="text-gray-700 text-sm md:text-base italic leading-relaxed">
                                “{t.quote}”
                            </p>
                            <FontAwesomeIcon
                                icon={faQuoteRight}
                                className="text-[#FF6F61] text-sm mt-3"
                            />
                        </blockquote>

                        {/* Name + Location */}
                        <figcaption className="relative z-10 mt-4">
                            <div className="font-medium text-[#0d4785]">{t.name}</div>
                            <div className="text-gray-500 text-sm">{t.location}</div>
                        </figcaption>
                    </figure>
                ))}
            </div>

            {/* Buttons + Feedback Prompt */}
            <div className="text-center relative z-10 max-w-xl mx-auto">
                <p className="text-gray-50 text-sm md:text-base mb-6">
                    Have you used{" "}
                    <span className="text-[#00B4D8] font-bold">Teamac</span> before?
                    Or has our team helped you with travel, study abroad, or
                    accommodation? We’d love to hear your feedback — share your experience
                    with us!
                </p>

                <div className="flex justify-center items-center gap-4">
                    <a
                        href="#"
                        className="py-2.5 px-6 text-sm font-medium text-white bg-[#00B4D8] rounded-lg shadow hover:bg-[#0092b3] transition-all duration-300"
                    >
                        View More
                    </a>
                    <button
                        type="button"
                        onClick={() => setGiveFeedback(true)}
                        className="py-2.5 px-6 text-sm font-medium text-black bg-white rounded-lg hover:font-bold transition-all duration-300 cursor-pointer hover:opacity-80"
                    >
                        Give Feedback
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
