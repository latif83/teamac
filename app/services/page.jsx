"use client";

import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function ServicesPage() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchServices = async () => {
        try {
            setLoading(true);
            const res = await fetch("/api/services");
            const data = await res.json();
            setServices(data.services);
        } catch (error) {
            console.error("Error fetching services:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchServices();
    }, []);

    return (
        <>
            <Header />

            <div className="text-center md:mb-16 mb-5 bg-black text-white px-3 py-12">
                <h1 className="md:text-xl font-extrabold text-gray-50">
                    Explore Our Services
                </h1>
                <p className="mt-4 text-gray-50 max-w-2xl mx-auto text-base md:text-sm text-sm">
                    Helping students and professionals unlock global opportunities through tailored services.
                </p>
            </div>

            <main className="sm:px-6 px-3 md:px-12 mb-12">
                {/* Page Header */}


                {/* Services Grid */}
                {loading ? (
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="rounded-2xl bg-white shadow-md animate-pulse h-80"
                            >
                                <div className="h-48 w-full bg-gray-200"> </div>
                                <div className="p-3">

                                    <h2 className="w-32 h-4 rounded-lg bg-gray-200"></h2>

                                    <p className="w-full h-8 bg-gray-200 rounded-lg mt-1"></p>

                                    <span className="bg-gray-200 block w-full h-6 rounded-lg mt-4"></span>

                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="group relative flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
                            >
                                {/* Image */}
                                <div className="relative h-48 w-full">
                                    <img
                                        src={service.image?.url || "/default-service.png"}
                                        alt={service.name}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 bg-[#00B4D8] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                                        {service._count.offers} {service._count.offers === 1 ? "Offer" : "Offers"}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h2 className="font-semibold text-gray-800 mb-2 group-hover:text-[#00B4D8] transition-colors">
                                        {service.name}
                                    </h2>
                                    <p className="text-gray-600 text-sm line-clamp-2 mb-6">
                                        {service.description}
                                    </p>

                                    {/* CTA */}
                                    <Link
                                        href={`/offers?service=${service.id}`}
                                        className="mt-auto bg-gradient-to-r from-[#00B4D8] to-[#0077b6] text-white font-semibold py-2 px-4 rounded-xl shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center text-center text-sm"
                                    >
                                        View Offers
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            <Footer />
        </>
    );
}
