const breedName = process.argv.slice(2)[0];
const { fetchBreedDescription } = require('./breedFetcher.js');

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Errror fetch details:', error);
  } else {
    console.log(desc);
  }
});