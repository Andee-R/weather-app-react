import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon_url,
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
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
        <h1>{weatherData.city}</h1>
        <div className="row">
          <div className="col-6">
            <div>
              <img src={weatherData.icon} alt="weather icon" />
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units">°C | F</span>
            </div>
            <div>
              <ul className="mt-1">
                <li>
                  <FormattedDate date={weatherData.date} />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 mt-2">
            <ul>
              <li className="text-capitalize">{weatherData.description}</li>
              <li>Humidity: {Math.round(weatherData.humidity)}%</li>
              <li>Wind: {Math.round(weatherData.wind)} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "c9b605ad7a94bt8873a8fdebe09251o1";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
