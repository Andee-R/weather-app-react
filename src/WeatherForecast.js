import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Sun</div>
          <WeatherIcon code={props.data.condition.icon} size={38} />
          <span className="ForecastTempMax">°78</span>{" "}
          <span className="ForecastTempMin">°55</span>
        </div>
      </div>
    </div>
  );
}
