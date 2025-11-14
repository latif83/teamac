"use client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ApplicantDetails } from "./Details";

export default function Applicants() {
  const [loading, setLoading] = useState();
  const [applicants, setApplicants] = useState([]);

  const getApplicants = async () => {
    try {
      setLoading(true);

      const res = await fetch(`/api/applications`);
      const data = await res.json();

      if (!res.ok) {
        return toast.error(data.msg);
      }

      setApplicants(data.applicants);
    } catch (e) {
      console.log(e);
      toast.error("An unexpected error happened fetching applicants!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getApplicants();
  }, []);

  const [viewApplicant, setViewApplicant] = useState(false);
  const [applicant, setApplicant] = useState(null);

  return (
    <section className="p-3 md:p-6">
      {viewApplicant && (
        <ApplicantDetails
          applicant={applicant}
          setViewApplicant={setViewApplicant}
        />
      )}

      <div className="flex justify-between items-center mb-6">
        <h1 className="sm:text-xl font-bold text-[#0d4785]">Applicants</h1>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Offer
              </th>
              <th scope="col" className="px-6 py-3">
                Status
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

                    <td className="px-6 py-4 text-right">
                      <button
                        type="button"
                        className="font-medium bg-blue-600 w-full block h-6 rounded-lg hover:underline cursor-pointer"
                      ></button>
                    </td>
                  </tr>
                ))
              : applicants.length > 0 ?
                applicants.map((applicant, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b border-gray-200 hover:bg-gray-50"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {applicant.fullName}
                    </th>

                    <td className="px-6 py-4">{applicant.offer?.title}</td>

                    <td
                      className={`px-6 py-4 ${
                        applicant.status == "Pending"
                          ? "text-orange-700"
                          : "text-green-700"
                      }`}
                    >
                      {applicant.status}
                    </td>

                    <td className="px-6 py-4 text-right">
                      <button
                        type="button"
                        onClick={() => {
                          setApplicant(applicant);
                          setViewApplicant(true);
                        }}
                        className="font-medium text-blue-600 hover:underline cursor-pointer"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                )) : <tr>
                                <td className="px-6 py-4 text-center" colSpan={4}>No data found</td></tr>}
          </tbody>
        </table>
      </div>
    </section>
  );
}
