const location = "Santiago,cl";

const api_key = "524bd8220df76ce56d9df73dffc72f92";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
