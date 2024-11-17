const apiKey = '6777d872509759f23a0d49b860e38202'; // Replace with your OpenWeatherMap API key
const weatherInfo = document.getElementById('weather-info');
const searchBtn = document.getElementById('search-btn');
const locationInput = document.getElementById('location-input');

// Fetch weather data by city name
async function fetchWeatherByCity(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = await response.json();
        console.log('API Response:', data); // Log API response for debugging
        if (data.cod === 200) {
            // Check if the input matches a country by comparing the `sys.country` field
            if (city.toLowerCase() === data.sys.country.toLowerCase()) {
                weatherInfo.innerHTML = `<p>You entered a country name. Please enter a city name.</p>`;
            } else {
                displayWeather(data);
            }
        } else {
            weatherInfo.innerHTML = `<p>${data.message}. Please try again with a valid city name.</p>`;
        }
    } catch (error) {
        console.error('Error fetching weather:', error);
        weatherInfo.innerHTML = `<p>Error fetching data. Please try again later.</p>`;
    }
}

// Display weather data
function displayWeather(data) {
    const { name, weather, main, wind } = data;
    weatherInfo.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Condition:</strong> ${weather[0].description}</p>
        <p><strong>Temperature:</strong> ${main.temp} °C</p>
        <p><strong>Humidity:</strong> ${main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${wind.speed} m/s</p>
    `;
}

// Handle search button click
searchBtn.addEventListener('click', () => {
    const city = locationInput.value.trim();
    if (city) {
        fetchWeatherByCity(city);
    } else {
        weatherInfo.innerHTML = `<p>Please enter a city name.</p>`;
    }
});

// Fetch weather by geolocation on load
window.addEventListener('load', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                fetchWeatherByLocation(latitude, longitude);
            },
            () => {
                weatherInfo.innerHTML = `<p>Geolocation is not enabled. Please search for a city.</p>`;
            }
        );
    } else {
        weatherInfo.innerHTML = `<p>Geolocation is not supported by your browser.</p>`;
    }
});
