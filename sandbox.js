const request = require('request');
const id = process.argv.slice(2)[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${id}`, (error, response, body) => {
  console.log(body);
  // try {
  // const data = JSON.parse(body)[0].description;
  // console.log("Description: " + data);
  // } catch (error) {
  //   console.log("There was an error");
  // }
});