const request = require('request');

const fetchBreedDescription = (breedname, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedname}`, (error,resonse, body) => {
  let desc;
    try {
      const data = JSON.parse(body)[0];
      desc = data.description
    } catch (err) {
     error = err.message;
     desc = null;
    }
    callback(error, desc);
  });
};

module.exports = { fetchBreedDescription };




// const request = require('request');
// const id = process.argv.slice(2)[0];

// request(`https://api.thecatapi.com/v1/breeds/search?q=${id}`, (error, response, body) => {
//   try {
//   const data = JSON.parse(body)[0].description;
//   console.log("Description: " + data);
//   } catch (error) {
//     console.log("There was an error");
//   }
// });