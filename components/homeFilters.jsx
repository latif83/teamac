"use client";

import { useEffect, useState } from "react";
import Select from "react-select";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export const HomeFilters = () => {
  const [services, setServices] = useState([]);
  const [countries, setCountries] = useState([]);

  const router = useRouter()

  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    service: null,
    country: null,
  });

  useEffect(() => {
    async function fetchFilters() {
      try {
        const res = await fetch("/api/filters");
        const data = await res.json();

        if (data.success) {
          setServices(
            data.data.services.map((s) => ({
              value: s.id,
              label: s.name,
            }))
          );

          setCountries(
            data.data.countries.map((c) => ({
              value: c.id,
              label: c.name,
            }))
          );
        }
      } catch (err) {
        console.error("Error fetching filters:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchFilters();
  }, []);

  const handleSearch = () => {
    console.log("Final filters:", filters);
    const queryParams = new URLSearchParams();
    if (filters.service) queryParams.append("service", filters.service);
    if (filters.country) queryParams.append("country", filters.country);
    router.push(`/offers?${queryParams.toString()}`);
  };

  return (
    <div className="bg-[#f2f2f2]/70 border border-[#FF6F61] md:w-2/3 w-full rounded-md py-4 md:px-10 px-3">
      <h3 className="font-bold">Find Available Offers.</h3>

      <div className="mt-3 gap-4 grid sm:grid-cols-2 text-sm">

        {/* Service Filter */}
        <Select
          isClearable
          isLoading={loading}
          options={services}
          placeholder={loading ? "Loading services..." : "All Services"}
          onChange={(selected) =>
            setFilters((prev) => ({ ...prev, service: selected?.value || "" }))
          }
          className="text-sm"
          styles={{
            control: (base) => ({
              ...base,
              borderColor: "#ccc",
              padding: "2px",
              boxShadow: "none",
              backgroundColor : 'transparent',
              "&:hover": { borderColor: "#00B4D8" },
            }),
          }}
        />

        {/* Country Filter */}
        <Select
          isClearable
          isLoading={loading}
          options={countries}
          placeholder={loading ? "Loading countries..." : "All Countries"}
          onChange={(selected) =>
            setFilters((prev) => ({ ...prev, country: selected?.value || "" }))
          }
          className="text-sm"
          styles={{
            control: (base) => ({
              ...base,
              borderColor: "#ccc",
              padding: "2px",
              boxShadow: "none",
              backgroundColor : 'transparent',
              "&:hover": { borderColor: "#00B4D8" },
            }),
          }}
        />

        

      </div>

      <div className="flex justify-end mt-3">
          <button
            type="button"
            onClick={handleSearch}
            className="bg-[#FF6F61] text-white cursor-pointer hover:opacity-80 p-3 px-6 text-sm rounded-md flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faSearch} />
            <span>Find Offer</span>
          </button>
        </div>
    </div>
  );
};
