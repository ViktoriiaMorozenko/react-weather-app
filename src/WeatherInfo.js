import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="col-6">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />, {props.data.description}
          </li>
          <li>
            Humidity: <span className="measures">{props.data.humidity}%</span>,
            Wind: <span className="measures">{props.data.wind}km/h</span>
          </li>
        </ul>
      </div>

      <div className="col-6 exactTemperature">
        <span className="weatherIcon"><WeatherIcon code={props.data.icon} size={52} />{" "}</span>
        <WeatherTemperature celsius={props.data.temperature} />
      </div>
    </div>
  );
}
