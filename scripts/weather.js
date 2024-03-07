const weatherDescription = document.querySelector('#weather-description');
const weatherTemp = document.querySelector('#temp');

const apiKey = '41b040317d7c966d88f7697cb552aba4';
const latitude = 43.817722402283884;
const longitude = -111.78265010610738;
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
    weatherDescription.textContent = data.weather[0].description;
    weatherTemp.textContent = `${Math.round(data.main.temp)}°F`;
}

apiFetch().then(data => displayWeather(data));