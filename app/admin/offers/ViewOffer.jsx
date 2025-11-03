import { faEdit, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { EditOfferModal } from "./EditOfferModal"
import { DeleteOffer } from "./DeleteOfferModal"

export const ViewOffer = ({ setViewOffer, setFetchData, selectedOffer }) => {

    const [editOffer, setEditOffer] = useState(false)

    const [delOffer,setDelOffer] = useState(false)

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4 pt-12">

            {editOffer && <EditOfferModal setEditOffer={setEditOffer} setFetchData={setFetchData} offerData={selectedOffer} setViewOffer={setViewOffer} />}

            {delOffer && <DeleteOffer setDeleteOffer={setDelOffer} offerId={selectedOffer.id} setFetchData={setFetchData} setViewOffer={setViewOffer} />}

            <div className="bg-white rounded-t-lg overflow-y-auto shadow-lg w-full h-full max-w-3xl relative p-6">

                <div className="flex justify-between items-center">


                    <h2 className="font-bold">
                        Manage Offer
                    </h2>

                    {/* Close Button */}
                    <button
                        type="button"
                        title="Close Button"
                        onClick={() => setViewOffer(false)}
                        className="text-gray-700 py-1.5 px-2 rounded-full cursor-pointer hover:bg-red-400 hover:text-gray-50"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>

                {/* Offer Details Content */}
                <div className="mt-4">

                    <div className="w-full bg-black rounded-md h-[200px]">
                        <img src={selectedOffer?.thumbnail?.url} className="w-full h-full object-cover object-center" />
                    </div>

                    <div className="mt-4">
                        <h3 className="font-semibold mb-2">
                            {selectedOffer.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                            {selectedOffer.description}
                        </p>

                        <div className="grid grid-cols-3 gap-4">

                            <div>
                                <h4 className="font-semibold text-red-600 text-xs mb-1">Service:</h4>
                                <p className="text-gray-700 text-sm">{selectedOffer?.service?.name}</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-xs text-red-600 mb-1">Country:</h4>
                                <p className="text-gray-700 text-sm">{selectedOffer?.country?.name}</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-xs text-red-600 mb-1">City:</h4>
                                <p className="text-gray-700 text-sm">{selectedOffer.city}</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-xs text-red-600 mb-1">Validity:</h4>
                                <p className="text-gray-700 text-sm">{new Date(selectedOffer.validity).toDateString()}</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-xs text-red-600 mb-1">Price Label:</h4>
                                <p className="text-gray-700 text-sm">{selectedOffer.priceLabel}</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-xs text-red-600 mb-1">Price Description:</h4>
                                <p className="text-gray-700 text-sm">{selectedOffer.priceDescription}</p>
                            </div>



                        </div>

                        <div className="mt-4">
                            <h4 className="font-semibold text-xs text-red-600 mb-1">Requirements:</h4>
                            {
                                selectedOffer.requirements ? selectedOffer.requirements.map((req, index) => (
                                    <p key={index} className="text-gray-700 text-sm">{index + 1}. {req}</p>
                                )) : (
                                    <p className="text-gray-700 text-sm">No specific requirements.</p>
                                )
                            }
                        </div>

                        <div className="flex justify-between items-center mt-3">

                            <span className="text-sm bg-green-500 text-green-800 px-2 py-1 rounded-full font-medium">
                                Active
                            </span>

                            <span className="text-sm flex flex-col text-gray-500">
                                <span>Posted At:</span>
                                <span className="font-medium text-gray-700"> {new Date(selectedOffer.datePosted).toDateString()} </span>
                            </span>

                        </div>

                        <div className="flex gap-4 mt-6">

                            <button type="button" onClick={() => setEditOffer(true)} className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition text-sm flex items-center justify-center gap-2 cursor-pointer">
                                <FontAwesomeIcon icon={faEdit} />
                                <span>Edit Offer</span>
                            </button>
                            <button onClick={()=>setDelOffer(true)} type="button" className="w-full text-sm bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition flex items-center justify-center gap-2 cursor-pointer">
                                <FontAwesomeIcon icon={faTrash} />
                                <span>Delete Offer</span>
                            </button>
                        </div>

                    </div>

                </div>


            </div>
        </div>
    )
}