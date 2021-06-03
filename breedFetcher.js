const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (body.length === 2) {callback('this is not a cat', null)}
    else if(body) {
      const data = JSON.parse(body);
      callback(null, data[0].description);
    }
  });
};

module.exports = {fetchBreedDescription};
