import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { toast } from "react-toastify";

export const ApplyNowModal = ({ offer, setApplyNow,setCloseSuccess }) => {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        countryCode: "",
        countryName: "",
        additionalInfo: ""
    });

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true)
        try {

            const res = await fetch("/api/applications", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, offerId: offer.id }),
            });

            const data = await res.json();

            if (!res.ok) {
                return toast.error(data.msg)
            }

            toast.success(data.msg);
            setCloseSuccess(true)
            setApplyNow(false);
        }
        catch (e) {
            console.log(e)
            toast.error("An unexpected error happened, please try again later!")
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center sm:px-4 px-3 md:pt-12">
            <div className="bg-white rounded-t-lg overflow-y-auto shadow-lg w-full h-full max-w-2xl relative md:p-6 p-3">

                <div className="flex justify-between items-center">


                    <h2 className="font-bold">
                        Apply For Offer
                    </h2>

                    {/* Close Button */}
                    <button
                        type="button"
                        title="Close Button"
                        onClick={() => setApplyNow(false)}
                        className="text-gray-700 py-1.5 px-2 rounded-full cursor-pointer hover:bg-red-400 hover:text-gray-50"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>

                <div className="text-sm">
                    <h3 className="text-sm text-black">Please fill out the form below to apply for this offer.</h3>
                    <p className="text-xs text-gray-600">Our team will review your details and contact you shortly.</p>
                </div>


                <form onSubmit={handleSubmit} className="space-y-5 mt-5">


                    {/* Full Name */}
                    <div>
                        <label className="block text-sm text-gray-700 mb-1 font-semibold">
                            Full Name <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.fullName}
                            onChange={(e) => setFormData((prevData) => ({ ...prevData, fullName: e.target.value }))}
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none"
                            placeholder="Please enter your name"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm text-gray-700 mb-1 font-semibold">
                            Email <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={(e) => setFormData((prevData) => ({ ...prevData, email: e.target.value }))}
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none"
                            placeholder="Please enter your email"
                        />
                    </div>

                    {/* Telephone number */}
                    <div>
                        <label className="block text-sm text-gray-700 mb-1 font-semibold">
                            Tel (Whatsapp Preffered) <span className="text-red-600">*</span>
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

                    {/* Additional Info */}
                    <div>
                        <label className="block text-sm text-gray-700 mb-1 font-semibold flex items-center gap-2">
                            <span>Any additional details or questions?</span>
                            <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">**Optional</span>
                        </label>
                        <textarea
                            name="info"
                            required
                            rows="3"
                            value={formData.additionalInfo}
                            onChange={(e) => setFormData((prevData) => ({ ...prevData, message: e.target.value }))}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none resize-none"
                            placeholder="Provide us with any additional info or ask a question..."
                        ></textarea>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 mt-3">

                        <button
                            disabled={loading}
                            type="submit"
                            className="px-6 disabled:opacity-30 py-4 w-full cursor-pointer text-sm bg-[#00B4D8] text-white rounded-md hover:bg-[#0092b3] transition flex items-center justify-center gap-2"
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
                                        Submit
                                    </span></>
                            )}
                        </button>
                    </div>


                </form>
            </div>
        </div>
    );
};
