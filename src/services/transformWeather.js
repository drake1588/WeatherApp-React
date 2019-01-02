import convert from 'convert-units';
import { 
    SUN,
} from './../constants/weathers';

const getTemperature = kelvin => {
    return convert(kelvin).from("K").to("C").toFixed(0);
}

const getWeatherState = weather_data => {
    return SUN;
}

const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const { name } = weather_data;
    debugger;
    const temperature = getTemperature(temp);
    const weatherState = getWeatherState(weather_data);

    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`,
        name,
    }
    return data;
}

export default transformWeather;