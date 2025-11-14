"use client";

import React from 'react';

/**
 * Component to display a success message after a testimonial is submitted.
 * @param {object} props
 * @param {function} props.onClose - Function to close the modal.
 */
export const TestimonialSuccessMessage = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center sm:px-4 px-3">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm relative transition-all duration-300 transform scale-100 opacity-100 p-8 text-center">
                
                {/* Close Button */}
                <button
                    type="button"
                    onClick={()=>onClose(false)}
                    title="Close Confirmation"
                    className="absolute top-4 right-4 text-gray-700 py-2 px-2 rounded-full cursor-pointer hover:bg-red-200"
                >
                    {/* Inline Close (X) SVG */}
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                    </svg>
                </button>

                <div className="space-y-4">
                    {/* Inline Success Checkmark SVG */}
                    <svg className="w-12 h-12 mx-auto text-green-500 stroke-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>
                    </svg>

                    {/* Title */}
                    <h3 className="text-2xl font-extrabold text-[#0d4785]">
                        Thank You!
                    </h3>

                    {/* Message */}
                    <p className="text-gray-600 text-base">
                        Your testimonial has been successfully submitted. We appreciate your feedback and will review it shortly.
                    </p>

                    {/* Action Button */}
                    <button
                        type="button"
                        onClick={()=>onClose(false)}
                        className="w-full mt-4 px-6 py-3 bg-[#00B4D8] text-white rounded-lg hover:bg-[#0092b3] transition font-medium text-sm"
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};