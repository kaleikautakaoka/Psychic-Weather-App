"strict";
$(document).ready(function () {
  $("#predictBtn").on("click", predictBtn);
})

const forcastDivAmount = 5;
  
//Function vars for city, state, country, and set limit for api calls
function predictBtn(e) {
  e.preventDefault();
  const city = $("#inputCity").val();
  // const dayOne = $("#").val();
  // const dayTwo = $("#").val();
  // const dayThree = $("#").val();
  // const dayFour = $("#").val();
  // const dayFive = $("#").val();
  // const date = $("#").val();
  // const temp = $("#").val();
  // const humidity = $("#").val();
  // const windSpeed = $("#").val();

  // const state = $("#inputState").val();
  // const country = $("#inputCountry").val();
  
  //Place swirl on the screen
  //api ajax call for coordinates for the location
  getWeather(city);
  getForecast(city);
  // fetch('https://api.openweathermap.org/geo/1.0/direct?q=' + city + '&appid=31ece337564bb8d05621f9f35ad27950',
  // ).then(function (coords) {
  //   return coords.json();
  // }).then(function (parsedCoords) {
  //   console.log(parsedCoords[0].lat);
  //   const lat = parsedCoords[0].lat;
  //   const lon = parsedCoords[0].lon;
  // });
};
  //Another api call to get forecast
  function getWeather(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=31ece337564bb8d05621f9f35ad27950&units=imperial`,
    ).then(function(forcast) {
      return forcast.json();
    }).then(function (parsedForcast) {
      $("#result_container").empty();
      innerContainer = $("#result_container");
      console.log(parsedForcast);
      //Result to be placed in result container
      innerContainer.text = parsedForcast;
      $("#currentWeather").append(innerContainer);
    });
  };
  function getForecast(city){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=31ece337564bb8d05621f9f35ad27950`,
    ).then(function(forcast) {
      return forcast.json();
    }).then(function (parsedForcast) {
      $(".card-body-monday").empty();
      innerContainer = $(".card-body-monday");
      console.log(parsedForcast);
      //Result to be placed in result container
      innerContainer.text = parsedForcast;
      $(".card-text-monday").append(innerContainer);
    });
  };
