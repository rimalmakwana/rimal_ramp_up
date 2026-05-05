import { getWeatherLabel } from "../utils/weatherCodeMap";

export default function ForecastRow({ day, max, min, code }) {
  return (
    <div className="forecast-row">
      <p>{day}</p>
      <p>{min}°C / {max}°C</p>
      <p>{getWeatherLabel(code)}</p>
    </div>
  );
}