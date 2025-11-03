import { faEdit, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { EditServiceModal } from "./EditServiceModal"
import { useState } from "react"
import { DeleteService } from "./DeleteServiceModal"

export const ViewServiceModal = ({ setViewService, selectedService, setFetchService }) => {

    const [editService, setEditService] = useState(false)
    const [delService, setDelService] = useState(false)

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4 pt-12">

            {editService && <EditServiceModal setEditService={setEditService} serviceData={selectedService} setFetchService={setFetchService} setViewService={setViewService} />}

            {delService && <DeleteService setDeleteService={setDelService} serviceId={selectedService.id} setFetchService={setFetchService} setViewService={setViewService} />}

            <div className="bg-white rounded-t-lg overflow-y-auto shadow-lg w-full h-full max-w-3xl relative p-6">

                <div className="flex justify-between items-center">


                    <h2 className="font-bold">
                        Manage Service
                    </h2>

                    {/* Close Button */}
                    <button
                        type="button"
                        title="Close Button"
                        onClick={() => setViewService(false)}
                        className="text-gray-700 py-1.5 px-2 rounded-full cursor-pointer hover:bg-red-400 hover:text-gray-50"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>

                {/* Service Details Content */}
                <div className="mt-4">

                    <div className="w-full bg-black rounded-md h-[200px]">
                        <img src={selectedService?.image?.url} className="w-full h-full object-cover object-center" />
                    </div>

                    <div className="mt-4">
                        <h3 className="font-semibold mb-2">
                            {selectedService.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                            {selectedService.description}
                        </p>

                    </div>

                    <div className="flex gap-4 mt-6">

                        <button onClick={() => setEditService(true)} type="button" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition text-sm flex items-center justify-center gap-2 cursor-pointer">
                            <FontAwesomeIcon icon={faEdit} />
                            <span>Edit Service</span>
                        </button>
                        <button onClick={() => setDelService(true)} type="button" className="w-full text-sm bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition flex items-center justify-center gap-2 cursor-pointer">
                            <FontAwesomeIcon icon={faTrash} />
                            <span>Delete Service</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>


    )
}