document.addEventListener('DOMContentLoaded', function() {
    API_KEY = 'c4dd6fb0f9aae9c9ff34cab5eac91493';
    city = 'London';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        displayWeatherData(data);
    })
    .catch(error => console.error('Error:', error));
});

function displayWeatherData(data) {
    highTemp = kelvinToFahrenheit(data.main.temp_max);
    lowTemp = kelvinToFahrenheit(data.main.temp_min);
    forecast = data.weather[0].main;
    humidity = data.main.humidity;
    
    document.getElementById('city').textContent = data.name;
    document.getElementById('high').textContent = highTemp.toFixed(2);
    document.getElementById('low').textContent = lowTemp.toFixed(2);
    document.getElementById('forecast').textContent = forecast;
    document.getElementById('humidity').textContent = humidity;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}
