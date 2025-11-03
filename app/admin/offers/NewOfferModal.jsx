import { uploadOfferThumbnail } from "@/actions/actions"
import { faExpand, faRepeat, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { toast } from "react-toastify"

export const NewOfferModal = ({ setAddOffer, setFetchData }) => {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        serviceId: "",
        countryId: "",
        city: "",
        priceLabel: "",
        priceDescription: "",
        validity: "",
        thumbnail: "",
        requirements: []
    })

    const [servicesLoading, setServicesLoading] = useState(false)
    const [services, setServices] = useState([])
    const [countriesLoading, setCountriesLoading] = useState(false)
    const [countries, setCountries] = useState([])

    const getServiceData = async () => {
        try {
            setServicesLoading(true)
            const res = await fetch('/api/admin/services')
            const data = await res.json()
            if (!res.ok) {
                return toast.error(data.msg || 'Failed to fetch services data')
            }
            setServices(data.services)
        }
        catch (e) {
            console.log(e)
            toast.error('An unexpected error occurred while fetching services data.')
        }
        finally {
            setServicesLoading(false)
        }
    }

    const getCountryData = async () => {
        try {
            setCountriesLoading(true)
            const res = await fetch('/api/admin/countries')
            const data = await res.json()
            if (!res.ok) {
                return toast.error(data.msg || 'Failed to fetch countries data')
            }
            setCountries(data.countries)
        }
        catch (e) {
            console.log(e)
            toast.error('An unexpected error occurred while fetching countries data.')
        }
        finally {
            setCountriesLoading(false)
        }
    }

    useEffect(() => {
        getServiceData()
        getCountryData()
    }, [])

    const handleImageSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {

                // setConfirmAnalysisBeforeImage(true)

                setFormData((prevData) => ({ ...prevData, thumbnail: reader.result }));

                // console.log(reader.result)
                // setCropping(true);
            };
            reader.readAsDataURL(file);
        }
    };

    const [loading, setLoading] = useState(false)

    const reqRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)

            if (!formData.thumbnail) {
                return toast.error("Please select an image thumbnail for this service!")
            }

            const imageUploaded = await uploadOfferThumbnail(formData.thumbnail)

            const fData = { ...formData, thumbnail: imageUploaded }

            const res = await fetch('/api/admin/offers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fData)
            })

            const data = await res.json()

            if (!res.ok) {
                return toast.error(data.msg || 'Failed to add listing!')
            }

            toast.success(data.msg || 'Offer added successfully')
            setFetchData(true)
            setAddOffer(false)

        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center sm:px-4 px-3 pt-12">
            <div className="bg-white rounded-t-lg overflow-y-auto shadow-lg w-full h-full max-w-2xl relative md:p-6 p-3">

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


                <form onSubmit={handleSubmit} className="space-y-4 mt-5">


                    {/* Title */}
                    <div>
                        <label className="block text-sm text-gray-700 mb-1 font-semibold">
                            Offer
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={(e) => setFormData((prevData) => ({ ...prevData, title: e.target.value }))}
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
                            value={formData.description}
                            onChange={(e) => setFormData((prevData) => ({ ...prevData, description: e.target.value }))}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none resize-none"
                            placeholder="A detailed summary of what this offer is about..."
                        ></textarea>
                    </div>

                    {/* Category / Service */}
                    <div>
                        <label className="block text-sm text-gray-700 mb-1 font-semibold">
                            Category / Service
                        </label>
                        <select value={formData.serviceId}
                            onChange={(e) => setFormData((prevData) => ({ ...prevData, serviceId: e.target.value }))} className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none">
                            <option>Select Service</option>
                            {servicesLoading ? <option>Loading Services...</option> : services.length > 0 ? services.map((service) => (
                                <option key={service.id} value={service.id}>{service.name}</option>
                            )) : <option>No services found...</option>}
                        </select>
                    </div>

                    {/* Country */}
                    <div>
                        <label className="block text-sm text-gray-700 mb-1 font-semibold">
                            Country
                        </label>
                        <select value={formData.countryId}
                            onChange={(e) => setFormData((prevData) => ({ ...prevData, countryId: e.target.value }))} className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none">
                            <option>Select Country</option>
                            {countriesLoading ? <option>Loading Countries...</option> : countries.length > 0 ? countries.map((country) => (
                                <option key={country.id} value={country.id}>{country.name}</option>
                            )) : <option>No countries found...</option>}
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
                            value={formData.city}
                            onChange={(e) => setFormData((prevData) => ({ ...prevData, city: e.target.value }))}
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none"
                            placeholder="e.g., San Jose, Toronto, Melbourne, London"
                        />
                    </div>

                    {/* Requirements */}

                    <div>
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">Requirements:</label>
                        <div className="flex flex-col gap-1 text-sm text-gray-400 mb-1">
                            {formData.requirements.length > 0 && formData.requirements.map((req, index) => (
                                <span key={index}>{`${index + 1}. ${req}`}</span>
                            ))}
                        </div>
                        <input ref={reqRef} type="text" id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Requirements for this offer..." />
                        <div className="flex justify-between items-center mt-1">

                            <button onClick={() => {

                                const newRequirement = reqRef.current.value.trim()

                                if (newRequirement) {
                                    setFormData((prevData) => ({ ...prevData, requirements: [...prevData.requirements, newRequirement] }))
                                }

                                reqRef.current.value = ""
                            }} type="button" className="text-blue-500 underline text-sm">
                                Add
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm text-gray-700 mb-1 font-semibold">
                            Price / Label
                        </label>
                        <input
                            type="text"
                            name="price"
                            required
                            value={formData.priceLabel}
                            onChange={(e) => setFormData((prevData) => ({ ...prevData, priceLabel: e.target.value }))}
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
                            value={formData.priceDescription}
                            onChange={(e) => setFormData((prevData) => ({ ...prevData, priceDescription: e.target.value }))}
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
                            value={formData.validity}
                            onChange={(e) => setFormData((prevData) => ({ ...prevData, validity: e.target.value }))}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none"
                        />
                    </div>



                    <div>

                        <p className="block text-sm text-gray-700 mb-1 font-semibold">Select an image thumbnail for this offer</p>

                        {formData.thumbnail ? (
                            <div className="mt-2 cursor-pointer block w-full h-[150px] rounded overflow-hidden hover:border border-red-400 transition-all duration-500 relative">
                                <Image width={100} height={100} src={formData.thumbnail} alt="Selected" className="w-full h-[150px] object-cover rounded" />
                                <div className="absolute bottom-0 left-0 w-full flex justify-end gap-2 p-2 bg-black/30">
                                    <label htmlFor="thumbnail" className="px-2 py-1 rounded bg-blue-500 hover:bg-blue-700 transition-all duration-500 text-sm cursor-pointer">
                                        <FontAwesomeIcon icon={faRepeat} className="text-white" />
                                    </label>
                                    <button type="button" className="px-2 py-1 rounded bg-green-500 hover:bg-green-700 transition-all duration-500 text-sm cursor-pointer">
                                        <FontAwesomeIcon icon={faExpand} className="text-white" />
                                    </button>
                                    <button onClick={() => setFormData((prevData) => ({ ...prevData, image: "" }))} type="button" className="px-2 py-1 rounded bg-red-500 hover:bg-red-700 transition-all duration-500 text-sm cursor-pointer">
                                        <FontAwesomeIcon icon={faTrash} className="text-white" />
                                    </button>
                                </div>
                            </div>
                        ) : <label htmlFor="thumbnail" className="w-full h-[150px] border rounded hover:bg-[#f2f2f2] cursor-pointer flex flex-col items-center justify-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <span className="text-sm">Select Image</span>
                        </label>}

                        <input type="file" hidden id="thumbnail" accept="image/*" onChange={handleImageSelect} />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 pt-4">

                        <button
                            disabled={loading}
                            type="submit"
                            className="px-6 disabled:opacity-30 py-4 w-full cursor-pointer text-sm bg-[#00B4D8] text-white rounded-md hover:bg-[#0092b3] transition flex items-center justify-center gap-2"
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
                                    Processing…
                                </>
                            ) : (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                                    </svg>

                                    <span>
                                        Submit
                                    </span></>
                            )}
                        </button>
                    </div>


                </form>
            </div>
        </div>
    )

}