import { useState } from "react";

export default function CitySearch({ onSearch }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city.trim()) {
      setError("Please enter a city");
      return;
    }

    setError("");
    onSearch(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="search-box">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city..."
      />
      <button>Search</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}