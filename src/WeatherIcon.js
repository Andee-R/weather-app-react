import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  return (
    <ReactAnimatedWeather
      icon="broken-clouds-day"
      color="#000"
      size={props.size}
      animate={true}
    />
  );
}
