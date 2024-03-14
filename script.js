const searchBtn = document.getElementById('searchBtn');
const inputBox = document.querySelector('.input-box');
const weather_img = document.querySelector('.weather-image');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const error_display = document.querySelector('.error-display');
const weather_body = document.querySelector('.weather-body');

async function checkWeather(city) {
    const api_key = "ca371f0917df633c8debf73179c2eddf";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if (weather_data.cod === `404`) {
        error_display.style.display = "flex";
        weather_body.style.display = "none";
        // console.log("error");
        return;
    }

    // console.log("run");
    error_display.style.display = "none";
    weather_body.style.display = "flex";

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

    description.innerHTML = `${weather_data.weather[0].description}`

    humidity.innerHTML = `${weather_data.main.humidity}%`;

    wind_speed.innerHTML = `${weather_data.wind.speed}km/h`;

    switch (weather_data.weather[0].main) {
        case `Clouds`: weather_img.src = "https://cdn-icons-png.flaticon.com/128/9586/9586736.png"
            break;

        case `Clear`: weather_img.src = "https://cdn-icons-png.flaticon.com/128/6974/6974833.png"
            break;

        case `Rain`: weather_img.src = "https://cdn-icons-png.flaticon.com/128/869/869869.png"
            break;

        case `Smoke`: weather_img.src = "https://cdn-icons-png.flaticon.com/128/869/869869.png"
            break;

        case `Haze`: weather_img.src = "https://cdn-icons-png.flaticon.com/128/2930/2930095.png"
            break;

        case `Fog`: weather_img.src = "https://cdn-icons-png.flaticon.com/128/3750/3750506.png"
            break;



    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value)
});