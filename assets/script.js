"strict";
//Function to activate the predict button
$(document).ready(function () {
  $("#predictBtn").on("click", predictBtn);
})

//Function var for city, main container, and calling to functions on click to get current weather and forecast
function predictBtn(e) {
  e.preventDefault();
  const currentContainer = $("#currentWeather");
  const city = $("#inputCity").val();
  // const forecastCards = $(".cardForecast");
  // const divForecastCards = $("<div class='card col - md - 2'>")
  getWeather(city);
  getForecast(city); 
};

const forcastDivAmount = 5;
//Api call to get current weather
function getWeather(city){
  let date = moment().format("(MM/DD/YYYY)");
    let nameOfCity = $("#nameCity");
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=31ece337564bb8d05621f9f35ad27950&units=imperial`,
    ).then(function(forecast) {
      return forecast.json();
    }).then(function (parsedForecast) {
      $("#resultContainer").empty();
      innerContainer = $("#resultContainer");
      console.log(parsedForecast);
      //City name and date
      nameOfCity.text(parsedForecast.name + " " + date)
      //Result to be placed in result container
      innerContainer.text("Todays temperature is currently " + (Math.floor(parsedForecast.main.temp)) + " degrees." + " Humidity is " +  parsedForecast.main.humidity + "%" + " The wind speed is " + parsedForecast.wind.speed);
      $("#currentWeather").append(innerContainer);
    });
};
  
//Function to get forecast for 5 days
  function getForecast(city){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=31ece337564bb8d05621f9f35ad27950&units=imperial`,
    ).then(function(forecast) {
      return forecast.json();
    }).then(function (parsedForecast) {
      for (i = 0; i < 5; i++) {
        let cardDays = (i * 7) + i;
      
      $(".date").empty();
      innerContainer = $(".date")
      //Result to be placed in cards
        innerContainer.text(parsedForecast.list[cardDays].dt_txt);

        $(".card-text-temp").empty();
        tempSection = $(".card-text-temp");
        //Result to be placed in cards
        tempSection.text("Todays temperature is currently " + (Math.floor(parsedForecast.list[cardDays].main.temp)) + " degrees.");

        $(".card-text-wind").empty();
        windSection = $(".card-text-wind");
        //Result to be placed in cards
        windSection.text("The wind speed is " + parsedForecast.list[cardDays].wind.speed);

        $(".card-text-humidity").empty();
        humiditySection = $(".card-text-humidity");
        //Result to be placed in cards
        humiditySection.text(" Humidity is " + parsedForecast.list[cardDays].main.humidity + "%");
        $(".date").append(innerContainer);
      }
    });
  };
