import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";
import { useState } from "react";

// WeatherCard component 
function WeatherCard({ weatherData }) {
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  const filteredOption = filteredOptions[0];

  return (
    <section className="weather-card">
      <img
        src={filteredOption?.url}
        alt={`Card showing ${filteredOption?.day ? "day" : "night"}time ${
          filteredOption?.condition
        } weather`}
        className="weather-card__image"
      />
        <p className="weather-card__temp">{weatherData.temp?.F} &deg; F</p>
    </section>
  );
}

export default WeatherCard;
