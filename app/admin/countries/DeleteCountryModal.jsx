import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { toast } from "react-toastify"

export const DeleteCountry = ({ setDeleteCountry, countryId, setFetchCountries }) => {

    const [loading, setLoading] = useState(false)

    const deleteCountry = async () => {
        try {
            setLoading(true)

            const res = await fetch(`/api/admin/countries`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: countryId })
            })

            const data = await res.json()

            if (!res.ok) {
                toast.error(data.message || 'Failed to delete country!')
                return
            }

            toast.success(data.message || 'Country deleted successfully!')
            setFetchCountries(true)
            setDeleteCountry(false)

        }
        catch (e) {
            console.log(e)
            toast.error('An unexpected error occurred while deleting the country!')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="fixed inset-0 bg-black/50 z-50 px-4 md:pt-12 pt-6">
            <div className="bg-white rounded-lg mx-auto shadow-lg w-full max-w-xl relative md:p-6 p-3">

                <div className="flex justify-between items-center">
                    <h2 className="font-bold">
                        Delete Country
                    </h2>
                    {/* Close Button */}
                    <button
                        type="button"
                        title="Close Button"
                        onClick={() => setDeleteCountry(false)}
                        className="text-gray-700 py-1.5 px-2 rounded-full cursor-pointer hover:bg-red-400 hover:text-gray-50"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>

                <div className="mt-6">
                    <p className="text-gray-700 text-sm">
                        Are you sure you want to delete this country? This action cannot be undone.
                    </p>
                </div>
                <div className="flex justify-end gap-3 pt-4">

                    <button
                        type="button"
                        onClick={() => setDeleteCountry(false)}
                        className="px-6 py-4 w-full cursor-pointer text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={deleteCountry}
                        type="button"
                        disabled={loading}
                        className="disabled:opacity-30 px-6 py-4 w-full cursor-pointer text-sm bg-red-600 text-white rounded-md hover:bg-red-700 transition flex items-center gap-2 justify-center"
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
                                Deleting...
                            </>
                        ) : (
                            <>

                                <span>
                                    Delete
                                </span></>
                        )}
                    </button>

                </div>

            </div>

        </div>
    )
}