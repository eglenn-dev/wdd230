const apiKey = '41b040317d7c966d88f7697cb552aba4';
const latitude = 51.1408312999787;
const longitude = -114.23239125152102;
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
const forecastWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

async function getCurrentWeather() {
    try {
        const response = await fetch(currentWeatherUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch:', error);
    }
}

async function getForecastWeather() {
    try {
        const response = await fetch(forecastWeatherUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const currentTimeStamp = Math.floor(Date.now() / 1000);
        const threeDaysData = data.list.filter(entry => entry.dt >= currentTimeStamp && entry.dt <= currentTimeStamp + 3 * 24 * 60 * 60);

        // Group data by date
        const groupedByDate = threeDaysData.reduce((acc, entry) => {
            const date = new Date(entry.dt_txt).toLocaleDateString();
            if (!acc[date]) {
                acc[date] = [];
            }
            acc[date].push(entry);
            return acc;
        }, {});

        // Find the high and low for each day
        const highsAndLows = Object.entries(groupedByDate).map(([date, entries]) => {
            const temps = entries.map(entry => entry.main.temp);
            const icon = entries[0].weather[0].icon;
            // debugger;
            return {
                date,
                high: Math.max(...temps).toFixed(2),
                low: Math.min(...temps).toFixed(2),
                icon: icon,
            };
        });

        return highsAndLows;
    } catch (error) {
        console.error('There was a problem with the fetch:', error);
    }
}

function updateCurrentWeather(data) {
    const dayTemp = document.querySelector('#dayTemp');
    const dayHum = document.querySelector('#dayHum');
    const weatherImg = document.querySelector('#weather-image');
    dayTemp.textContent = data.main.temp;
    dayHum.textContent = data.main.humidity;
    weatherImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}


function updateForecast(data) {

    const daysElements = document.querySelectorAll('.day-of-week');
    const highElements = document.querySelectorAll('.high');
    const lowElements = document.querySelectorAll('.low');
    const imageElements = document.querySelectorAll('.for-img');

    for (let i = 1; i < 4; i++) {
        const date = new Date(data[i].date);
        const day = date.toLocaleDateString('en-US', { weekday: 'long' });
        const high = data[i].high;
        const low = data[i].low;

        daysElements[i - 1].textContent = day;
        highElements[i - 1].textContent = high;
        lowElements[i - 1].textContent = low;
        imageElements[i - 1].src = `https://openweathermap.org/img/wn/${data[i].icon}.png`;
    }
}

async function updateWeather() {
    const currentWeatherData = await getCurrentWeather();
    updateCurrentWeather(currentWeatherData);
    const forecastWeatherData = await getForecastWeather();
    updateForecast(forecastWeatherData);
}

updateWeather();