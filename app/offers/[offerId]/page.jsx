"use client"
import Footer from "@/components/footer";
import Header from "@/components/header";
import { faArrowLeftLong, faCalendarAlt, faGlobe, faLeftLong, faRotateBack, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ApplyNowModal } from "./Apply";
import { SuccessApplication } from "./ConfirmedApplication";
import Link from "next/link";


export default function OfferDetails() {

    const router = useRouter()

    const [offer, setOffer] = useState(null)

    const { offerId } = useParams();

    const [loading, setLoading] = useState(false)

    const getOfferDetails = async () => {
        try {
            setLoading(true)
            const res = await fetch(`/api/offers/${offerId}`)
            const data = await res.json()
            if (!res.ok) {
                return toast.error(data.msg || "An unexpected error happened fetching offer details, please try again!")
            }
            setOffer(data.offer)
        }
        catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getOfferDetails()
    }, [])

    const [applyNow, setApplyNow] = useState(false)

    const [closeSuccess, setCloseSuccess] = useState(false)

    // ✅ Replace with your official WhatsApp number (in international format, no "+", no spaces)
    const businessNumber = "905338479200";

    //   const message = `Hello Teamac, I am interested in learning more about your "${offer?.title}" offer in ${offer?.country?.name}. Could you please provide more details?`;

    const message = `
Hello Teamac 👋,
I’m interested in the offer *${offer?.title}* (${offer?.service?.name}) in ${offer?.country?.name}.
Price: ${offer?.priceLabel || "N/A"}

Can you share more details or next steps?
Here’s the link I’m viewing: 
`;

