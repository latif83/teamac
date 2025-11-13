"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { toast } from "react-toastify";

export const BookConsultation = ({ setBookConsusltation,setCloseSuccess }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        mode: "",
        date: "",
        message: "",
        countryCode: "",
        countryName: ""
    });

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData);
        // TODO: submit to API
        setLoading(true)
        try {
            const res = await fetch(`/api/consultation`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await res.json()
            if (!res.ok) {
                return toast.error(data.msg || "Unable to book for consultation, please try again later!")
            }
            toast.success(data.msg || "Consultation Booked successully, our team will reach out to you shortly!")
            setCloseSuccess(true)
            setBookConsusltation(false)
        }
        catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center sm:px-4 px-3">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative overflow-y-auto max-h-[90vh] transition-all duration-300">
                {/* Header */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 sticky top-0 bg-white">
                    <h2 className="text-lg md:text-xl font-bold text-[#0d4785]">
                        Book a Consultation
                    </h2>
                    <button
                        type="button"
                        onClick={() => setBookConsusltation(false)}
                        title="Close Button"
                        className="text-gray-700 py-1.5 px-2 rounded-full cursor-pointer hover:bg-red-400 hover:text-gray-50"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    <div className="grid md:grid-cols-2 gap-4">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-600 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none"
                                placeholder="Enter your full name"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-600 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none"
                                placeholder="example@email.com"
                            />
                        </div>
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-1">
                            Phone (WhatsApp Preferred)
                        </label>
                        <PhoneInput
                            country={'gh'}
                            value={formData.phone}
                            onChange={(value, countryData) => {
                                setFormData((prevData) => ({ ...prevData, phone: value, countryCode: `+${countryData.dialCode}`, countryName: countryData.name }))
                            }}
                            inputStyle={{ width: '100%' }}
                            inputClass="!w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none"
                        />
                    </div>

                    {/* Mode, Date & Time */}
                    <div className="grid md:grid-cols-2 gap-4">
                        {/* Consultation Mode */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-600 mb-1">
                                Mode
                            </label>
                            <select
                                name="mode"
                                required
                                value={formData.mode}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none"
                            >
                                <option value="">Select mode</option>
                                <option>Online</option>
                                <option>In-Person</option>
                            </select>
                        </div>

                        {/* Preferred Date */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-600 mb-1">
                                Preferred Date
                            </label>
                            <input
                                type="date"
                                name="date"
                                required
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none"
                            />
                        </div>

                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-1">
                            Additional Message
                        </label>
                        <textarea
                            name="message"
                            rows="3"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none resize-none"
                            placeholder="Describe your query or any special request..."
                        ></textarea>
                    </div>

                    {/* Submit */}
                    <div className="pt-4 flex justify-end">
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-4 bg-[#00B4D8] text-white rounded-md hover:bg-[#0092b3] transition font-medium text-sm flex items-center gap-2 disabled:opacity-30 cursor-pointer"
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

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
</svg>



                                    <span>
                                        Book Consultation
                                    </span></>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
