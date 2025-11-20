"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faGlobe, faCalendarAlt, faTimes, faFilter, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Suspense, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import Select from "react-select";
import { useSearchParams } from "next/navigation";

const LoadingRender = () => {
    return (
        [1, 2, 3, 4, 5, 6].map((num) => (
            <div
                key={num}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden animate-pulse"
            >
                <div className="h-52 bg-gray-200 w-full"></div>
                <div className="p-2 mt-3">
                    <div>
                        <h2 className="font-semibold text-[#0d4785] mb-2 line-clamp-1 bg-gray-200 h-4 rounded-lg w-32"></h2>
                        <p className="text-sm text-gray-600 line-clamp-2 bg-gray-200 h-6 rounded-lg"></p>
                    </div>

                    <div className="mt-4 text-sm text-gray-500 space-y-1">
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon
                                icon={faGlobe}
                                className="text-[#00B4D8]"
                            />
                            <span className="bg-gray-200 w-32 rounded-lg h-4"></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon
                                icon={faTag}
                                className="text-[#FF6F61]"
                            />
                            <span className="bg-gray-200 w-32 rounded-lg h-4"></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon
                                icon={faCalendarAlt}
                                className="text-[#00B4D8]"
                            />
                            <span className="bg-gray-200 w-32 rounded-lg h-4"></span>
                        </div>
                    </div>

                    <button className="mt-4 bg-[#00B4D8] hover:bg-[#0092b3] text-white text-sm font-medium py-2 rounded-md transition-all duration-300 w-full h-8">
                    </button>
                </div>
            </div>
        ))
    )
}

export default function OffersPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Offers />
        </Suspense>
    );
}

