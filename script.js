function getWeather() {
    const zipCodeInput = document.getElementById('zip-input');
    const zip = zipCodeInput.value;


const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}`;

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response failed', + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('API Data:', data);
        const highTempK = data.main.temp_max;
        const lowTempK = data.main.temp_min;
        const highTempF = (highTempK - 273.15) *9 / 5 + 32;
        const lowTempF = (lowTempK - 273.15) *9 / 5 + 32;
        const forecast = data.weather[0].description;
        const humidity = data.main.humidity;

        document.getElementById('high-temp').textContent = `High: ${highTempF.toFixed(2)}°F`;
        document.getElementById('low-temp').textContent = `Low: ${lowTempF.toFixed(2)}°F`;
        document.getElementById('forecast').textContent = `Forecast: ${forecast}`;
        document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;

        updateBackgroundOrThemeBasedOnWeather(forecast);
    })

    .catch(error => {
        console.error('Whoop! Can\'t quite find the weather', error);
        alert('There has been an epic fail.  Please try again later.');
    });
}
function updateBackgroundOrThemeBasedOnWeather(forecast) {

}
