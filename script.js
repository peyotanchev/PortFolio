let weather = {
    "apiKey": "f2c5584a2733ba498888a70e018137da",
    fetchWeather: function(city) {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apiKey
        )
            .then((response) => {
                if (!response.ok){
                    alert("No weather found.");
                    throw new Error("No weather found.");
                }
            return response.json();
            })
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon,description,temp,humidity,speed)
        document.querySelector(".city").innerText = "Whether in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity is" + humidity + "%";
        document.querySelector(".wind").innerText = "Wind is" + speed + "km/h";
        document.querySelector(".whether").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
search: function (){
    this.fetchWeather(document.querySelector(".search-bar").value)
},
};
document.querySelector(".search button").addEventListener("click", function(){
weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup", function(event){
  if (event.key == "Enter") {
   weather.search();   
  }
});

weather.fetchWeather("Denver");
