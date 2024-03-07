const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDescription = document.querySelector('figcaption');

const apiKey = '41b040317d7c966d88f7697cb552aba4';
const latitude = 49.75;
const longitude = 6.64;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;


async function apiFetch() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch:', error);
    }
}

function displayWeather(data) {
    currentTemp.textContent = `${Math.round(data.main.temp)}°F`;
    weatherDescription.textContent = data.weather[0].description;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherIcon.alt = data.weather[0].description;
}

apiFetch().then(data => displayWeather(data));