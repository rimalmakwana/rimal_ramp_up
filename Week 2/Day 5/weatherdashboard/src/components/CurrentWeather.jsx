import { getWeatherLabel } from "../utils/weatherCodeMap";

export default function CurrentWeather({ data, city }) {
  if (!data) return null;

  return (
    <div className="card">
      <h2>{city}</h2>
      <p>🌡 Temp: {data.temperature}°C</p>
      <p>💨 Wind: {data.windspeed} km/h</p>
      <p>{getWeatherLabel(data.weathercode)}</p>
    </div>
  );
}