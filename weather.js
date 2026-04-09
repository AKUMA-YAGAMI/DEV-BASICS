const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const refreshBtn = document.getElementById('refreshBtn');
const weatherResult = document.getElementById('weatherResult');
const forecastResult = document.getElementById('forecastResult');

async function fetchWeather(cityName = null) {
    const city = cityName || cityInput.value.trim();
    if (!city) return;

    // Step 1: Convert city name to coordinates (using free geocoding API)
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`;
    const geoRes = await fetch(geoUrl);
    const geoData = await geoRes.json();

    if (!geoData.results) {
        weatherResult.innerHTML = `<p>City not found</p>`;
        forecastResult.innerHTML = '';
        return;
    }

    const { latitude, longitude, name } = geoData.results[0];

    // Step 2: Get weather and forecast using coordinates
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;
    const weatherRes = await fetch(weatherUrl);
    const weatherData = await weatherRes.json();

    const temp = weatherData.current_weather.temperature;
    const wind = weatherData.current_weather.windspeed;

    weatherResult.innerHTML = `
        <h2>Weather in ${name}</h2>
        <p>Temperature: ${temp}°C</p>
        <p>Wind speed: ${wind} km/h</p>
    `;

    // Display 5-day forecast
    const daily = weatherData.daily;
    let forecastHTML = '<h3>5-Day Forecast</h3><div class="forecast-container">';
    for (let i = 0; i < 5; i++) {
        const date = new Date(daily.time[i]).toLocaleDateString();
        const maxTemp = daily.temperature_2m_max[i];
        const minTemp = daily.temperature_2m_min[i];
        forecastHTML += `
            <div class="forecast-day">
                <p>${date}</p>
                <p>Max: ${maxTemp}°C</p>
                <p>Min: ${minTemp}°C</p>
            </div>
        `;
    }
    forecastHTML += '</div>';
    forecastResult.innerHTML = forecastHTML;

    // Save last searched city to localStorage
    localStorage.setItem('lastCity', name);
    cityInput.value = name; // Update input with the actual city name
}

function loadLastCity() {
    const lastCity = localStorage.getItem('lastCity');
    if (lastCity) {
        fetchWeather(lastCity);
    }
}

searchBtn.addEventListener('click', () => fetchWeather());
refreshBtn.addEventListener('click', () => {
    const lastCity = localStorage.getItem('lastCity');
    if (lastCity) {
        fetchWeather(lastCity);
    }
});

// Load weather for last city on page load
document.addEventListener('DOMContentLoaded', loadLastCity);