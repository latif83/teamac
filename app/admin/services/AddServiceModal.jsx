"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export function AddServiceModal({ setAddService, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    status: "Active",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Service Added:", formData);
    onClose(); // close modal after submit (for now)
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4 pt-12">
      <div className="bg-white rounded-t-lg shadow-lg w-full h-full max-w-2xl relative p-6">

        <div className="flex justify-between items-center">


          <h2 className="font-bold">
            New Service
          </h2>

          {/* Close Button */}
          <button
            type="button"
            title="Close Button"
            onClick={() => setAddService(false)}
            className="text-gray-700 py-1.5 px-2 rounded-full cursor-pointer hover:bg-red-400 hover:text-gray-50"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>


        <form onSubmit={handleSubmit} className="space-y-6 mt-6">


          {/* Name */}
          <div>
            <label className="block text-sm text-gray-700 mb-1 font-semibold">
              Service Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none"
              placeholder="e.g., Study Abroad, Visa Assistance"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm text-gray-700 mb-1 font-semibold">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="3"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none resize-none"
              placeholder="Leave a description for this sevice..."
            ></textarea>
          </div>

          <div>

            <p className="block text-sm text-gray-700 mb-1 font-semibold">Select an image thumbnail for this service</p>

            <label className="w-full h-[150px] border rounded hover:bg-[#f2f2f2] cursor-pointer flex flex-col items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>

              <span className="text-sm">Select Image</span>
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">

            <button
              type="submit"
              className="px-6 py-4 w-full cursor-pointer text-sm bg-[#00B4D8] text-white rounded-md hover:bg-[#0092b3] transition flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
              </svg>

              <span> Submit </span>
            </button>
          </div>


        </form>
      </div>
    </div>
  );
};