"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faRepeat, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { toast } from "react-toastify";
import { uploadServicesThumbnail } from "@/actions/actions";

export function EditServiceModal({ setEditService, serviceData, setFetchService ,setViewService}) {

    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        image: ""
    });

    useEffect(() => {
        setFormData(serviceData)
    }, [])

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)

            if (!formData.image) {
                return toast.error("Please select an image thumbnail for this service!")
            }

            const imageUploaded = formData.image?.url ? formData.image : await uploadServicesThumbnail(formData.image)

            const fData = { ...formData, image: imageUploaded }

            const res = await fetch('/api/admin/services', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fData)
            })

            const data = await res.json()

            if (!res.ok) {
                return toast.error(data.msg || 'Failed to add service')
            }

            toast.success(data.msg || 'Service added successfully')
            setFetchService(true)
            setViewService(false)
            setEditService(false)

        }
        catch (e) {
            console.log(e)
            toast.error('An error occurred. Please try again.')
        } finally {
            setLoading(false)
        }
    };

    const handleImageSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {

                // setConfirmAnalysisBeforeImage(true)

                setFormData((prevData) => ({ ...prevData, image: reader.result }));

                // console.log(reader.result)
                // setCropping(true);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4 md:pt-12 pt-6">
            <div className="bg-white overflow-y-auto rounded-t-lg shadow-lg w-full h-full max-w-2xl relative md:p-6 p-3">

                <div className="flex justify-between items-center">


                    <h2 className="font-bold">
                        Edit Service
                    </h2>

                    {/* Close Button */}
                    <button
                        type="button"
                        title="Close Button"
                        onClick={() => setEditService(false)}
                        className="text-gray-700 py-1.5 px-2 rounded-full cursor-pointer hover:bg-red-400 hover:text-gray-50"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>


                <form onSubmit={handleSubmit} className="space-y-6 mt-6">


                    {/* Name */}
                    <div>
                        <label className="block text-sm text-gray-700 mb-1 font-semibold">
                            Service Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none"
                            placeholder="e.g., Study Abroad, Visa Assistance"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm text-gray-700 mb-1 font-semibold">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            rows="3"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none resize-none"
                            placeholder="Leave a description for this sevice..."
                        ></textarea>
                    </div>

                    <div>

                        <p className="block text-sm text-gray-700 mb-1 font-semibold">Select an image thumbnail for this service</p>



                        {formData.image ? (
                            <div className="mt-2 cursor-pointer block w-full h-[150px] rounded overflow-hidden hover:border border-red-400 transition-all duration-500 relative">
                                <img width={100} height={100} src={formData.image?.url || formData.image} alt="Selected" className="w-full h-[150px] object-cover rounded" />
                                <div className="absolute bottom-0 left-0 w-full flex justify-end gap-2 p-2 bg-black/30">
                                    <label htmlFor="image" className="px-2 py-1 rounded bg-blue-500 hover:bg-blue-700 transition-all duration-500 text-sm cursor-pointer">
                                        <FontAwesomeIcon icon={faRepeat} className="text-white" />
                                    </label>
                                    <button type="button" className="px-2 py-1 rounded bg-green-500 hover:bg-green-700 transition-all duration-500 text-sm cursor-pointer">
                                        <FontAwesomeIcon icon={faExpand} className="text-white" />
                                    </button>
                                    <button onClick={() => setFormData((prevData) => ({ ...prevData, image: "" }))} type="button" className="px-2 py-1 rounded bg-red-500 hover:bg-red-700 transition-all duration-500 text-sm cursor-pointer">
                                        <FontAwesomeIcon icon={faTrash} className="text-white" />
                                    </button>
                                </div>
                            </div>
                        ) : <label htmlFor="image" className="w-full h-[150px] border rounded hover:bg-[#f2f2f2] cursor-pointer flex flex-col items-center justify-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <span className="text-sm">Select Image</span>
                        </label>}

                        <input type="file" accept="image/*" hidden id="image" onChange={handleImageSelect} />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 pt-4">

                        <button
                            disabled={loading}
                            type="submit"
                            className="px-6 py-4 w-full disabled:opacity-30 cursor-pointer text-sm bg-blue-500 text-white rounded-md hover:bg-blue-700 transition flex items-center justify-center gap-2"
                        >


                            {loading ? (
                                <>
                                    <svg
                                        className="w-5 h-5 animate-spin text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
                                        ></path>
                                    </svg>
                                    Processing…
                                </>
                            ) : (
                                <>

                                    <span>
                                        Save Changes
                                    </span></>
                            )}
                        </button>
                    </div>


                </form>
            </div>
        </div>
    );
};