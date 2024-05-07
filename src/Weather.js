import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import "./FormattedDate.js";
import FormattedDate from "./FormattedDate.js";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  function handleResponse(response) {
    setWeatherData({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      temperature: response.data.main.temp,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-9">
            <form>
              <input
                type="Search"
                placeholder="Enter a city.."
                className="formControl"
              />
            </form>
          </div>
          <div className="col-3">
            <input type="Submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h1>London</h1>
            <ul>
              <li>
                <FormattedDate date={weatherData.date} />,{" "}
                {weatherData.description}
              </li>
              <li>
                Humidity:{" "}
                <span className="measures">{weatherData.humidity}%</span>, Wind:{" "}
                <span className="measures">{weatherData.wind}km/h</span>
              </li>
            </ul>
          </div>

          <div className="col-6 exactTemperature">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-night.png"
              alt=""
            />
            {Math.round(weatherData.temperature)}°C
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b2d9fa1f2b35557e4615dd5fab218834";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "loading..";
  }
}
