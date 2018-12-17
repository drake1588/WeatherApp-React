import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import { CLOUD,
         CLOUDY,
         SUN,
         RAIN,
         SNOW,
         WINDY } from './../../../constants/weathers';
import './styles.css';

const stateToIconName = weatherState => {
    switch (weatherState) {
        case CLOUD:
            return "cloud";
        case CLOUDY:
            return "cloudy";
        case SUN:
            return "day-sunny";
        case RAIN:
            return "rain";
        case SNOW:
            return "snow";
        case WINDY:
            return "windy";
        default:
            return "day-sunny";
    }
};

const getWeatherIcon = weatherState => {
    const sizeIcon = "4x";

    return (<WeatherIcons className="wicon" name={stateToIconName(weatherState)} size={sizeIcon}/>);
};

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="weatherTempCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{ `${temperature}` }</span>
        <span className="temperatureType">{ `°C` }</span>
    </div>
);

// Under the constructor, set prop-types for the object
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;