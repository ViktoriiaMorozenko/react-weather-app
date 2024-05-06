import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
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
              <li>Sunday 21:28, few clouds</li>
              <li>
                Humidity: <span className="measures">80%</span>, Wind:{" "}
                <span className="measures">1.54km/h</span>
              </li>
            </ul>
          </div>

          <div className="col-6 exactTemperature">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-night.png"
              alt=""
            />
            13°C
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "af263868fba123db051ft28a00754f7o";
    let city = "London";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
}
