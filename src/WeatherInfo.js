import React from "react";
import FormattedDate from "./FormattedDate.js";

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
        <img
          src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-night.png"
          alt=""
        />
        {Math.round(props.data.temperature)}°C
      </div>
    </div>
  );
}
