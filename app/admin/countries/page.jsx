"use client"
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { NewCountryModal } from "./NewCountryModal"
import { toast } from "react-toastify"
import { IndexKind } from "typescript"
import { DeleteCountry } from "./DeleteCountryModal"

export default function CountriesPage() {

    const [addCountry, setAddCountry] = useState(false)

    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false)

    const getCountries = async () => {
        try {
            setLoading(true)
            const res = await fetch(`/api/admin/countries`)
            const data = await res.json()
            if (!res.ok) {
                toast.error(data.message || 'Failed to fetch countries')
            }

            setCountries(data.countries || [])
        }
        catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    const [fetchCountries, setFetchCountries] = useState(true)

    useEffect(() => {
        fetchCountries && getCountries()
        setFetchCountries(false)
    }, [fetchCountries])

    const [deleteCountry, setDeleteCountry] = useState(false)
    const [countryId, setCountryId] = useState(null)

    return (
        <section className="p-3 md:p-6">

            {addCountry && <NewCountryModal setAddCountry={setAddCountry} setFetchCountries={setFetchCountries} />}
            {deleteCountry && <DeleteCountry setDeleteCountry={setDeleteCountry} countryId={countryId} setFetchCountries={setFetchCountries} />}

            <div className="flex justify-between items-center mb-6">
                <h1 className="sm:text-xl font-bold text-[#0d4785]">Manage Countries</h1>
                <button onClick={() => setAddCountry(true)} type="button" className="border cursor-pointer hover:text-[#fff] px-4 py-3 rounded-xl hover:bg-[#000] transition text-sm flex items-center gap-2">
                    <FontAwesomeIcon icon={faPlusCircle} /> New Country
                </button>
            </div>



            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Flag
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Country
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            countries.length > 0 ? countries.map((country, index) => (
                                <tr key={index} className="bg-white border-b border-gray-200 hover:bg-gray-50">

                                    <td className="px-6 py-4">
                                        <img src={country.flag} alt="Country Flag" className="w-[30px] h-[20px] object-cover rounded-md" />
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {country.name}
                                    </th>
                                    <td className="px-6 py-4 text-right">
                                        <button onClick={() => { setCountryId(country.id); setDeleteCountry(true); }} className="font-medium text-red-600 hover:underline cursor-pointer">Delete</button>
                                    </td>
                                </tr>
                            )) : <tr>
                                <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                                    {loading ? 'Loading countries...' : 'No countries found.'}
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>


        </section>
    )
}