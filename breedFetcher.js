const request = require('request');
const id = process.argv.slice(2)[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${id}`, (error, response, body) => {
  try {
    const data = JSON.parse(body)[0];
    console.log("Description: " + data.description);
  } catch (error) {
    console.log("There was an error");
  }
});