import React from 'react';

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div>
        <span>{`${humidity}% de humedad, `}</span>
        <span>{`Velocidad del viento: ${wind}`}</span>
    </div>
);

export default WeatherExtraInfo;