"use client"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { FeedbackDetails } from "./Details"

export default function Feedbacks() {

    const [loading, setLoading] = useState(false)
    const [feedbacks, setFeedbacks] = useState([])

    const [fetchData, setFetchData] = useState(true)

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
        if (fetchData) {
            getFeedbacks()
            setFetchData(false)
        }

    }, [fetchData])

    const [viewFeedback, setViewFeedback] = useState(false)
    const [feedback, setFeedback] = useState()

    const [featureFeedbackLoading, setFeatureFeedbackLoading] = useState(false)

    return (
        <section className="p-3 md:p-6">

            {viewFeedback && <FeedbackDetails feedback={feedback} setViewFeedback={setViewFeedback} setFetchData={setFetchData} />}

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

                                        <td className="px-6 py-4 text-right flex items-center justify-end gap-4 flex-col">

                                             <label
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="bg-white/80 px-2 py-1 rounded-md flex items-center gap-1 cursor-pointer hover:bg-white"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={feedback.featured}
                                                        hidden={featureFeedbackLoading}
                                                        onChange={async (e) => {
                                                            const checked = e.target.checked;
                                                            setFeatureFeedbackLoading(true)
                                                            try {
                                                                const res = await fetch(`/api/admin/testimonials/feature`, {
                                                                    method: "PATCH",
                                                                    headers: { "Content-Type": "application/json" },
                                                                    body: JSON.stringify({ featured: checked, id:feedback.id }),
                                                                });
                    
                                                                const data = await res.json()
                    
                                                                if (!res.ok) {
                                                                    return toast.error(data.msg || "Failed to update");
                                                                }
                                                                toast.success(`Feedback ${checked ? "featured" : "unfeatured"}!`);
                                                                setFetchData(true)
                                                            } catch (err) {
                                                                toast.error(err.message);
                                                            } finally {
                                                                setFeatureFeedbackLoading(false)
                                                            }
                                                        }}
                                                        className="accent-[#00B4D8] cursor-pointer"
                                                    />
                                                    {featureFeedbackLoading ? <span className="p-2 rounded-lg bg-gray-400 animate-pulse text-xs font-semibold"> Processing... </span> : <span className="text-xs font-semibold text-gray-700">{feedback.featured ? 'Featured' : 'Feature'}</span>}
                                                </label>

                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setFeedback(feedback);
                                                    setViewFeedback(true);
                                                }}
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