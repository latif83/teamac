import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image";
import { useMemo, useState } from "react"
import Select from "react-select";
import countryList from "react-select-country-list";
import { toast } from "react-toastify";

export const NewCountryModal = ({ setAddCountry, setFetchCountries }) => {



    const options = useMemo(() => countryList().getData(), []);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [countries, setCountries] = useState([]);

    const handleSelect = (val) => {
        setSelectedCountry(val);
        handleAddCountry(val)
    };

    const handleAddCountry = (selectedCountry) => {
        if (!selectedCountry) return;

        // Prevent duplicates
        const exists = countries.some(
            (c) => c.value.toLowerCase() === selectedCountry.value.toLowerCase()
        );

        if (exists) {
            toast.error("This country has already been added.");
            return;
        }

        const flagUrl = `https://flagcdn.com/w40/${selectedCountry.value.toLowerCase()}.png`;

        setCountries((prev) => [
            ...prev,
            { ...selectedCountry, flag: flagUrl, status: "Active" },
        ]);

        setSelectedCountry(null);
    };

    const removeCountry = (country) => {
        setCountries(countries.filter(c => c.value !== country.value));
    }

    const [loading, setLoading] = useState(false)

    const submitForm = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {

            const res = await fetch(`/api/admin/countries`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(countries)
            })

            const data = await res.json()

            if (!res.ok) {
                toast.success(data.msg || 'Error adding country')
            }

            toast.success(data.msg || 'Country added successfully')
            setFetchCountries(true)
            setAddCountry(false)

        }
        catch (e) {
            console.log(e)
            toast.error("An unexpected error happened! Please try again later.")
        } finally {
            setLoading(false)
        }
    }

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


                <form onSubmit={submitForm} className="space-y-6 mt-6">

                    {/* Country Selector */}
                    <div className="">
                        <label className="block text-sm text-gray-700 mb-1 font-semibold">
                            Country Name
                        </label>
                        <Select
                            options={options}
                            value={selectedCountry}
                            onChange={handleSelect}
                            placeholder="Select a country"
                            className="text-sm"
                        />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {countries.length > 0 ? countries.map((country, index) => (
                            <div key={index} className="flex gap-2 items-center text-xs bg-blue-100 px-4 py-3 font-semibold rounded-xl">
                                <img src={country.flag} alt="Country Flag Image Icon" className="w-[15px] h-[15px]" />
                                <span>{country.label}</span>
                                <button onClick={() => removeCountry(country)} type="button" title="Remove Country" className="text-red-600 hover:text-red-300 cursor-pointer">
                                    <FontAwesomeIcon icon={faTimes} className="text-xs" />
                                </button>
                            </div>
                        )) : <p className="text-sm text-gray-500"> No Country Selected. </p>}
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