"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimes } from "@fortawesome/free-solid-svg-icons"; // Added faCheckCircle

export const SuccessConsultation = ({ setCloseSuccess }) => {
    // You can replace the number with your actual WhatsApp contact
    const WHATSAPP_NUMBER = "+233 54 000 0000";

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center sm:px-4 px-3">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative overflow-y-auto max-h-[90vh] transition-all duration-300">

                {/* Header */}
                {/* <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 sticky top-0 bg-white">
                    <h2 className="text-lg md:text-xl font-bold text-[#0d4785]">
                        Consultation Status
                    </h2>
                    <button
                        type="button"
                        title="Close Button"
                        onClick={onClose}
                        className="text-gray-700 py-1.5 px-2 rounded-full cursor-pointer hover:bg-red-400 hover:text-gray-50"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div> */}

                {/* Content */}
                <div className="p-6 text-center space-y-6">

                    {/* Success Icon */}
                    <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-6xl text-green-500 mx-auto"
                    />

                    {/* Main Message */}
                    <h3 className="md:text-xl text-lg font-extrabold text-[#0d4785]">
                        We're Ready to Plan Your Trip. ✈️
                    </h3>

                    <p className="text-gray-700 text-sm leading-relaxed">
                        Thank you for booking your consultation! We've received your request and are excited to begin crafting your travel experience. <br />You will receive an <b>**email confirmation**</b> shortly with all the details you submitted (check your spam folder just in case).
                    </p>

                    {/* Next Steps Section */}
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-left">
                        <h4 className="font-semibold text-gray-800 mb-2 text-sm">What Happens Next?</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                            <li>Our dedicated travel specialist will personally review your request.</li>
                            <li>You will hear from us within <b>**24 hours**</b> via your preferred contact method (WhatsApp/Email) to confirm the specific time and mode of your consultation.</li>
                        </ul>
                    </div>

                    <div className="flex justify-end mt-5">
                        <button onClick={()=>setCloseSuccess(false)} type="button" className="py-2.5 px-3 rounded-full border cursor-pointer hover:bg-black hover:text-white transition-all duration-500 text-sm">
                            OK</button>
                    </div>

                </div>
            </div>
        </div>
    );
};