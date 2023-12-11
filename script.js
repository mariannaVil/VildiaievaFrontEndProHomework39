const apiUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = '5d066958a60d315387d9492393935c19';

const cityElement = document.getElementById('q');
const tempElement = document.getElementById('temp');
const pressureElement = document.getElementById('pressure');
const descriptionElement = document.getElementById('description');
const humidityElement = document.getElementById('humidity');
const speedElement = document.getElementById('speed');
const degElement = document.getElementById('deg');
const iconElement = document.getElementById('icon');

function buildApiUrl(q) {
    return `${apiUrl}?q=${q}&units=metric&APPID=${apiKey}`;
}

function fetchWeatherData(q) {
    const url = buildApiUrl(q);

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Помилка отримання даних про погоду');
            }
            return response.json();
        });
}

function renderWeatherData(weatherData) {
    cityElement.innerText = 'Місто: ' + weatherData.name;
    tempElement.innerText = 'Температура: ' + weatherData.main.temp + ' °C';
    pressureElement.innerText = 'Тиск: ' + weatherData.main.pressure + ' hPa';
    descriptionElement.innerText = 'Опис: ' + weatherData.weather[0].description;
    humidityElement.innerText = 'Вологість: ' + weatherData.main.humidity + ' %';
    speedElement.innerText = 'Швидкість вітру: ' + weatherData.wind.speed + ' м/с';
    degElement.innerText = 'Напрям у градусах: ' + weatherData.wind.deg + ' градусів';
    iconElement.src = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
}

function controller(city) {
    fetchWeatherData(city)
        .then(weatherData => renderWeatherData(weatherData))
        .catch(error => console.error(error));
}

controller('Vinnytsia');