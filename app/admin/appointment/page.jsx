"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AppointmentDetails } from "./Details";

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAppointments = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/consultation");
      const data = await res.json();

      setAppointments(data?.consultations || []);
    } catch (err) {
      console.error("Error fetching appointments", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  // Determine Upcoming / Today / Past
  const checkStatus = (date) => {
    const now = new Date();
    const appointmentDate = new Date(date);

    const nowDateOnly = new Date(now.toDateString());
    const appointmentDateOnly = new Date(appointmentDate.toDateString());

    if (appointmentDateOnly.getTime() === nowDateOnly.getTime()) {
      return { text: "Today", color: "text-blue-700" };
    }
    if (appointmentDate > now) {
      return { text: "Upcoming", color: "text-green-700" };
    }
    return { text: "Past", color: "text-red-700" };
  };

  const [viewAppointment, setViewAppointment] = useState(false)
  const [appointment, setAppointment] = useState(null)


  return (
    <section className="p-3 md:p-6">
      {viewAppointment && <AppointmentDetails setViewAppointment={setViewAppointment} appointment={appointment} />}
      <div className="flex justify-between items-center mb-6">
        <h1 className="sm:text-xl font-bold text-[#0d4785]">Consultations</h1>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Contact</th>
              <th scope="col" className="px-6 py-3">Date</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">View</span>
              </th>
            </tr>
          </thead>

          <tbody>
            {loading
              ? // SKELETON LOADING
              [1, 2, 3, 4].map((num) => (
                <tr
                  key={num}
                  className="bg-white border-b border-gray-200 animate-pulse"
                >
                  <td className="px-6 py-4">
                    <span className="w-full h-6 rounded-lg bg-gray-200 block"></span>
                  </td>

                  <td className="px-6 py-4">
                    <span className="w-full h-6 rounded-lg bg-gray-200 block"></span>
                  </td>

                  <td className="px-6 py-4">
                    <span className="w-full h-6 rounded-lg bg-gray-200 block"></span>
                  </td>

                  <td className="px-6 py-4">
                    <span className="w-16 h-6 rounded-lg bg-gray-200 block"></span>
                  </td>

                  <td className="px-6 py-4 text-right">
                    <span className="w-14 h-6 bg-blue-300 block rounded-lg"></span>
                  </td>
                </tr>
              ))
              : appointments.length > 0
                ? appointments.map((item) => {
                  const apptStatus = checkStatus(item.date);

                  return (
                    <tr
                      key={item.id}
                      className="bg-white border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {item.name}
                      </td>

                      <td className="px-6 py-4">
                        {item.email} • {item.countryCode} {item.phone}
                      </td>

                      <td className="px-6 py-4">
                        {new Date(item.date).toDateString()}
                        <br />
                        <span className="text-gray-600 text-xs">({item.mode})</span>
                      </td>

                      <td className={`px-6 py-4 font-semibold ${apptStatus.color}`}>
                        {apptStatus.text}
                      </td>

                      <td className="px-6 py-4 text-right">
                        <button
                          type="button"
                          onClick={() => {
                            setAppointment(item)
                            setViewAppointment(true)
                          }}
                          className="font-medium text-blue-600 hover:underline cursor-pointer"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  );
                })
                : // EMPTY STATE
                (
                  <tr>
                    <td className="px-6 py-6 text-center text-gray-600" colSpan={5}>
                      No appointments found.
                    </td>
                  </tr>
                )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
