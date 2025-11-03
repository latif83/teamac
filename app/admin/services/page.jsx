"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrash, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { AddServiceModal } from "./AddServiceModal";
import { toast } from "react-toastify";

const RenderLoading = () => {

    return (
        <>
            {
                [1, 2, 3, 4, 5, 6].map((loader) => (
                    <div
                        key={loader}
                        className="bg-white rounded-lg shadow-md hover:shadow-lg transition animate-pulse"
                    >
                        {/* Image */}
                        <div className="w-full bg-gray-200 h-40 relative rounded-t-lg overflow-hidden">
                            
                        </div>

                        {/* Content */}
                        <div className="py-5 px-3 flex flex-col justify-between h-[calc(100%-10rem)]">
                            <div>
                                <h2 className="text-sm font-semibold text-[#0d4785] rounded-lg mb-2 h-4 w-32 bg-gray-200 line-clamp-1">
                                    
                                </h2>
                                <p className="text-gray-600 bg-gray-200 rounded-lg w-full h-6 text-sm mb-4 line-clamp-1">
                                    
                                </p>

                                <span className="mt-3 bg-gray-200 w-32 block h-4 rounded-lg">

                                </span>
                            </div>
                        </div>
                    </div>
                ))
            }</>
    )
}

const ServicesPage = () => {


    const [loading, setLoading] = useState(false)
    const [services, setServices] = useState([])

    const [fetchService, setFetchService] = useState(true)

    const getServiceData = async () => {
        try {
            setLoading(true)

            const res = await fetch('/api/admin/services')
            const data = await res.json()

            if (!res.ok) {
                return toast.error(data.msg || 'Failed to fetch services data')
            }

            setServices(data.services)

        }
        catch (e) {
            console.log(e)
            toast.error('An unexpected error occurred while fetching services data.')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchService && getServiceData()
        setFetchService(false)
    }, [fetchService])


    const [addService, setAddService] = useState(false)

    return (
        <section className="p-3 md:p-6">

            {addService && <AddServiceModal setAddService={setAddService} setFetchService={setFetchService} />}

            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="sm:text-xl font-bold text-[#0d4785]">Services</h1>
                <button onClick={() => setAddService(true)} type="button" className="border cursor-pointer hover:text-[#fff] px-4 py-3 rounded-xl hover:bg-[#000] transition text-sm flex items-center gap-2">
                    <FontAwesomeIcon icon={faPlusCircle} /> New Service
                </button>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                {loading ? <RenderLoading /> : services.length > 0 ? services.map((service) => (
                    <div
                        key={service.id}
                        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer hover:scale-[1.02] duration-500 hover:ease-in-out hover:border hover:border-[#0d4785]"
                    >
                        {/* Image */}
                        <div className="w-full h-40 relative rounded-t-lg overflow-hidden">
                            <img
                                src={service.image?.url}
                                alt={service.name}
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="py-5 px-3 flex flex-col justify-between h-[calc(100%-10rem)]">
                            <div>
                                <h2 className="text-sm font-semibold text-[#0d4785] mb-2 line-clamp-1">
                                    {service.name}
                                </h2>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-1">
                                    {service.description}
                                </p>

                                <span className="flex items-center gap-2 text-xs text-[#0d4785] font-medium hover:underline cursor-pointer">
                                    <span>Manage Service</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>

                                </span>
                            </div>

                            {/* Status & Actions */}
                            {/* <div className="flex justify-between items-center mt-auto">


                                <div className="flex gap-3">
                                    <button className="text-[#00B4D8] hover:text-[#0092b3] transition">
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                    <button className="text-red-500 hover:text-red-600 transition">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                )) : <div className="md:col-span-3 sm:col-span-2 text-center text-gray-500"> <p className="text-sm font-semibold"> No Services Found. </p> </div> }
            </div>
        </section>
    );
};

export default ServicesPage;
