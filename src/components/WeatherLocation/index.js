import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import { 
    SUN,
    WINDY,
} from './../../constants/weathers';

const data = {
    temperature: 30,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}

const data2 = {
    temperature: 20,
    weatherState: WINDY,
    humidity: 40,
    wind: '30 m/s',
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
        console.log("Actualizado");
        this.setState({
            commune: 'San beka',
            data: data2,
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
