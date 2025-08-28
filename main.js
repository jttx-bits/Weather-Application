

const apiKey = 'bf5773950bfe4b0e80752001252808';

async function getWeather() {

    try {

        const apiKey = 'bf5773950bfe4b0e80752001252808';
        const city = document.getElementById('city-input');
        const resultdiv = document.getElementById('weather-result');
        if (city === '') {
            resultdiv.innerHTML = 'Please enter a city';
        }
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        resultDiv.innerHTML = `
        ${data.name}, ${data.sys.country}
        <strong>Temperature:</strong> ${data.main.temp}°C
        <strong>Weather:</strong> ${data.weather[0].description}
        <strong>Humidity:</strong> ${data.main.humidity}%
        <strong>Wind Speed:</strong> ${data.wind.speed} m/s
    `;
        
    } catch (error) {
        console.error(error);
    }
    
}