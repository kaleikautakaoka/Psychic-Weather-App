"strict";

$("#predictBtn").on("click", predictBtn);

function predictBtn(e) {
  const city = $("#inputCity").val();
  const state = $("#inputState").val();
  const country = $("#inputCountry").val();
  const limit = 10;
  //Place swirl on the screen

  $.ajax({
    url: `http://api.openweathermap.org/geo/1.0/direct?q={city},{state},{country}&limit={limit}&appid={API key}`,
  }).done((coords) => {
    const parsedCoords = JSON.parse(coords);
    const lad = parsedCoords["lad"];
    const lon = parsedCoords["lon"];

    $.ajax({
      url: `api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`,
    }).done((forcast) => {
      const parsedForcast = JSON.parse(forcast);
      const innerContainer = $("<div>");

      innerContainer.text = parsedForcast["forcast"];
      $("#result_container").append(innerContainer);
    });
  });
}
// add  
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
