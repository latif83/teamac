"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEdit,
    faTrash,
    faToggleOn,
    faToggleOff,
    faPlus,
    faFilter,
    faUsers,
    faCalendarAlt,
    faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { NewOfferModal } from "./NewOfferModal";
import { toast } from "react-toastify";
import { ViewOffer } from "./ViewOffer";

const RenderLoading = () => {

    return (
        <>
            {
                [1, 2, 3, 4, 5, 6].map((loader) => (
                    <div
                        key={loader}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition animate-pulse"
                    >
                        <div className="w-full h-40 bg-gray-200">
                        </div>

                        <div className="px-3 py-5">
                            <h2 className="font-bold text-lg text-[#0d4785] bg-gray-200 h-4 mb-2 w-32 rounded-lg">
                            </h2>
                            <p className="text-sm text-gray-600 h-4 mb-2 bg-gray-200 w-32 rounded-lg"></p>
                            <p className="text-sm text-gray-500 mb-3 h-4 mb-2 bg-gray-200 w-32 rounded-lg"></p>

                            {/* Applicants & Date */}
                            <div className="flex justify-between text-xs text-gray-500 mb-3">
                                <div className="flex items-center gap-1">
                                    <FontAwesomeIcon icon={faUsers} />
                                    <span className="bg-gray-200 w-24 h-4 rounded-lg"></span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <FontAwesomeIcon icon={faCalendarAlt} />
                                    <span className="bg-gray-200 w-24 h-4 rounded-lg"></span>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-4 mt-4">
                                <button
                                    type="button"
                                    className="rounded-lg bg-blue-200 p-2 hover:text-blue-800 cursor-pointer"
                                    title="Edit"
                                >
                                </button>
                                <button
                                    type="button"
                                    className="rounded-lg bg-red-200 hover:text-red-800 p-2 cursor-pointer"
                                    title="Delete"
                                >
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }</>
    )
}

const AdminOffers = () => {

    const [offers, setOffers] = useState([])

    const [loading, setLoading] = useState(true)
    const [fetchData, setFetchData] = useState(true)

    const getOffersData = async () => {

        try {

            setLoading(true)

            const res = await fetch('/api/admin/offers')

            const data = await res.json()

            if (!res.ok) {
                return toast.error(data.msg || 'Failed to fetch offers')
            }

            setOffers(data.offers || [])

        }
        catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        fetchData && getOffersData()
        setFetchData(false)
    }, [fetchData])

    const [filters, setFilters] = useState({
        status: "All",
        sort: "Newest",
    });

    // Filtering Logic
    const filteredOffers = offers
        .filter((offer) =>
            filters.status === "All" ? true : offer.status === filters.status
        )
        .sort((a, b) =>
            filters.sort === "Newest"
                ? new Date(b.datePosted) - new Date(a.datePosted)
                : new Date(a.datePosted) - new Date(b.datePosted)
        );

    const [addOffer, setAddOffer] = useState(false)
    const [viewOffer, setViewOffer] = useState(false)
    const [selectedOffer,setSelectedOffer] = useState(null)

    return (
        <section className="p-3 pt-5 md:p-6">
            {/* Header Section */}

            {addOffer && <NewOfferModal setAddOffer={setAddOffer} setFetchData={setFetchData} />}
            {viewOffer && <ViewOffer setViewOffer={setViewOffer} setFetchData={setFetchData} selectedOffer={selectedOffer} />}


            <div className="flex justify-between items-center mb-6">
                <h1 className="sm:text-xl font-bold text-[#0d4785]">Manage Offers</h1>
                <button onClick={() => setAddOffer(true)} type="button" className="border cursor-pointer hover:text-[#fff] px-4 py-3 rounded-xl hover:bg-[#000] transition text-sm flex items-center gap-2">
                    <FontAwesomeIcon icon={faPlusCircle} /> New Offer
                </button>
            </div>

            {/* <div className="flex items-center gap-2 mb-1">
                <FontAwesomeIcon icon={faFilter} className="text-[#00B4D8] text-xs" />
                <h3 className="font-semibold text-[#0d4785] text-xs">Filter Offers</h3>
            </div> */}
            {/* Filters Section */}
            {/* <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-3 mb-4 flex flex-col flex-wrap justify-center gap-4">


                <div className="flex items-center sm:justify-start justify-between gap-4">
                    
                    <div>
                        <label className="text-xs text-gray-500 block mb-1">Status</label>
                        <select
                            value={filters.status}
                            onChange={(e) =>
                                setFilters({ ...filters, status: e.target.value })
                            }
                            className="border border-gray-300 rounded-md text-sm px-3 py-2 focus:ring-2 focus:ring-[#00B4D8] focus:outline-none"
                        >
                            <option value="All">All</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                    
                    <div>
                        <label className="text-xs text-gray-500 block mb-1">Date Posted</label>
                        <select
                            value={filters.sort}
                            onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
                            className="border border-gray-300 rounded-md text-sm px-3 py-2 focus:ring-2 focus:ring-[#00B4D8] focus:outline-none"
                        >
                            <option value="Newest">Newest</option>
                            <option value="Oldest">Oldest</option>
                        </select>
                    </div>
                </div>

            </div> */}

            {loading ? <p className="h-4 w-32 rounded-lg bg-gray-200 mb-4"></p> : <p className="text-black text-sm mb-4"> <b className="text-[#0d4785] text-xl"> {offers.length} </b> offers found. </p>}

            {/* Offers Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {loading ? <RenderLoading /> : offers.length > 0 && offers.map((offer) => (
                    <div
                        key={offer.id}
                        onClick={()=>{setSelectedOffer(offer); setViewOffer(true);}}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-500 cursor-pointer hover:border-red-500 hover:border hover:scale-[1.02]"
                    >
                        <div className="w-full h-40 bg-gray-200">
                            <img
                                src={offer.thumbnail?.url}
                                alt={offer.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-5">
                            <h2 className="font-bold text-lg text-[#0d4785] mb-1">
                                {offer.title}
                            </h2>

                            <div className="flex items-center gap-2">
                                <img src={offer?.country?.flag} alt="Country Flag" className="w-8 h-4" />
                                <p className="text-sm text-gray-600">{offer?.country?.name}</p>
                            </div>

                            <p className="text-sm text-gray-500 mb-3">{offer.service?.name}</p>

                            {/* Applicants & Date */}
                            <div className="flex justify-between text-xs text-gray-500 mb-3">
                                <div className="flex items-center gap-1">
                                    <FontAwesomeIcon icon={faUsers} />
                                    {/* <span>{offer.applicants} applicants</span> */}
                                    12
                                </div>
                                <div className="flex items-center gap-1">
                                    <FontAwesomeIcon icon={faCalendarAlt} />
                                    <span>{new Date(offer.datePosted).toLocaleDateString()}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-2 text-xs text-[#0d4785] font-medium hover:underline cursor-pointer">
                                    <span>Manage Offer</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>

                                </span>
                                {/* Status */}
                                <span
                                    className={`inline-block px-3 py-1 text-xs rounded-full font-medium ${offer.status !== "Active"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-600"
                                        }`}
                                >
                                    {/* {offer.status} */}
                                    Active
                                </span>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            {/* No Offers Message */}
            {offers.length === 0 && (
                <div className="text-center mt-10 text-sm font-semibold text-gray-500">
                    No offers found.
                </div>
            )}
        </section>
    );
};

export default AdminOffers;
