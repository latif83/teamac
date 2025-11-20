"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export const UpcomingAppointments = () => {
  const [upcoming, setUpcoming] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUpcoming = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/consultation/upcoming");
      const data = await res.json();

      setUpcoming(data.upcoming || []);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUpcoming();
  }, []);

  return (
    <div className="lg:col-span-2 bg-white md:p-6 p-3 rounded-xl shadow-xl">
      <h2 className="md:text-2xl font-bold text-textDark mb-4 border-b pb-2">
        Upcoming Consultations
      </h2>

      {/* Loading Skeleton */}
      {loading && (
        <ul className="space-y-3 text-sm animate-pulse">
          {[1, 2].map((i) => (
            <li
              key={i}
              className="p-3 bg-gray-100 rounded-lg border-l-4 border-gray-300 h-12"
            ></li>
          ))}
        </ul>
      )}

      {/* If no upcoming */}
      {!loading && upcoming.length === 0 && (
        <div className="text-center text-sm text-gray-500 py-4">
          No upcoming consultations
        </div>
      )}

      {/* Actual Data */}
      {!loading && upcoming.length > 0 && (
        <ul className="space-y-3 text-sm">
          {upcoming.map((appt) => (
            <li
              key={appt.id}
              className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border-l-4 border-primary"
            >
              <span className="font-semibold">{appt.name}</span>

              <span className="text-gray-600">
                {new Date(appt.date).toDateString()}
              </span>

              <button className="text-primary hover:underline">View</button>
            </li>
          ))}
        </ul>
      )}

      <div className="text-center mt-6">
        <Link
          href="/admin/appointment"
          className="text-sm font-semibold text-primary hover:text-accent transition"
        >
          View All Appointments →
        </Link>
      </div>
    </div>
  );
};
