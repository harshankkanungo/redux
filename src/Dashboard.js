import React, { useState } from 'react';
import WeatherWidget from './WeatherWidget';
import SalesWidget from './SalesWidget';
import NewsWidget from './NewsWidget';


function Dashboard() {
  const [weatherData, setWeatherData] = useState({
    temperature: 25,
    description: "Sunny",
    location: "New York",
    humidity: 60,
    windSpeed: 10,
  });

  const [salesData, setSalesData] = useState([
    { month: "April", amount: 2500 },
    { month: "May", amount: 2800 },
    { month: "June", amount: 3200 },
  ]);

  const [newsData, setNewsData] = useState([
    { 
      headline: "Breaking News: New Technology Released",
      source: "TechNews",
      date: "2024-05-20",
    },
    {
      headline: "Economy Shows Signs of Recovery",
      source: "FinancialTimes",
      date: "2024-05-20",
    },
    { 
      headline: "Local Team Wins Championship",
      source: "SportsDaily",
      date: "2024-05-19",
    },
    { 
      headline: "Health Tips for the Summer",
      source: "HealthMagazine",
      date: "2024-05-18",
    },
  ]);

  return (
    <div className="dashboard-container">
      <header>
        <h1>My Dashboard</h1>
      </header>
      <main>
        <div className="widgets-container">
          <WeatherWidget data={weatherData} />
          <SalesWidget data={salesData} />
          <NewsWidget data={newsData} />
        </div>
      </main>
      <footer>
        <p>© 2024 My Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Dashboard;
