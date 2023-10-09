async function getWeather() {
    const zipCodeInput = document.getElementById('zip-input');
    const zip = zipCodeInput.value;


    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=${apiKey}`;

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response failed', + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // console.log('API Data:', data);
        const highTemp = data.main.temp_max;
        const lowTemp = data.main.temp_min;
        // const highTempF = (highTempK - 273.15) *9 / 5 + 32;
        // const lowTempF = (lowTempK - 273.15) *9 / 5 + 32;
        const forecast = data.weather[0].description;
        const humidity = data.main.humidity;
        const condition = data.weather[0].main.toLowerCase();
        const temp = data.main.temp;
        
        document.getElementById('high-temp').textContent = `High: ${highTemp.toFixed(2)}°F`;
        document.getElementById('low-temp').textContent = `Low: ${lowTemp.toFixed(2)}°F`;
        document.getElementById('forecast').textContent = `Forecast: ${forecast}`;
        document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
       
    })
    .catch(error => {
        console.error('Whoop! Can\'t quite find the weather', error);
        alert('There has been an epic fail.  Please try again later.');
    });
// removed condition from updateBackground
function updateBackground(temp) {
    let videoChoice;

    if (temp <32) {
        videoChoice = './Media/Cold_below_32_v.webm';
    } else if (temp >=32 && temp < 70) {
        videoChoice = './Media/Clear_day_v.webm';
    } else if (temp >= 70 && temp < 90) {
        videoChoice = './Media/Sunny_day_v.webm';
    } else if (temp >= 90) {
        videoChoice = './Media/Hot_above+90_v.webm';
    }
    
    const videoElement = document.getElementById('background-video');
    const sourceElement = document.getElementById('background-video-source')

    if (videoElement && sourceElement) {
        sourceElement.src = videoChoice;
        videoElement.load();
        videoElement.play();
    } else {
        console.error('failboat');
    }
}    



//const videoElement = document.getElementById('background-video');
//     if(videoElement) {
//         videoElement.src = videoChoice;
//         videoElement.load();
//         videoElement.onplay();
//     } else {
//         console.error('Video not found');
//     }
// }   
   
   
   
   
   
    // switch (condition.toLowerCase()) {
    //     case 'clouds': 
    //         videoChoice = './Media/overcast_v.webm';
    //         break;
    //     case 'snow':
    //         videoChoice = './Media/Snow_v.mp4';
    //         break;
    //     case 'rain':
    //         videoChoice = './Media/Rainv.webm';
    //         break;
    //     default:
    //         break;
    // }
    //     // if (condition.includes('rain')) {
            
        // } else if (condition.includes('snow')) {
            
        // } else if (condition.includes('overcast')) {
}

// const videoElement = document.getElementById('background-video');
// console.log(videoElement);
// const sourceElement = videoElement.getElementsByTagName('source')[0];
// sourceElement.src = videoChoice;
// videoElement.load();
// videoElement.play();

            
//         document.getElementById('weather container').style.backgroundImage = backgroundImage;
        



//     const backgroundVideo = document.getElementById('idle_backdrop');

// function playVideo() {
//     backgroundVideo.play();
// }

// function updateBackgroundOrThemeBasedOnWeather(forecast) {
//     const videoElement = document.getElementById('idle_backdrop');
//     let videoSource;

//     switch
// }
        
