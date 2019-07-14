const apiKey = "b09579c71327a1640e4aaa0564730e20"
const locations = ["Skopje", "London", "Barcelona", "Paris", "Munich"]
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locations}&appid=${apiKey}&units=metric`;

function getWeatherForFiveCities(i) {
    try{
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locations[i]}&appid=${apiKey}&units=metric`)
            .then(res => {
                return res.json();
            })
    }catch(err){
            throw(err);
    }
}

function getHourlyWeather(cityName){
    try{
        return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`)
            .then(res => {
                return res.json();
            })
    }catch(err){
        throw(err);
    }
}

export default {
    getWeatherForFiveCities,
    getHourlyWeather
}