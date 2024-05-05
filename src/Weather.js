import React from "react";
import "./Weather.css";

export default function Weather() {
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
          <ul>
            <li>London</li>
            <li>Sunday 21:28, few clouds</li>
            <li>Humidity: 80%, Wind: 1.54km/h</li>
          </ul>
        </div>

        <div className="col-6">
          <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-night.png" />
          13°C
        </div>
      </div>
    </div>
  );
}