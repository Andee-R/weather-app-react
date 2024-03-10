import React from "react";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Sun</div>
          <div className="ForecastIcon">icon</div>
          <span className="ForecastTempMax">°78</span>{" "}
          <span className="ForecastTempMin">°55</span>
        </div>
      </div>
    </div>
  );
}
