function getWeather() {
    const apiKey = '';
    const zip = 'YOUR_ZIP_CODE';
    const url = '';
}

fetch(url)
    .then(response => response.json())
    .then(data => {
        const highTemp = data.main.temp_max;
        const lowTemp = data.main.temp_min;
        const forecast = data.weather[0].description;
        const humidity = data.main.humidity;
    })

.catch(error => console.error('Error fetching the weather', error));
