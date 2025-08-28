

const apiKey = 'bf5773950bfe4b0e80752001252808';
const city = document.getElementById('city-input');
const resultdiv = document.getElementById('weather-result');

async function getWeather() {

    try {


        if (city.value.trim() === '') {
            resultdiv.innerHTML = 'Please enter a city';
            return;
        }
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city.value.trim())}&aqi=no`);
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();

        resultdiv.innerHTML = `
            ${data.location.name}, ${data.location.country}<br>
            <strong>Temperature:</strong> ${data.current.temp_c}°C<br>
            <strong>Weather:</strong> ${data.current.condition.text}<br>
            <strong>Humidity:</strong> ${data.current.humidity}%<br>
            <strong>Wind Speed:</strong> ${data.current.wind_kph} kph
        `;
        
    } catch (error) {
        console.error(error);
    }
    
}