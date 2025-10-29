import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const NewOfferModal = ({ setAddOffer }) => {

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4 pt-12">
            <div className="bg-white rounded-t-lg overflow-y-auto shadow-lg w-full h-full max-w-2xl relative p-6">

                <div className="flex justify-between items-center">


                    <h2 className="font-bold">
                        New Offer
                    </h2>

                    {/* Close Button */}
                    <button
                        type="button"
                        title="Close Button"
                        onClick={() => setAddOffer(false)}
                        className="text-gray-700 py-1.5 px-2 rounded-full cursor-pointer hover:bg-red-400 hover:text-gray-50"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>


                <form className="space-y-4 mt-5">


                    {/* Title */}
                    <div>
                        <label className="block text-sm text-gray-700 mb-1 font-semibold">
                            Offer
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none"
                            placeholder="e.g., Study in Canada - 20% Tuition Discount"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm text-gray-700 mb-1 font-semibold">
                            Description
                        </label>
                        <textarea
                            name="description"
                            required
                            rows="3"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none resize-none"
                            placeholder="A detailed summary of what this offer is about..."
                        ></textarea>
                    </div>

                    {/* Category / Service */}
                    <div>
                        <label className="block text-sm text-gray-700 mb-1 font-semibold">
                            Category / Service
                        </label>
                        <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none">
                            <option>Select Service</option>
                            <option>Study Abroad</option>
                            <option>Visa Assistance</option>
                            <option>Test Preparation</option>
                        </select>
                    </div>

                    {/* Country */}
                    <div>
                        <label className="block text-sm text-gray-700 mb-1 font-semibold">
                            Country
                        </label>
                        <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none">
                            <option>Select Country</option>
                            <option>Canada</option>
                            <option>USA</option>
                            <option>UK</option>
                            <option>Australia</option>
                        </select>
                    </div>

                    {/* City */}
                    <div>
                        <label className="block text-sm text-gray-700 mb-1 font-semibold">
                            City
                        </label>
                        <input
                            type="text"
                            name="city"
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none"
                            placeholder="e.g., San Jose, Toronto, Melbourne, London"
                        />
                    </div>

                    {/* Offer Type */}
                    <div>
                        <label className="block text-sm text-gray-700 mb-1 font-semibold">
                            Offer Type
                        </label>
                        <input
                            type="text"
                            name="offerTye"
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none"
                            placeholder="e.g. Scholarship, Discount, Travel Package, Consultation Offer."
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-700 mb-1 font-semibold">
                            Price / Label
                        </label>
                        <input
                            type="text"
                            name="price"
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none"
                            placeholder="e.g., From $1500, Starting at ₵2000, Custom Quote"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-700 mb-1 font-semibold">
                            Price / Description
                        </label>
                        <input
                            type="text"
                            name="price"
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none"
                            placeholder="Explain what the pricing covers or excludes..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-700 mb-1 font-semibold">
                            Valid Until
                        </label>
                        <input
                            type="date"
                            name="price"
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none"
                        />
                    </div>



                    <div>

                        <p className="block text-sm text-gray-700 mb-1 font-semibold">Select an image thumbnail for this offer</p>

                        <label className="w-full h-[150px] border rounded hover:bg-[#f2f2f2] cursor-pointer flex flex-col items-center justify-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <span className="text-sm">Select Image</span>
                        </label>
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