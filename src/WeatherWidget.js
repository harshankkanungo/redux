import React from 'react';

function WeatherWidget({ data }) {
  return (
    <div className="widget weather-widget">
      <h2>Weather</h2>
      <p>Location: {data.location}</p>
      <p>Temperature: {data.temperature}°C</p>
      <p>Description: {data.description}</p>
      <p>Humidity: {data.humidity}%</p>
      <p>Wind Speed: {data.windSpeed} km/h</p>
    </div>
  );
}

export default WeatherWidget;
