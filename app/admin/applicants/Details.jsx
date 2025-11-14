import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

export const ApplicantDetails = ({ applicant, setViewApplicant }) => {

    const [updatingStatus, setUpdatingStatus] = useState(false)

    const [applicantData,setApplicantData] = useState(applicant)

    const updateOfferStatus = async (status) => {
        try {
            setUpdatingStatus(true)

            const res = await fetch(`/api/admin/applicants`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: applicant.id,
                    status
                })
            })

            const data = await res.json()

            if (!res.ok) {
                return toast.error(data.msg)
            }

            toast.success(data.msg)
            setApplicantData(data.data)

        }
        catch (e) {
            console.log(e)
            toast.error("Unexpected error while updating status")
        }
        finally {
            setUpdatingStatus(false)
        }
    }

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center md:px-4 px-2 md:pt-12 pt-6">

            <div className="bg-white rounded-t-lg overflow-y-auto shadow-lg w-full h-full max-w-3xl relative md:p-6 p-3">

                <div className="flex justify-between items-center">


                    <h2 className="font-bold">
                        Applicant Details
                    </h2>

                    {/* Close Button */}
                    <button
                        type="button"
                        title="Close Button"
                        onClick={() => setViewApplicant(false)}
                        className="text-gray-700 py-1.5 px-2 rounded-full cursor-pointer hover:bg-red-400 hover:text-gray-50"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>

                <div className="mt-8 grid md:grid-cols-2 gap-4">

                    <div>
                        <p className="font-bold text-red-600 text-xs">Full Name</p>
                        <p className="text-sm text-gray-700">{applicantData.fullName}</p>
                    </div>

                    <div>
                        <p className="font-bold text-red-600 text-xs">Email</p>
                        <p className="text-sm text-gray-700">{applicantData.email}</p>
                    </div>

                    <div>
                        <p className="font-bold text-red-600 text-xs">Phone</p>
                        <p className="text-sm text-gray-700">{applicantData.phone}</p>
                    </div>

                    <div>
                        <p className="font-bold text-red-600 text-xs">Status</p>
                        <p className={`text-sm ${applicantData.status == "Pending" ? 'text-orange-700' : 'text-green-700'}`}>{applicantData.status}</p>
                    </div>

                    <div className="md:col-span-2">
                        <p className="font-bold text-red-600 text-xs">Additional Info</p>
                        <p className="text-sm text-gray-700">{applicantData.additionalInfo || "N/A"}</p>
                    </div>

                </div>

                <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <button onClick={() => updateOfferStatus("Reviewed")} disabled={updatingStatus} type="button" className="text-sm flex items-center gap-2 bg-green-600 disabled:opacity-30 hover:opacity-80 cursor-pointer text-white py-2 px-4 rounded-lg justify-center">


                        {updatingStatus ? (
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                                </svg>

                                <span>Mark as Reviewed</span></>
                        )}
                    </button>

                    <button type="button" className="text-sm flex items-center gap-2 bg-gray-900 hover:opacity-80 cursor-pointer text-white py-2 px-4 rounded-lg justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                        </svg>


                        <span>Call Applicant</span>
                    </button>

                </div>

                <div className="mt-4">
                    <h1 className="text-lg font-bold">Contact:</h1>
                    <div className="mt-1 grid md:grid-cols-2 gap-4">
                        <button type="button" className="text-sm flex items-center gap-2 bg-gray-100 border hover:opacity-80 cursor-pointer py-2 px-4 rounded-lg justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>


                            <span>Via Email</span>
                        </button>

                        <button type="button" className="text-sm flex items-center gap-2 bg-gray-100 hover:opacity-80 cursor-pointer py-2 px-4 rounded-lg justify-center border">

                            <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6 text-lg" />


                            <span>Via Whatsapp</span>
                        </button>

                    </div>
                </div>

            </div>
        </div>

    )
}