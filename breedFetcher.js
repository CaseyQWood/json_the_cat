const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    if (body) {
      const data = JSON.parse(body);
      callback(null, data);
    }
  });
};

module.exports = {fetchBreedDescription};
