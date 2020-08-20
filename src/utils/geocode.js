const request = require("request");
const geocode = (adress, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(adress) +
    ".json?access_token=pk.eyJ1IjoiYnVyc3VjMzEiLCJhIjoiY2tkeGJnNnZwMzE1NTMwcGFuY3N3MHM1ZyJ9.hRjOk3dJckk0VK7i6XHrwg&limit=1";
  console.log(url);
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to connect to location services!", undefined);
    } else if (body.features.length === 0) {
      callback("unable to find location plese try another search", undefined);
    } else {
      latitude = body.features[0].center[0];
      longitude = body.features[0].center[1];
      callback(undefined, {
        latitude,
        longitude,
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
