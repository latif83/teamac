"use client";
import { useState } from "react";

const ServiceCountryFilter = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    service: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters); // send selected filters to parent
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white shadow-lg rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-gray-100"
    >
      {/* Service Select */}
      <div className="flex flex-col w-full sm:w-1/3">
        <label className="text-sm text-gray-600 font-semibold">Service</label>
        <select
          name="service"
          value={filters.service}
          onChange={handleChange}
          className="mt-1 p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#00B4D8] outline-none"
        >
          <option value="">Select Service</option>
          <option value="study">Study Abroad</option>
          <option value="travel">Travel Packages</option>
          <option value="accommodation">Accommodation</option>
          <option value="consultation">Consultation</option>
        </select>
      </div>

      {/* Country Select */}
      <div className="flex flex-col w-full sm:w-1/3">
        <label className="text-sm text-gray-600 font-semibold">Country</label>
        <select
          name="country"
          value={filters.country}
          onChange={handleChange}
          className="mt-1 p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#00B4D8] outline-none"
        >
          <option value="">Select Country</option>
          <option value="canada">Canada</option>
          <option value="uk">United Kingdom</option>
          <option value="usa">United States</option>
          <option value="turkey">Turkey</option>
          <option value="australia">Australia</option>
          <option value="germany">Germany</option>
        </select>
      </div>

      {/* Search Button */}
      <div className="w-full sm:w-auto flex justify-end">
        <button
          type="submit"
          className="bg-[#00B4D8] text-white px-6 py-2 rounded-md hover:bg-[#0092b3] transition-all font-semibold"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default ServiceCountryFilter;
