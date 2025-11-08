"use client"
import Footer from "@/components/footer";
import Header from "@/components/header";
import { faArrowLeftLong, faCalendarAlt, faGlobe, faLeftLong, faRotateBack, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const loadingRender = ()=>{
    return (
        [1,2,3,4,5,6].map((
            <div></div>
        ))
    )
}

export default function OfferDetails() {

    const [offer, setOffer] = useState({
        "id": "cmhl65s1g0003exn89zm3r6ro",
        "title": "Work in Germany",
        "description": "Work in germany and gain experience in forklifting and other high earning jobs.",
        "serviceId": "cmhl6301y0001exn859985n9g",
        "countryId": "cmhju0t010000exn8qp05rotl",
        "priceLabel": "Starting at $1500",
        "priceDescription": "This pricing does not cover visa applications.",
        "thumbnail": {
            "url": "http://res.cloudinary.com/dqnpplwcg/image/upload/v1762297044/teamac/offers/thumbnails/ozjjquymrhvxxruf7w49.jpg",
            "public_id": "teamac/offers/thumbnails/ozjjquymrhvxxruf7w49"
        },
        "city": "Sansco",
        "requirements": [
            "Must have a valid visa",
            "must be older that 18 years old."
        ],
        "validity": "2025-11-28T00:00:00.000Z",
        "datePosted": "2025-11-04T22:57:26.830Z",
        "updatedAt": "2025-11-04T22:57:26.830Z",
        "service": {
            "id": "cmhl6301y0001exn859985n9g",
            "name": "Work Abroad",
            "description": "Work and leave your life in international countries using our travel and tour global agency.",
            "image": {
                "url": "http://res.cloudinary.com/dqnpplwcg/image/upload/v1762296913/teamac/services/thumbnails/eov4l5bvh00vacmrhmaf.jpg",
                "public_id": "teamac/services/thumbnails/eov4l5bvh00vacmrhmaf"
            }
        },
        "country": {
            "id": "cmhju0t010000exn8qp05rotl",
            "name": "Albania",
            "code": "AL",
            "flag": "https://flagcdn.com/w40/al.png",
            "createdAt": "2025-11-04T00:29:53.233Z",
            "updatedAt": "2025-11-04T00:29:53.233Z"
        }
    })

    return (
        <>
            <Header />

            <section className="md:my-12 my-6 md:px-12 px-3">
                <button type="button" className="flex gap-2 items-center bg-red-200 p-2 rounded-lg text-sm mb-1 block">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                    </svg>

                    <span>
                        Back
                    </span>
                </button>
                <p className="mb-5 text-xs text-gray-500 font-semibold">
                    HOME / OFFERS / OFFERID
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="md:h-[300px] h-[200px] rounded-lg bg-black w-full overflow-hidden">
                        <img src={offer.thumbnail?.url} className="w-full h-full object-cover" alt="Offer Thumbnail" />
                    </div>
                    <div>
                        <h1 className="font-bold text-2xl">
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
                </div>

                <div className="mt-5 grid md:grid-cols-2 gap-4">
                    <div>
                        <p className="text-xs text-red-600 font-bold">Description:</p>
                        <p className="text-sm">
                            {offer.description}
                        </p>
                    </div>

                    <div className="border-l border-red-500 pl-5">
                        <p className="text-xs text-red-600 font-bold">Requirements:</p>
                        {offer.requirements.map((req, index) => (
                            <p key={index} className="text-sm"> {index + 1}. {req} </p>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col md:flex-row gap-4 mt-6">

                    {/* Apply Button */}
                    <button className="w-full md:w-auto bg-[#00B4D8] hover:bg-[#0092b3] text-white font-semibold px-6 py-3 rounded-md transition">
                        Apply For This Offer
                    </button>

                    {/* Request Callback */}
                    <button className="w-full md:w-auto border border-[#00B4D8] text-[#00B4D8] font-semibold px-6 py-3 rounded-md hover:bg-[#00B4D820] transition">
                        Request a Callback
                    </button>

                    {/* WhatsApp Inquiry */}
                    <a
                        href={`https://wa.me/233542233444?text=Hello, I am interested in the "${offer.title}" offer. Can you provide more details?`}
                        target="_blank"
                        className="w-full md:w-auto bg-[#25D366] hover:bg-[#1EBE5B] text-white font-semibold px-6 py-3 rounded-md transition flex items-center justify-center gap-2"
                    >
                        Ask on WhatsApp
                        <span className="text-lg">💬</span>
                    </a>

                </div>


            </section>

            <Footer />
        </>
    )
}