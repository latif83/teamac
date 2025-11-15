"use client";

import { useMemo, useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
// Replaced FontAwesome imports with inline SVG components to avoid dependency errors
import { toast } from "react-toastify";

export const TestimonialForm = ({ setGiveFeedback, onSuccess }) => {

    const options = useMemo(() => countryList().getData(), []);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        country: "",
        city: "",
        comment: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Simple client-side validation check
        if (!formData.fullName || !formData.email || !formData.comment) {
            return toast.error("Please fill in all required fields.");
        }

        setLoading(true);
        try {

            const sData = {...formData,country:formData?.country?.label}

            // NOTE: Targeting a new endpoint for feedback submission
            const res = await fetch(`/api/feedback`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(sData)
            });
            
            const data = await res.json();
            
            if (!res.ok) {
                // Display specific error message or generic one
                return toast.error(data.msg || "Unable to submit testimonial. Please try again later.");
            }
            
            // Success: Call the onSuccess callback to switch the parent state/modal content
            toast.success(data.msg || "Thank you! Your testimonial has been submitted for review.");
            
            onSuccess(true); // Triggers the parent component to show the success message
            setGiveFeedback(false);   // Closes the form modal (optional, based on desired UX)
            
        } catch (e) {
            console.error("Submission Error:", e);
            toast.error("An unexpected error occurred during submission.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center sm:px-4 px-3 md:pt-12 pt-6">
            <div className="bg-white rounded-t-2xl shadow-2xl w-full max-w-2xl relative overflow-y-auto h-full transition-all duration-300">
                {/* Header */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 sticky top-0 bg-white">
                    <h2 className="font-bold text-[#0d4785]">
                        Your Feedback
                    </h2>
                    <button
                        type="button"
                        onClick={()=>setGiveFeedback(false)}
                        title="Close Form"
                        className="text-gray-700 py-1.5 px-2 rounded-full cursor-pointer hover:bg-red-400 hover:text-gray-50"
                    >
                         <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
    </svg>
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
                                name="fullName" // Updated to match Prisma model
                                required
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none"
                                placeholder="Your full name"
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
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        {/* Country */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-600 mb-1">
                                Country
                            </label>
                            {/* <input
                                type="text"
                                name="country" 
                                required
                                value={formData.country}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none"
                                placeholder="e.g., Ghana"
                            /> */}
                            <Select
                                                        options={options}
                                                        value={formData.country}
                                                        onChange={(val)=>setFormData((prevData)=>({...prevData,country : val}))}
                                                        placeholder="Select a country"
                                                        className="text-sm"
                                                    />
                        </div>

                        {/* City */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-600 mb-1">
                                City
                            </label>
                            <input
                                type="text"
                                name="city"
                                required
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none"
                                placeholder="e.g., Accra"
                            />
                        </div>
                    </div>

                    {/* Comment (Testimonial) */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-1">
                            Your Testimonial / Feedback
                        </label>
                        <textarea
                            name="comment" // Updated name to match Prisma model
                            rows="5"
                            required
                            value={formData.comment}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none resize-none"
                            placeholder="Tell us about your experience..."
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
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
    </svg>
                                    <span>
                                        Submit Feedback
                                    </span>
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};