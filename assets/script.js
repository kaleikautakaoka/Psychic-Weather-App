"strict";
$(document).ready(function () {
  $("#predictBtn").on("click", predictBtn);
})
  
//Function vars for city, state, country, and set limit for api calls
function predictBtn(e) {
  e.preventDefault();
  const city = $("#inputCity").val();
  // const state = $("#inputState").val();
  // const country = $("#inputCountry").val();
  
  //Place swirl on the screen
  //api ajax call for coordinates for the location
  fetch('https://api.openweathermap.org/geo/1.0/direct?q=' + city + '&appid=31ece337564bb8d05621f9f35ad27950',
  ).then(function (coords) {
    return coords.json();
  }).then(function (parsedCoords) {
    console.log(parsedCoords[0].lat);
    const lat = parsedCoords[0].lat;
    const lon = parsedCoords[0].lon;
    getWeather(city);
  });
};
  //Another api call to get forecast
  function getWeather(city){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=31ece337564bb8d05621f9f35ad27950`,
    ).then(function(forcast) {
      return forcast.json();
    }).then(function (parsedForcast) {
      innerContainer = $("");
      console.log(parsedForcast);
      //Result to be placed in result container
      innerContainer.text = parsedForcast;
      $("#result_container").append(innerContainer);
    });
  };
