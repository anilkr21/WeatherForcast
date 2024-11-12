import { Box, IconButton, Typography } from '@mui/material';
import React, { useState, useEffect, useContext, createContext } from 'react';
import 'weather-icons/css/weather-icons.css';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [locationName, setLocationName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);



  // useEffect(() => {
  //   // Get user location
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     const { latitude, longitude } = position.coords;

  //     fetchWeather(latitude, longitude);
  //   });
  // }, []);

  const fetchWeather = async (latitude, longitude) => {
    try {                           
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,wind_speed_10m,wind_speed_80m,wind_speed_120m,wind_speed_180m,wind_direction_10m,wind_direction_80m,wind_direction_120m,wind_direction_180m,temperature_80m,temperature_120m,temperature_180m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,sunshine_duration,precipitation_sum,rain_sum,precipitation_hours,precipitation_probability_max,wind_gusts_10m_max&timezone=auto`);
      const data = await response.json();
      console.log(data);

      const currentTime = new Date();
      const currentHour = currentTime.getHours();

      const hourlyData = data.hourly.temperature_2m;
      const shiftedData = [
        ...hourlyData.slice(currentHour),  // Hours from current hour onwards
        ...hourlyData.slice(0, currentHour),  // Hours before current hour
      ];

      setWeatherData({
        current: data.current,
        daily: data.daily,
        dailyunits: data.daily_units,
        hourly: shiftedData,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

    const fetchCoordinates = async (location) => {
      try {
        const response = await fetch(`https://geocode.search.hereapi.com/v1/geocode?q=${location}&apiKey=DPE8XvZOHAGY33TShe-toXOTmtdsypzelQWQuTVKu9s`);
        const data = await response.json();
    
        if (data.items && data.items.length > 0) {
          const { lat, lng } = data.items[0].position;
          
          setLocationName(location);
          fetchWeather(lat, lng);
        } else {
          console.error("Location not found");
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    };
    
 
    const addRecentSearch = (location, weatherData) => {
      setRecentSearches((prev) => {
        const newSearch = { location, weatherData };
        const updatedSearches = [newSearch, ...prev];
        return updatedSearches.slice(0, 3); // Keep only the last three searches
      });
    };

  const getIconClass = (code) => {
    switch (code) {
      case 0: return "wi wi-day-sunny"; // Clear sky
      case 1: return "wi wi-day-cloudy"; // Mainly clear
      case 2: return "wi wi-cloudy"; // Partly cloudy
      case 3: return "wi wi-cloudy"; // Overcast
      case 45:
      case 48: return "wi wi-fog"; // Fog
      case 51:
      case 53:
      case 55: return "wi wi-day-showers"; // Drizzle
      case 61:
      case 63:
      case 65: return "wi wi-rain"; // Rain
      case 71:
      case 73:
      case 75: return "wi wi-snow"; // Snow
      case 95: return "wi wi-thunderstorm"; // Thunderstorm
      default: return "wi wi-na"; // Unknown weather

      
    }
  };



  return (
    <div>
    <WeatherContext.Provider value={{  weatherData,
      recentSearches, 
      locationName,
      setInputValue,
      fetchCoordinates   }}>
        {children}
    </WeatherContext.Provider>
    </div>

  
    
  );
};


export const useWeather = () => useContext(WeatherContext) ;