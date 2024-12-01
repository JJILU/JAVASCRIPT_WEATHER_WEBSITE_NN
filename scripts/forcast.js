// contains all logic to interact with weather api

const key = 'AGYIdkGaGvCq0QXia6Ca2AC1Y0X4uw93';

// get weather information
const getWeather = async (id) => {

  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);

  const data = await response.json();

  return data[0];
};

// getWeather(354544)
// .then(data => {
//   console.log(data);
// })
// .catch(err => {
//   console.log(err);
// })

// get city information
const getCity = async (city) => {

  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);

  const data = await response.json();

  return data[0];

}

// getCity('new york')
// .then(data => {
//  return getWeather(data.Key);
// })
// .then(data => {
//   console.log(data);
// })
// .catch(err => {
//  console.log(err);
// })
