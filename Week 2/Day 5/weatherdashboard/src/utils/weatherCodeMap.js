export const getWeatherLabel = (code) => {
  if (code === 0) return "Clear sky ☀️";
  if (code <= 3) return "Cloudy ☁️";
  if (code === 45 || code === 48) return "Fog 🌫️";
  if (code >= 51 && code <= 67) return "Rain 🌧️";
  if (code >= 71 && code <= 77) return "Snow ❄️";
  if (code >= 80 && code <= 82) return "Showers 🌦️";
  if (code === 95) return "Thunderstorm ⛈️";
  return "Unknown";
};