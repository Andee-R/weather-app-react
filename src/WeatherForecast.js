import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);

    console.log(response.data);
  }
  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="Forecast-day">Sun</div>
            <WeatherIcon
              code={props.data.icon}
              alt={props.data.description}
              size={32}
            />
            <span className="Forecast-temp-max">°78</span>{" "}
            <span className="Forecast-temp-min">°55</span>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "c9b605ad7a94bt8873a8fdebe09251o1";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
