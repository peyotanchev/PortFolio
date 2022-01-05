let weather = {
    "apiKey": "f2c5584a2733ba498888a70e018137da",
    fetchWeather: function(city) {
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data)); 
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather;
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon,description,temp,humidity,speed)
    }
}