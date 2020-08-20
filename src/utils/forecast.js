const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const url =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&appid=6d1e142d613e4ec502ed5838528f683e&units=metric&lang=ro";
  console.log(url, "asta");
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to connect to server", undefined);
    } else if (body.cod) {
      callback("unable to find location", undefined);
    } else {
      const resp = body;
      callback(undefined, {
        description: resp.daily[1].weather[0].description,
        temperature: resp.current.temp,
        pressure: resp.current.pressure,
      });
    } 
  });
};

module.exports = forecast;