const Offers = () => {

    const [showFilter, setShowFilter] = useState(false);

    const [loadingOffers, setLoadingOffers] = useState(false)
    const [offers, setOffers] = useState([])

    const [services, setServices] = useState([]);
    const [countries, setCountries] = useState([]);

    const [filters, setFilters] = useState({
        service: null,
        country: null,
        sortBy: "",
        _initialized: false
    });

    const searchParams = useSearchParams();

    const [loadingFilterData, setLoadingFilterData] = useState(true)

    const getOffers = async () => {
        try {
            setLoadingOffers(true)


            // Build query params based on filters
            const params = new URLSearchParams();

            if (filters.country) params.append("country", filters.country);
            if (filters.service) params.append("service", filters.service);
            if (filters.sortBy) params.append("sort", filters.sortBy);

            const res = await fetch(`/api/offers?${params.toString()}`);
            const data = await res.json()
            if (!res.ok) {
                return toast.error(data.msg || "Unable to fetch offers!")
            }

            setOffers(data.offers)

        }
        catch (e) {
            console.log(e)
            toast.error("Unable to fetch offers, please try again!")
        } finally {
            setLoadingOffers(false)
        }
    }

    useEffect(() => {
        async function fetchFilters() {
            try {
                const res = await fetch("/api/filters");
                const data = await res.json();

                if (data.success) {
                    setServices(
                        data.data.services.map((s) => ({
                            value: s.id,
                            label: s.name,
                        }))
                    );

                    setCountries(
                        data.data.countries.map((c) => ({
                            value: c.id,
                            label: c.name,
                        }))
                    );
                }
            } catch (err) {
                console.error("Error fetching filters:", err);
            } finally {
                setLoadingFilterData(false);
            }
        }

        fetchFilters()
    }, [])

    const [initialized, setInitialized] = useState(false)

    useEffect(() => {
        const country = searchParams.get("country");
        const service = searchParams.get("service");

        setFilters(prev => ({
            ...prev,
            country: country || null,
            service: service || null,
        }));

        setInitialized(true);
    }, [searchParams]);

    useEffect(() => {
        if (initialized) {
            getOffers();
        }
    }, [initialized]);


    const applyFilters = async () => {
        try {
            // alert(JSON.stringify(filters))
            // awai
            getOffers()
        }
        catch (e) {
            console.log(e)
        }
    }


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

                    <div>
                        {/* Toggle Button — visible only on mobile */}
                        <button
                            onClick={() => setShowFilter(!showFilter)}
                            className="md:hidden flex items-center w-full gap-2 bg-[#00B4D8] text-white text-sm font-medium px-4 py-2 rounded-t-md mt-4 flex justify-between items-center"
                        >
                            <span className="flex gap-2 items-center"><FontAwesomeIcon icon={showFilter ? faTimes : faFilter} />
                                {showFilter ? "Hide Filters" : "Show Filters"}</span>
                            <FontAwesomeIcon icon={faCaretDown} />
                        </button>

                        {/* Filter Sidebar */}
                        {showFilter && (
                            <aside className="md:w-1/4 md:border-r-2 md:h-svh md:sticky top-0 z-50 py-3 md:pr-3 bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none rounded-b-md md:rounded-none">
                                <h2 className="text-lg font-bold text-[#0d4785] mb-4">Filter Offers</h2>

                                <div className="space-y-4">

                                    {/* Service Filter */}
                                    <Select
                                        isClearable
                                        isLoading={loadingFilterData}
                                        options={services}
                                        placeholder={loadingFilterData ? "Loading services..." : "All Services"}
                                        onChange={(selected) =>
                                            setFilters((prev) => ({ ...prev, service: selected?.value || "" }))
                                        }
                                        className="text-sm"
                                        styles={{
                                            control: (base) => ({
                                                ...base,
                                                borderColor: "#ccc",
                                                padding: "2px",
                                                boxShadow: "none",
                                                backgroundColor: 'transparent',
                                                "&:hover": { borderColor: "#00B4D8" },
                                            }),
                                        }}
                                    />

                                    {/* Country Filter */}
                                    <Select
                                        isClearable
                                        isLoading={loadingFilterData}
                                        options={countries}
                                        placeholder={loadingFilterData ? "Loading countries..." : "All Countries"}
                                        onChange={(selected) =>
                                            setFilters((prev) => ({ ...prev, country: selected?.value || "" }))
                                        }
                                        className="text-sm"
                                        styles={{
                                            control: (base) => ({
                                                ...base,
                                                borderColor: "#ccc",
                                                padding: "2px",
                                                boxShadow: "none",
                                                backgroundColor: 'transparent',
                                                "&:hover": { borderColor: "#00B4D8" },
                                            }),
                                        }}
                                    />

                                    <div>
                                        <label className="block text-sm text-gray-600 mb-1">
                                            Sort by
                                        </label>
                                        <select value={filters.sortBy} onChange={(e) =>
                                            setFilters((prev) => ({ ...prev, sortBy: e.target.value }))
                                        } className="w-full bg-white border border-gray-300 rounded-md text-sm px-3 py-2 focus:ring-2 focus:ring-[#00B4D8] focus:outline-none">
                                            <option value={'newest'}>Newest</option>
                                            <option value={'oldest'}>Oldest</option>
                                        </select>
                                    </div>


                                    <button onClick={() => { setShowFilter(!showFilter); applyFilters(); }} className="w-full bg-[#00B4D8] text-white py-2 text-sm font-medium rounded-md hover:bg-[#0092b3] transition">
                                        Apply Filters
                                    </button>
                                </div>
                            </aside>)}
                    </div>

                    {/* Sidebar / Filters */}
                    <aside className="md:w-1/4 md:border-r-2 md:block hidden md:h-svh md:sticky top-0 z-50 py-5 md:pr-3">
                        <h2 className="text-lg font-bold text-[#0d4785] mb-4">
                            Filter Offers
                        </h2>

                        <div className="space-y-4">
                            {/* Service Filter */}
                            <Select
                                isClearable
                                isLoading={loadingFilterData}
                                options={services}
                                placeholder={loadingFilterData ? "Loading services..." : "All Services"}
                                onChange={(selected) =>
                                    setFilters((prev) => ({ ...prev, service: selected?.value || "" }))
                                }
                                className="text-sm"
                                styles={{
                                    control: (base) => ({
                                        ...base,
                                        borderColor: "#ccc",
                                        padding: "2px",
                                        boxShadow: "none",
                                        backgroundColor: 'transparent',
                                        "&:hover": { borderColor: "#00B4D8" },
                                    }),
                                }}
                            />

                            {/* Country Filter */}
                            <Select
                                isClearable
                                isLoading={loadingFilterData}
                                options={countries}
                                placeholder={loadingFilterData ? "Loading countries..." : "All Countries"}
                                onChange={(selected) =>
                                    setFilters((prev) => ({ ...prev, country: selected?.value || "" }))
                                }
                                className="text-sm"
                                styles={{
                                    control: (base) => ({
                                        ...base,
                                        borderColor: "#ccc",
                                        padding: "2px",
                                        boxShadow: "none",
                                        backgroundColor: 'transparent',
                                        "&:hover": { borderColor: "#00B4D8" },
                                    }),
                                }}
                            />

                            <div>
                                <label className="block text-sm text-gray-600 mb-1">
                                    Sort by
                                </label>
                                <select value={filters.sortBy} onChange={(e) =>
                                    setFilters((prev) => ({ ...prev, sortBy: e.target.value }))
                                } className="w-full bg-white border border-gray-300 rounded-md text-sm px-3 py-2 focus:ring-2 focus:ring-[#00B4D8] focus:outline-none">
                                    <option value={'newest'}>Newest</option>
                                    <option value={'oldest'}>Oldest</option>
                                </select>
                            </div>

                            <button onClick={applyFilters} className="w-full bg-[#00B4D8] text-white py-2 text-sm font-medium rounded-md hover:bg-[#0092b3] transition">
                                Apply Filters
                            </button>
                        </div>
                    </aside>

                    {/* flex-1 md:py-5 px-4 */}

                    {/* Main Offers Grid */}
                    <div className="md:w-3/4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:py-5 w-full self-start">
                        {loadingOffers ? <LoadingRender /> : offers.length > 0 ? offers.map((offer) => (
                            <div
                                key={offer.id}
                                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden h-auto grow-0"
                            >
                                <img
                                    src={offer.thumbnail?.url}
                                    alt={offer.title}
                                    width={400}
                                    height={250}
                                    className="w-full h-52 object-cover"
                                />
                                <div className="p-2">
                                    <div>
                                        <h2 className="font-semibold text-[#0d4785] mb-2 line-clamp-1">
                                            {offer.title}
                                        </h2>
                                        <p className="text-xs text-gray-600 line-clamp-2">
                                            {offer.description}
                                        </p>
                                    </div>

                                    <div className="mt-2 text-sm text-gray-500 space-y-1">
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faGlobe}
                                                className="text-[#00B4D8] mr-2"
                                            />
                                            {offer.country?.name}
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faTag}
                                                className="text-[#FF6F61] mr-2"
                                            />
                                            {offer.service?.name}
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faCalendarAlt}
                                                className="text-[#00B4D8] mr-2"
                                            />
                                            {new Date(offer.validity).toDateString()}
                                        </div>
                                    </div>

                                    <Link href={`/offers/${offer.id}`} className="mt-4 bg-[#00B4D8] hover:bg-[#0092b3] text-white text-sm font-medium p-2 rounded-md transition-all duration-300 w-full cursor-pointer block text-center">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        )) : <div className="sm:cols-span-2 lg:col-span-3 text-center"><p className="text-sm font-semibold">No Offers Found.</p><p>Please check again later!.</p></div>}
                    </div>
                </div>

            </section>

            <section className="mt-16 bg-[#F4E1D2]/40 py-12 px-6 md:px-12 rounded-lg text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0d4785] mb-3">
                    Didn’t find what you’re looking for?
                </h2>
                <p className="text-gray-700 max-w-2xl mx-auto mb-6 text-sm md:text-base leading-relaxed">
                    No worries — our travel and study advisors can help you find the right
                    opportunity abroad. Let us guide you through visa, travel, and
                    accommodation options that match your goals.
                </p>

                <a
                    href="/contact"
                    className="bg-[#00B4D8] text-white font-medium px-6 py-2.5 rounded-md hover:bg-[#0092b3] transition duration-300"
                >
                    Contact Our Team
                </a>

                {/* Divider */}
                <div className="my-10 border-t border-gray-300 w-2/3 mx-auto"></div>

                {/* Newsletter Signup */}
                <h3 className="text-lg font-semibold text-[#0d4785] mb-2">
                    Stay Updated on New Offers
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                    Subscribe to receive exclusive travel and study discounts.
                </p>

                <form className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full sm:w-auto flex-grow border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                    />
                    <button
                        type="submit"
                        className="bg-[#FF6F61] text-white px-6 py-2 rounded-md font-medium hover:bg-[#e25a4e] transition duration-300"
                    >
                        Subscribe
                    </button>
                </form>
            </section>


            {/* Footer here */}
            <Footer />

        </>
    );
};

