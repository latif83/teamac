"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrash, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { AddServiceModal } from "./AddServiceModal";
import { toast } from "react-toastify";

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
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="bg-white rounded-lg shadow-md hover:shadow-lg transition"
                    >
                        {/* Image */}
                        <div className="w-full h-40 relative rounded-t-lg overflow-hidden">
                            <img
                                src={service.image?.url}
                                alt={service.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col justify-between h-[calc(100%-10rem)]">
                            <div>
                                <h2 className="text-sm font-semibold text-[#0d4785] mb-2 line-clamp-1">
                                    {service.name}
                                </h2>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-1">
                                    {service.description}
                                </p>
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
                ))}
            </div>
        </section>
    );
};

export default ServicesPage;