// ${window.location.href}

    const whatsappUrl = `https://wa.me/${businessNumber}?text=${encodeURIComponent(message)}`;

    return (
        <>
            <Header />

            {applyNow && <ApplyNowModal offer={offer} setApplyNow={setApplyNow} setCloseSuccess={setCloseSuccess} />}

            {closeSuccess && <SuccessApplication setCloseSuccess={setCloseSuccess} />}

            <section className="md:my-8 my-3 mb-10 md:px-12 px-3">
                <div className="flex items-center justify-between">
                    <div>  <button type="button" onClick={() => router.back()} className="flex gap-2 items-center bg-red-200 hover:opacity-50 p-2 rounded-lg text-xs mb-1 block cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                        </svg>

                        <span>
                            Back
                        </span>
                    </button>
                        <p className="mb-5 text-xs text-gray-500 font-semibold">
                            Home / Offers / {offerId}
                        </p></div>

                    <div className={`md:flex hidden gap-4 ${loading && 'animate-pulse'}`}>
                        <button onClick={() => setApplyNow(true)} disabled={loading} type="button" className="bg-blue-600 hover:opacity-80 cursor-pointer transition-all duration-500 text-white text-sm p-3 rounded-md disabled:opacity-50">
                            Apply For This Offer
                        </button>
                        {/* <button disabled={loading} type="button" className="bg-orange-600 hover:opacity-80 cursor-pointer transition-all duration-500 text-white text-sm p-3 rounded-md disabled:opacity-50">
                            Request a Callback
                        </button> */}
                        <button onClick={() => router.push(whatsappUrl)} disabled={loading} type="button" className="bg-green-600 hover:opacity-80 cursor-pointer transition-all duration-500 text-white text-sm p-3 rounded-md disabled:opacity-50 flex flex-col">
                            <span>Make Enquires</span>
                            <span className="text-xs">Ask on Whatsapp</span>
                        </button>
                    </div>
                </div>
                {loading && <div className="grid mt-2 sm:grid-cols-2 gap-4 animate-pulse">
                    <div className="md:h-[300px] h-[200px] rounded-lg bg-black w-full overflow-hidden">
                    </div>
                    <div>
                        <h1 className="font-bold text-xl h-6 w-60 bg-gray-200 rounded-lg">
                        </h1>

                        <div className="mt-4 text-sm text-gray-500 space-y-3">
                            <div>
                                <div className="flex gap-2 items-center">
                                    <FontAwesomeIcon
                                        icon={faGlobe}
                                        className="text-[#00B4D8] text-lg"
                                    />
                                    <span className="flex flex-col">
                                        <span className="text-gray-500 text-xs bg-gray-200 h-3 w-24 rounded-lg"></span>
                                        <span className="text-sm text-black font-bold bg-gray-200 h-3 w-24 mt-1 rounded-lg">
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <FontAwesomeIcon
                                    icon={faTag}
                                    className="text-[#FF6F61] mr-2"
                                />
                                <span className="w-24 h-4 bg-gray-200 inline-flex rounded-lg">

                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FontAwesomeIcon
                                    icon={faCalendarAlt}
                                    className="text-[#00B4D8] text-lg"
                                />
                                <span className="flex flex-col gap-1">
                                    <span className="text-xs">
                                        Valid Until:
                                    </span>
                                    <span className="text-sm font-bold text-black bg-gray-200 h-4 w-24 rounded-lg">
                                    </span>
                                </span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="text-xl text-black font-medium h-6 w-36 bg-gray-200 rounded-lg"></p>
                            <p className="text-sm text-gray-500 font-medium bg-gray-200 h-5 w-36 mt-2 rounded-lg"></p>
                        </div>
                    </div>
                </div>}

                {offer && <div className="grid mt-2 sm:grid-cols-2 gap-4">
                    <div className="md:h-[300px] h-[200px] rounded-lg bg-black w-full overflow-hidden">
                        <img src={offer.thumbnail?.url} className="w-full h-full object-cover" alt="Offer Thumbnail" />
                    </div>
                    <div>
                        <h1 className="font-bold text-xl">
                            {offer.title}
                        </h1>

                        <div className="mt-4 text-sm text-gray-500 space-y-3">
                            <div>
                                <div className="flex gap-2 items-center">
                                    <FontAwesomeIcon
                                        icon={faGlobe}
                                        className="text-[#00B4D8] text-lg"
                                    />
                                    <span className="flex flex-col">
                                        <span className="text-gray-500 text-xs">{offer.city},</span>
                                        <span className="text-sm text-black font-bold">{offer.country?.name}
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <FontAwesomeIcon
                                    icon={faTag}
                                    className="text-[#FF6F61] mr-2"
                                />
                                {offer.service?.name}
                            </div>
                            <div className="flex items-center gap-2">
                                <FontAwesomeIcon
                                    icon={faCalendarAlt}
                                    className="text-[#00B4D8] text-lg"
                                />
                                <span className="flex flex-col gap-1">
                                    <span className="text-xs">
                                        Valid Until:
                                    </span>
                                    <span className="text-sm font-bold text-black">
                                        {new Date(offer.validity).toDateString()}
                                    </span>
                                </span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="text-xl text-black font-medium">{offer.priceLabel}</p>
                            <p className="text-sm text-gray-500 font-medium">{offer.priceDescription}</p>
                        </div>
                    </div>
                </div>}

                <div className="mt-5 grid md:grid-cols-2 gap-4">
                    <div>
                        <p className="text-xs text-red-600 font-bold">Description:</p>

                        {loading ? <p className="h-16 rounded-lg w-full bg-gray-200 animate-pulse"></p> : <p className="text-sm">{offer?.description}</p>}
                    </div>

                    <div className="border-l border-red-500 pl-5">
                        <p className="text-xs text-red-600 font-bold">Requirements:</p>
                        {offer?.requirements.map((req, index) => (
                            <p key={index} className="text-sm"> {index + 1}. {req} </p>
                        ))}
                        {loading && [1, 2, 3, 4].map((num) => (<p key={num} className="h-4 w-full bg-gray-200 animate-pulse rounded-lg mt-2"></p>))}
                    </div>
                </div>

                {/* CTA */}
                <div className={`md:hidden flex flex-col md:flex-row gap-4 mt-6 ${loading && 'animate-pulse'}`}>

                    {/* Apply Button */}
                    <button onClick={() => setApplyNow(true)} type="button" disabled={loading} className="w-full disabled:opacity-50 md:w-auto bg-[#00B4D8] hover:bg-[#0092b3] text-white font-semibold px-6 py-3 rounded-md transition text-sm">
                        Apply For This Offer
                    </button>

                    {/* Request Callback */}
                    {/* <button type="button" disabled={loading} className="w-full disabled:opacity-50 md:w-auto border border-[#00B4D8] text-[#00B4D8] font-semibold px-6 py-3 rounded-md hover:bg-[#00B4D820] transition text-sm">
                        Request a Callback
                    </button> */}

                    {/* WhatsApp Inquiry */}
                    <Link
                        href={whatsappUrl}
                        target="_blank"
                        className="w-full md:w-auto bg-[#25D366] hover:bg-[#1EBE5B] text-white font-semibold px-6 py-3 rounded-md transition flex items-center justify-center text-sm flex-col"
                    >
                        <span>Make Enquires</span>
                        <span className="text-xs">Ask on WhatsApp</span>
                        {/* <span className="text-lg">💬</span> */}
                    </Link>

                </div>


            </section>

            <Footer />
        </>
    )
}