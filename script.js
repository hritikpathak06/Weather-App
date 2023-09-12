const apiKey = "4dc92fa3a5bbb7a7c7c527eb067f7d45";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const citi = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const temp = document.querySelector(".temp");
const wind = document.querySelector(".wind");
const icon = document.querySelector(".weather-icon")

const searchBox = document.getElementById("search");
const searchBtn = document.getElementById("button")


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json();
    console.log(data);
    citi.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + "%";
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    wind.innerHTML = data.wind.speed + " km/hr";

    if (data.weather[0].main === "Clouds") {
        icon.src = "images/clouds.png"
    }

    if(data.weather[0].main === "Mist"){
        icon.src = "images/mist.png"
    }

    if(data.weather[0].main === "Clear"){
        icon.src = "images/clear.png"
    }

    if(data.weather[0].main === "Rain"){
        icon.src = "images/rain.png"
    }

    if(data.weather[0].main === "Drizzle"){
        icon.src = "images/drizzle.png"
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    console.log("hello wolrd")
})
