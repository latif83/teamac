"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export const SuccessApplication = ({ setCloseSuccess }) => {
    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center sm:px-4 px-3">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative overflow-y-auto max-h-[90vh] transition-all duration-300">

                {/* Content */}
                <div className="p-6 text-center space-y-6">

                    {/* Success Icon */}
                    {/* <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-6xl text-green-500 mx-auto"
                    /> */}

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24 text-green-500 mx-auto">
                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                    </svg>


                    {/* Main Message */}
                    <h3 className="md:text-xl text-lg font-extrabold text-[#0d4785]">
                        Your Application Has Been Received 🎉
                    </h3>

                    <p className="text-gray-700 text-sm leading-relaxed">
                        Thank you for applying for this opportunity! We’ve successfully received your application and our team will carefully review your submission. <br />
                        Expect a follow-up via your <b>email</b> or <b>WhatsApp</b> shortly regarding the next steps.
                    </p>

                    {/* Next Steps Section */}
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-left">
                        <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                            What Happens Next?
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                            <li>Your details are securely stored and under review.</li>
                            <li>Our team will reach out within <b>24–48 hours</b> to continue the process.</li>
                            <li>Feel free to contact us anytime via WhatsApp for updates.</li>
                        </ul>
                    </div>

                    {/* Close Button */}
                    <div className="flex justify-end mt-5">
                        <button
                            onClick={() => setCloseSuccess(false)}
                            type="button"
                            className="py-2.5 px-3 rounded-full border cursor-pointer hover:bg-[#0d4785] hover:text-white transition-all duration-500 text-sm"
                        >
                            OK
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};
