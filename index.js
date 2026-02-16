const axios = require("axios");

function getWeather(city, callback) {

    const apiKey = "1aa3b3a2a30479c44d2b14e77bed9a07";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

    axios.get(url)
        .then(response => {
            callback(response.data);
        })
        .catch(error => {
            console.error("Erreur :", error);
        });
}

function afficherMeteo(data) {

    const description = data.weather[0].description;
    const temperature = data.main.temp;
    const humidite = data.main.humidity;

    console.log("Description :", description);
    console.log("Température :", temperature + "°C");
    console.log("Humidité :", humidite + "%");
}

getWeather("Sousse", afficherMeteo);
