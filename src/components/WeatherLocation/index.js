import React, { Component } from 'react';
import transformWeather from '../../services/transformWeather';
import { api_weather } from './../../constants/api_url';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import { 
    SUN,
} from './../../constants/weathers';

const data = {
    temperature: 30,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            commune: 'Puente Alto',
            city: 'Santiago',
            data: data,
        };
    }

    handleUpdateClick = () => {
        fetch(api_weather).then( res => {

                return res.json();
            }).then( data => {
                const newWeather = transformWeather(data);
                this.setState({
                    commune: newWeather.name,
                    data: newWeather,
                });
            })
            .catch( error => {
                console.log(error);
            });
    }

    render() {
        const { city, commune, data } = this.state;
        return(
            <div className="weatherLocationCont">
                <Location city={city} commune={commune} />
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;
