import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-6">
          <div>
            <img src={props.data.icon} alt="weather icon" />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div>
            <ul className="mt-1">
              <li>
                <FormattedDate date={props.data.date} />
              </li>
            </ul>
          </div>
        </div>
        <div className="col-6 mt-2">
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
            <li>Wind: {Math.round(props.data.wind)} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
