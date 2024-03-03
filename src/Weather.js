import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="Search"
              placeholder="Search City..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="search-button w-100"
            />
          </div>
        </div>
      </form>
      <h1>Glendale</h1>
      <div className="row">
        <div className="col-6">
          <div>
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
            <span className="temperature">62</span>
            <span className="units">°C | F</span>
          </div>
          <div>
            <ul className="mt-1">
              <li>Sunday 10:50 AM</li>
              <li>Mostly sunny</li>
            </ul>
          </div>
        </div>
        <div className="col-6 mt-2">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 48%</li>
            <li>Wind: 7 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
