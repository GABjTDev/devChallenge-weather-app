import React from "react";
import Clear from "../images/Clear.png";
import Hail from "../images/Hail.png";
import HeavyCloud from "../images/HeavyCloud.png";
import HeavyRain from "../images/HeavyRain.png";
import LightCloud from "../images/LightCloud.png";
import LightRain from "../images/LightRain.png";
import Shower from "../images/Shower.png";
import Sleet from "../images/Sleet.png";
import Snow from "../images/Snow.png";
import Thunderstorm from "../images/Thunderstorm.png";

const ImgWeather = ({ day }) => {
  return (
    <>
      {day.weather_state_abbr === "sn" && (
        <img src={Snow} alt="Weather today Snow" />
      )}

      {day.weather_state_abbr === "sl" && (
        <img src={Sleet} alt="Weather today Sleet" />
      )}

      {day.weather_state_abbr === "h" && (
        <img src={Hail} alt="Weather today Hail" />
      )}

      {day.weather_state_abbr === "t" && (
        <img src={Thunderstorm} alt="Weather today Thunderstorm" />
      )}

      {day.weather_state_abbr === "hr" && (
        <img src={HeavyRain} alt="Weather today HeavyRain" />
      )}

      {day.weather_state_abbr === "lr" && (
        <img src={LightRain} alt="Weather today LightRain" />
      )}

      {day.weather_state_abbr === "s" && (
        <img src={Shower} alt="Weather today Shower" />
      )}

      {day.weather_state_abbr === "lc" && (
        <img src={LightCloud} alt="Weather today LightCloud" />
      )}

      {day.weather_state_abbr === "hc" && (
        <img src={HeavyCloud} alt="Weather today HeavyCloud" />
      )}

      {day.weather_state_abbr === "c" && (
        <img src={Clear} alt="Weather today Clear" />
      )}
    </>
  );
};

export default ImgWeather;
