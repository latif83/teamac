import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const NewCountryModal = ({ setAddCountry }) => {
    return (

        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4 pt-12">
            <div className="bg-white rounded-t-lg shadow-lg w-full h-full max-w-2xl relative p-6">

                <div className="flex justify-between items-center">


                    <h2 className="font-bold">
                        New Country
                    </h2>

                    {/* Close Button */}
                    <button
                        type="button"
                        title="Close Button"
                        onClick={() => setAddCountry(false)}
                        className="text-gray-700 py-1.5 px-2 rounded-full cursor-pointer hover:bg-red-400 hover:text-gray-50"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>


                <form className="space-y-6 mt-6">


                    {/* Name */}
                    <div>
                        <label className="block text-sm text-gray-700 mb-1 font-semibold">
                            Country Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none"
                            placeholder="e.g., Germany, Canada, Australia"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 pt-4">

                        <button
                            type="submit"
                            className="px-6 py-4 w-full cursor-pointer text-sm bg-[#00B4D8] text-white rounded-md hover:bg-[#0092b3] transition flex items-center justify-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                            </svg>

                            <span> Submit </span>
                        </button>
                    </div>


                </form>
            </div>
        </div>

    )
}