import { useEffect, useState } from "react";
import CitySearch from "./components/CitySearch";
import CurrentWeather from "./components/CurrentWeather";
import ForecastRow from "./components/ForecastRow";
import RecentCities from "./components/RecentCities";
import useFetch from "./hooks/useFetch";

export default function App() {
  const { request, loading, error } = useFetch();

  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [cityName, setCityName] = useState("");
  const [recent, setRecent] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("recentCities")) || [];
    setRecent(saved);
  }, []);

  const handleSearch = async (city) => {
  setCityName(city);

  const geo = await request(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
  );

  // if city not found
  if (!geo || !geo.results || geo.results.length === 0) {
    alert("City not found ❌");
    return;
  }

  const { latitude, longitude } = geo.results[0];

  const data = await request(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`
  );

  if (!data) return;

  setWeather(data.current_weather);
  setForecast(data.daily);
};

  return (
    <div className="container">
      <h1>Weather Dashboard</h1>

      <CitySearch onSearch={handleSearch} />
      <RecentCities cities={recent} onSelect={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <CurrentWeather data={weather} city={cityName} />

      {forecast && (
        <div className="forecast">
          {forecast.time.map((day, i) => (
            <ForecastRow
              key={i}
              day={day}
              max={forecast.temperature_2m_max[i]}
              min={forecast.temperature_2m_min[i]}
              code={forecast.weathercode[i]}
            />
          ))}
        </div>
      )}
    </div>
  );
}