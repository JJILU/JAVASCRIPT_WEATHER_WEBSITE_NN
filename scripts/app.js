// contains all the logic for DOM manipulation

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');


const updateUI = (data) => {

  console.log("update ui",data);

  // destructuring
  const {cityDets, weather} = data;

  // const cityDets = data.cityDets;
  // const weather = data.weather;

  // update details template
  details.innerHTML = `
      <h5 class="my-3">
        ${cityDets.EnglishName
        }
      </h5>
      <div class="my-3">
        ${weather.
          WeatherText}
      </div>
      <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
      </div>
  `;

  // update the night/day & icon images
  
  // set time image
  let timeSrc = null;
  // if(weather.IsDayTime) {
  //   timeSrc = './img/day.svg';
  // } 
  // else 
  // {
  //   timeSrc = './img/night.svg';
  // }

  // or using ternary
  // const result = condition ? 'value 1':'value 2';
  const isDayTime = weather.IsDayTime;
  timeSrc =  isDayTime ? './img/day.svg' : './img/night.svg';
  time.setAttribute('src',timeSrc);

  // set icon
  const iconSrc = `./img/icons/${weather.WeatherIcon}.svg`;

   icon.setAttribute('src', iconSrc)

  // remove the d-none class if present
  if(card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }
}

//  update city value
const updateCity = async (city) => {
  console.log("city", city);
   const cityDets = await getCity(city);

  // console.log("city dets", cityDets);
  // if(cityDets === undefined) {
  //   card.innerHTML = `<p>${city} is an invalid city name</p>`;
  //   if(card.classList.contains('d-none')) {
  //     card.classList.remove('d-none');
  //   }
  //   return;
  // }
   const weather = await getWeather(cityDets.Key);
   console.log("weather", weather);

   return {cityDets,weather};
};

// access city name from user input
cityForm.addEventListener('submit', e => {
  // prevent default action
  e.preventDefault();

  // get city value value
  const city = cityForm.city.value.trim();

  // store city in local storage
  localStorage.setItem('cityName', city);

  // clear or resets form
  cityForm.reset();

  // update the ui with new city
  updateCity(city)
  .then(data => {
    // console.log("update city",data);
    updateUI(data);
  })
  .catch(err => {
    console.log(err);
  });
});


// check if city exits in localstorage
if(localStorage.getItem('cityName')) {
  updateCity(localStorage.getItem('cityName'))
  .then(data => updateUI(data));
}