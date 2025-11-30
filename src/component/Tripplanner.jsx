import React, { useState } from "react";
import CurrencyConverter from "./CurrencyConverter";
import Mytrips from "./Mytrips";

export default function TravelPlanner() {
  const citiesList = [
    { id: 1, name: "Cairo" },
    { id: 2, name: "New Valley" },
    { id: 3, name: "Alexandria" },
    { id: 4, name: "Luxor" },
    { id: 5, name: "Aswan" },
    { id: 6, name: "Fayoum" },
    { id: 7, name: "South Sinai" },
    { id: 8, name: "Red Sea" },
    { id: 9, name: "Matrouh" },
  ];

  const [cities, setCities] = useState([]);
  const [showTrips, setShowTrips] = useState(false);
  const [selectedCities, setSelectedCities] = useState([]);
  const [budget, setBudget] = useState("");

  // Checkbox toggle
  const handleCityToggle = (id) => {
    setCities((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  // When pressing GO
  const handleGoClick = (e) => {
    e.preventDefault();

    if (!budget || cities.length === 0) {
      alert("Please select both a budget and at least one city.");
      return;
    }

    setSelectedCities(cities); // send cities to MyTrips
    setShowTrips(true);
  };

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#f0f0f0",
        minHeight: "40vh",
      }}
    >
      {/* Card Form */}
      <div
        className="planner-card card-shadow mx-auto mt-4 p-4"
        style={{
          backgroundColor: "#fffef6",
          border: "2px solid #dca878",
          borderRadius: "10px",
          boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
          maxWidth: "600px",
        }}
      >
        <h2
          className="text-center mb-4"
          style={{
            textAlign: "center",
            color: "#b30000",
            fontWeight: "700",
            marginBottom: "25px",
          }}
        >
          Explore Your Egyptian Adventure
        </h2>

        <form onSubmit={handleGoClick}>
          <div className="row mb-3">
            <div className="col-md-6 mb-3 mb-md-0">
              <label htmlFor="budget" className="form-label fw-bold">
                Set your budget EGP£
              </label>
              <input
                type="number"
                id="budget"
                className="form-select"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                style={{
                  border: "2px solid #dca878",
                  borderRadius: "8px",
                  backgroundColor: "#fffef6",
                }}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-bold">Choose Cities</label>

              <div className="dropdown">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    backgroundColor: "#fffef6",
                    border: "2px solid #dca878",
                    color: "#7b0000",
                    fontWeight: "600",
                    borderRadius: "8px",
                  }}
                >
                  Select Cities
                </button>

                <ul
                  className="dropdown-menu p-3"
                  style={{
                    backgroundColor: "#64b0ab",
                    border: "2px solid #dca878",
                    borderRadius: "8px",
                    minWidth: "220px",
                  }}
                >
                  {citiesList.map((city) => (
                    <li key={city.id} style={{ color: "#ffffff" }}>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`dropdown-${city.id}`}
                          value={city.id}
                          checked={cities.includes(city.id)}
                          onChange={() => handleCityToggle(city.id)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`dropdown-${city.id}`}
                        >
                          {city.name}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="btn mt-3 w-100"
            id="sbmtbtn"
            style={{
              backgroundColor: "#64b0ab",
              color: "#fff",
              fontWeight: "600",
              borderRadius: "8px",
              border: "10px solid #dca878",
            }}
          >
            Go
          </button>
        </form>
      </div>

      <CurrencyConverter />

      {showTrips && (
        <div style={{ marginTop: "20px" }}>
          <Mytrips selectedCities={selectedCities} budget={budget} />
        </div>
      )}
    </div>
  );
}
