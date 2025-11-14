"use client"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

export default function Feedbacks() {

    const [loading, setLoading] = useState(false)
    const [feedbacks, setFeedbacks] = useState([])

    const getFeedbacks = async () => {
        try {
            setLoading(true)
            const res = await fetch(`/api/admin/testimonials`)
            const data = await res.json()
            if (!res.ok) {
                return toast.error(data.msg)
            }
            setFeedbacks(data.testimonials)
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getFeedbacks()
    }, [])

    return (
        <section className="p-3 md:p-6">
            {/* {viewApplicant && (
                <ApplicantDetails
                  applicant={applicant}
                  setViewApplicant={setViewApplicant}
                />
              )} */}

            <div className="flex justify-between items-center mb-6">
                <h1 className="sm:text-xl font-bold text-[#0d4785]">Feedbacks / Testimonials</h1>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Country
                            </th>
                            <th scope="col" className="px-6 py-3">
                                City
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {loading
                            ? [1, 2, 3, 4].map((num) => (
                                <tr
                                    key={num}
                                    className="bg-white border-b border-gray-200 hover:bg-gray-50 animate-pulse"
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                    >
                                        <span className="w-full h-6 rounded-lg bg-gray-200 block"></span>
                                    </th>

                                    <td className="px-6 py-4">
                                        <span className="w-full h-6 rounded-lg bg-gray-200 block"></span>
                                    </td>

                                    <td className="px-6 py-4">
                                        <span className="w-full h-6 rounded-lg bg-gray-200 block"></span>
                                    </td>

                                    <td className="px-6 py-4">
                                        <span className="w-full h-6 rounded-lg bg-gray-200 block"></span>
                                    </td>

                                    <td className="px-6 py-4 text-right">
                                        <button
                                            type="button"
                                            className="font-medium bg-blue-600 w-full block h-6 rounded-lg hover:underline cursor-pointer"
                                        ></button>
                                    </td>
                                </tr>
                            ))
                            : feedbacks.length > 0 ?
                                feedbacks.map((feedback, index) => (
                                    <tr
                                        key={index}
                                        className="bg-white border-b border-gray-200 hover:bg-gray-50"
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            {feedback.fullName}
                                        </th>

                                        <td className="px-6 py-4">{feedback.email}</td>

                                        <td className="px-6 py-4">{feedback.country}</td>
                                        <td className="px-6 py-4">{feedback.city}</td>

                                        <td className="px-6 py-4 text-right">
                                            <button
                                                type="button"
                                                // onClick={() => {
                                                //   setApplicant(applicant);
                                                //   setViewApplicant(true);
                                                // }}
                                                className="font-medium text-blue-600 hover:underline cursor-pointer"
                                            >
                                                View Details
                                            </button>
                                        </td>
                                    </tr>
                                )) : <tr>
                                    <td className="px-6 py-4 text-center" colSpan={5}>No data found</td></tr>}
                    </tbody>
                </table>
            </div>
        </section>
    )
}