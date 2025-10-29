"use client"
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { NewCountryModal } from "./NewCountryModal"

export default function CountriesPage() {

    const [addCountry, setAddCountry] = useState(false)

    return (
        <section className="p-3 md:p-6">

            {addCountry && <NewCountryModal setAddCountry={setAddCountry} />}

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
                        <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">

                            <td className="px-6 py-4">
                                Flag
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Albania
                            </th>
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">

                            <td className="px-6 py-4">
                                Flag
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Germany
                            </th>
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr className="bg-white hover:bg-gray-50">
                            <td className="px-6 py-4">
                                Flag
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Luxemborg
                            </th>
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </section>
    )
}