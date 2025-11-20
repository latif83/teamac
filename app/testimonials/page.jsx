"use client"
import { TestimonialSuccessMessage } from "@/components/FeedbackSuccess";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { TestimonialForm } from "@/components/NewFeedback";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Testimonials() {

    const [testimonials, setTestimonials] = useState([])

    const [loading, setLoading] = useState(false)

    const getFeedbacks = async () => {
        try {
            setLoading(true)

            const res = await fetch(`/api/feedback`)
            const data = await res.json()
            if (!res.ok) {
                return toast.error(data.msg)
            }

            setTestimonials(data.feedbacks)

        } catch (e) {
            console.log(e)
            toast.error("An unexpected error happened while fetching Testimonials!")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getFeedbacks()
    }, [])

    const [giveFeedback, setGiveFeedback] = useState(false)
    const [feedbackSuccess, setFeedbackSuccess] = useState(false)

    return (
        <>
            <Header />

            {giveFeedback && <TestimonialForm setGiveFeedback={setGiveFeedback} onSuccess={setFeedbackSuccess} />}

            {feedbackSuccess && <TestimonialSuccessMessage onClose={setFeedbackSuccess} />}

            <div className="bg-black py-12 px-3 bg-[url('/bg2.jpg')] bg-cover bg-center bg-fixed relative">
                <div className="absolute h-full w-full bg-[#000]/40 top-0 left-0 z-0">

                </div>

                <div className="text-center relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#fff]">
                        What Our Clients Say
                    </h2>
                    <div className="w-16 mx-auto relative mt-4">
                        <hr className="w-16 h-1 rounded-md bg-gradient-to-r from-[#fff] to-[#00B4D8] border-none" />
                        <span className="bg-gradient-to-r from-[#fff] to-[#00B4D8] w-3 h-3 rounded-full absolute left-6 -top-1"></span>
                    </div>
                    <p className="mt-3 text-gray-50 text-sm md:text-base">
                        Real stories from students and professionals who trusted{" "}
                        <span className="text-[#00B4D8] font-bold">TEAMAC</span> to guide
                        their journeys abroad.
                    </p>

                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 sm:grid-cols-2 mt-8 md:px-12 px-3 gap-4 mb-10">
                    {loading ? [1, 2, 3, 4].map((num) => (<div
                        key={num}
                        className="relative flex flex-col justify-center items-center text-center p-8 md:p-12 bg-[url('/bg1.png')] bg-cover bg-center rounded-xl shadow-md hover:shadow-xl transition-all duration-500 animate-pulse"
                    >
                        <div className="absolute inset-0 bg-white/85 rounded-xl"></div>

                        <div className="relative z-10 w-full">

                            <FontAwesomeIcon
                                icon={faQuoteLeft}
                                className="text-[#00B4D8] text-xl mb-3"
                            />

                            <p className="h-16 w-full bg-black rounded-lg">

                            </p>

                            <FontAwesomeIcon
                                icon={faQuoteRight}
                                className="text-[#FF6F61] text-sm mt-3"
                            />

                            <p className="h-6 w-full bg-black rounded-lg mt-8">


                            </p>

                            <p className="h-6 w-full bg-black rounded-lg mt-2"></p>

                        </div>

                    </div>)) : testimonials.length > 0 ? testimonials.map((t) => (
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
                                    “{t.comment}”
                                </p>
                                <FontAwesomeIcon
                                    icon={faQuoteRight}
                                    className="text-[#FF6F61] text-sm mt-3"
                                />
                            </blockquote>

                            {/* Name + Location */}
                            <figcaption className="relative z-10 mt-4">
                                <div className="font-medium text-[#0d4785]">{t.fullName}</div>
                                <div className="text-gray-500 text-sm">{t.city}, {t.country}</div>
                            </figcaption>
                        </figure>
                    )) : <div className="md:col-span-4 sm:col-span-2 text-center bg-white p-3 relative z-50 rounded text-sm"> <p className="font-bold">No data found at this moment.</p> <p>Please try again later!</p> </div>}
                </div>

                {/* Buttons + Feedback Prompt */}
                <div className="text-center relative z-10 max-w-xl mx-auto">
                    <p className="text-gray-50 text-sm md:text-base mb-6">
                        Have you used{" "}
                        <span className="text-[#00B4D8] font-bold">TEAMAC</span> before?
                        Or has our team helped you with travel, study abroad, or
                        accommodation? We’d love to hear your feedback — share your experience
                        with us!
                    </p>

                    <div className="flex justify-center items-center gap-4">
                        <button
                            type="button"
                            onClick={() => setGiveFeedback(true)}
                            className="py-2.5 px-6 text-sm font-medium text-black bg-white rounded-lg hover:font-bold transition-all duration-300 cursor-pointer hover:opacity-80"
                        >
                            Give Feedback
                        </button>
                    </div>
                </div>

            </div>




            <Footer />
        </>
    )
}