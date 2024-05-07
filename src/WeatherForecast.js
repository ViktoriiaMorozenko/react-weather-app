import React from "react";
import WeatherIcon from "./WeatherIcon";
import './WeatherForecast.css'

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay">Thu</div>
          <WeatherIcon code="01d" size={32} color={"#303841"} />
          <div className="WeatherForecasttemperatures">
            <span className="WeatherForecastTemperatureMax">19°C</span> /{" "}
            <span className="WeatherForecastTemperatureMin">10°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
