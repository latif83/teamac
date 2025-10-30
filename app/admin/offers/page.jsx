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

const AdminOffers = () => {
    const [offers, setOffers] = useState([
        {
            id: 1,
            title: "Study in Canada",
            country: "Canada",
            service: "Study Abroad",
            image: "/canada.jpg",
            status: "Active",
            applicants: 12,
            datePosted: "2025-10-05",
        },
        {
            id: 2,
            title: "Dubai Travel Package",
            country: "UAE",
            service: "Travel",
            image: "/dubai.jpg",
            status: "Inactive",
            applicants: 8,
            datePosted: "2025-09-28",
        },
        {
            id: 3,
            title: "Accommodation in London",
            country: "UK",
            service: "Accommodation",
            image: "/london.jpg",
            status: "Active",
            applicants: 5,
            datePosted: "2025-10-09",
        },
    ]);

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

    return (
        <section className="p-3 pt-5 md:p-6">
            {/* Header Section */}

            {addOffer && <NewOfferModal setAddOffer={setAddOffer} />}


            <div className="flex justify-between items-center mb-6">
                <h1 className="sm:text-xl font-bold text-[#0d4785]">Manage Offers</h1>
                <button onClick={() => setAddOffer(true)} type="button" className="border cursor-pointer hover:text-[#fff] px-4 py-3 rounded-xl hover:bg-[#000] transition text-sm flex items-center gap-2">
                    <FontAwesomeIcon icon={faPlusCircle} /> New Offer
                </button>
            </div>

            <div className="flex items-center gap-2 mb-1">
                <FontAwesomeIcon icon={faFilter} className="text-[#00B4D8] text-xs" />
                <h3 className="font-semibold text-[#0d4785] text-xs">Filter Offers</h3>
            </div>
            {/* Filters Section */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-3 mb-4 flex flex-col flex-wrap justify-center gap-4">


                <div className="flex items-center sm:justify-start justify-between gap-4">
                    {/* Status Filter */}
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

                    {/* Date Sort */}
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

            </div>

            <p className="text-black text-sm mb-4"> <b className="text-[#0d4785] text-xl"> 20 </b> offers found. </p>

            {/* Offers Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredOffers.map((offer) => (
                    <div
                        key={offer.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                    >
                        <div className="w-full h-40 bg-gray-200">
                            <img
                                src={offer.image}
                                alt={offer.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-5">
                            <h2 className="font-bold text-lg text-[#0d4785] mb-1">
                                {offer.title}
                            </h2>
                            <p className="text-sm text-gray-600">{offer.country}</p>
                            <p className="text-sm text-gray-500 mb-3">{offer.service}</p>

                            {/* Applicants & Date */}
                            <div className="flex justify-between text-xs text-gray-500 mb-3">
                                <div className="flex items-center gap-1">
                                    <FontAwesomeIcon icon={faUsers} />
                                    <span>{offer.applicants} applicants</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <FontAwesomeIcon icon={faCalendarAlt} />
                                    <span>{new Date(offer.datePosted).toLocaleDateString()}</span>
                                </div>
                            </div>

                            {/* Status */}
                            <span
                                className={`inline-block px-3 py-1 text-xs rounded-full font-medium ${offer.status === "Active"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-600"
                                    }`}
                            >
                                {offer.status}
                            </span>

                            {/* Actions */}
                            <div className="flex items-center gap-4 mt-4">
                                <button
                                    type="button"
                                    className="text-blue-600 hover:text-blue-800 cursor-pointer"
                                    title="Edit"
                                >
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button
                                    type="button"
                                    className="text-red-600 hover:text-red-800 cursor-pointer"
                                    title="Delete"
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* No Offers Message */}
            {filteredOffers.length === 0 && (
                <div className="text-center mt-10 text-gray-500">
                    No {filters.status.toLowerCase()} offers found.
                </div>
            )}
        </section>
    );
};

export default AdminOffers;
