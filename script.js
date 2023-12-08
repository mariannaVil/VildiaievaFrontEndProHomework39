function getWeather(q) {
    var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + q + '&units=metric&APPID=5d066958a60d315387d9492393935c19';

        var newObject = new XMLHttpRequest();

        newObject.open('GET', apiUrl, true);

        newObject.onload = function () {
            newObject.status === 200 
            ? (function () {
                
                var weatherData = JSON.parse(newObject.responseText);

                document.getElementById('q').innerText = 'Місто: ' + weatherData.name;
                document.getElementById('temp').innerText = 'Температура: ' + weatherData.main.temp + ' °C';
                document.getElementById('pressure').innerText = 'Тиск: ' + weatherData.main.pressure + ' hPa';
                document.getElementById('description').innerText = 'Опис: ' + weatherData.weather[0].description;
                document.getElementById('humidity').innerText = 'Вологість: ' + weatherData.main.humidity + ' %';
                document.getElementById('speed').innerText = 'Швидкість вітру: ' + weatherData.wind.speed + ' м/с';
                document.getElementById('deg').innerText = 'Напрям у градусах: ' + weatherData.wind.deg + ' градусів';
                document.getElementById('icon').src = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';

            })()
            : console.error('Помилка отримання даних про погоду');
        }
        
        newObject.send();
    }

    getWeather('Vinnytsia');