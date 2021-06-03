const request = require('request');
const arg = process.argv.slice(2);



request(`https://api.thecatapi.com/v1/breeds/search?q=${arg}`, (error, response, body) => {
  if (error) console.log('there is an error in the submited URL');
  if (!body) console.log('Input does not match a cat in the database');
  if (body) {
    const data = JSON.parse(body);
    console.log(data);
  }
});



