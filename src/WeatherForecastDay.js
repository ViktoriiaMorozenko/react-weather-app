import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecastDay">{day()}</div>
            <WeatherIcon
              code={props.data.weather[0].icon}
              size={32}
              color={"#303841"}
            />
            <div className="WeatherForecasttemperatures">
              <span className="WeatherForecastTemperatureMax">
                {Math.round(props.data.temp.max)}°C
              </span>{" "}
              /{" "}
              <span className="WeatherForecastTemperatureMin">
                {Math.round(props.data.temp.min)}°C
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
