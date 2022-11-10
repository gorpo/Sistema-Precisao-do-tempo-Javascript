



const apiKey = "e7534da8406721314587b332e8cf0d1f";
const apiCountryURL = "https://countryflagsapi.com/png/";
const apiUnsplash = "https://source.unsplash.com/1600x900/?";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");

const tempElementMax = document.querySelector("#temperature_max span");
const tempElementMin = document.querySelector("#temperature_min span");

const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");

const errorMessageContainer = document.querySelector("#error-message");
const loader = document.querySelector("#loader");

const suggestionContainer = document.querySelector("#suggestions");
const suggestionButtons = document.querySelectorAll("#suggestions button");





// Loader
const toggleLoader = () => {
  loader.classList.toggle("hide");
};

const getWeatherData = async (city) => {
  toggleLoader();



//esconde  as temperaturas exibidas na tela inicial
var appBanners = document.getElementsByClassName('hide1');
for (var i = 0; i < appBanners.length; i ++) {
    appBanners[i].style.display = 'none';
}






//carrega a pesquisa
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

  const res = await fetch(apiWeatherURL);
  const data = await res.json();

  toggleLoader();

  return data;
};





// Tratamento de erro
const showErrorMessage = () => {
  errorMessageContainer.classList.remove("hide");
};

const hideInformation = () => {
  errorMessageContainer.classList.add("hide");
  weatherContainer.classList.add("hide");

  suggestionContainer.classList.add("hide");
};

const showWeatherData = async (city) => {
  hideInformation();

  const data = await getWeatherData(city);

  if (data.cod === "404") {
    showErrorMessage();
    return;
  }

  cityElement.innerText = data.name;
  tempElementMax.innerText = parseInt(data.main.temp_max);
  tempElementMin.innerText = parseInt(data.main.temp_min);

  descElement.innerText = data.weather[0].description;
  weatherIconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  );
  countryElement.setAttribute("src", apiCountryURL + data.sys.country);
  umidityElement.innerText = `${data.main.humidity}%`;
  windElement.innerText = `${data.wind.speed}km/h`;

  // Change bg image
  document.body.style.backgroundImage = `url("${apiUnsplash + city}")`;

  weatherContainer.classList.remove("hide");
};

searchBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const city = cityInput.value;

  showWeatherData(city);
});

cityInput.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    const city = e.target.value;

    showWeatherData(city);
  }
});

// Sugestões
suggestionButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const city = btn.getAttribute("id");

    showWeatherData(city);
  });
});














//SCRIPT QUE EXIBE UMA UNICA CIDADE --------------------------------------------------------------->
const key = 'e7534da8406721314587b332e8cf0d1f';
if(key=='') document.getElementById('temp').innerHTML = ('Remember to add your api key!');

//Rio de Janeiro
function weatherBallon1( cityID ) {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' +cityID+ '&appid=' + key) 

  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    drawWeather(data);
  })
  .catch(function() {
    // catch any errors
  });
}
function drawWeather( d ) {
  var celcius_min1 = Math.round(parseFloat(d.main.temp_min)-273.15);
  var celcius_max1 = Math.round(parseFloat(d.main.temp_max)-273.15);
  document.getElementById('location1').innerHTML = d.name;
  document.getElementById('temp_min1').innerHTML = 'Minima: ' + celcius_min1 + ' &deg;C';
  document.getElementById('temp_max1').innerHTML = 'Máxima: ' + celcius_max1 + ' &deg;C';
}

//Sao Paulo
function weatherBallon2( cityID2 ) {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' +cityID2+ '&appid=' + key) 

  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data2) {
    drawWeather2(data2);
  })
  .catch(function() {
    // catch any errors
  });
}
function drawWeather2( d ) {
  var celcius_min2 = Math.round(parseFloat(d.main.temp_min)-273.15);
  var celcius_max2 = Math.round(parseFloat(d.main.temp_max)-273.15);
  document.getElementById('location2').innerHTML = d.name;
  document.getElementById('temp_min2').innerHTML = 'Minima: ' + celcius_min2 + ' &deg;C';
  document.getElementById('temp_max2').innerHTML = 'Máxima: ' + celcius_max2 + ' &deg;C';
}

//Belo Horizonte
function weatherBallon3( cityID3 ) {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' +cityID3+ '&appid=' + key) 

  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data3) {
    drawWeather3(data3);
  })
  .catch(function() {
    // catch any errors
  });
}
function drawWeather3( d ) {
  var celcius_min3 = Math.round(parseFloat(d.main.temp_min)-273.15);
  var celcius_max3 = Math.round(parseFloat(d.main.temp_max)-273.15);
  document.getElementById('location3').innerHTML = d.name;
  document.getElementById('temp_min3').innerHTML = 'Minima: ' + celcius_min3 + ' &deg;C';
  document.getElementById('temp_max3').innerHTML = 'Máxima: ' + celcius_max3 + ' &deg;C';
}


//Brasilia
function weatherBallon4( cityID4 ) {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' +cityID4+ '&appid=' + key) 

  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data4) {
    drawWeather4(data4);
  })
  .catch(function() {
    // catch any errors
  });
}
function drawWeather4( d ) {
  var celcius_min4 = Math.round(parseFloat(d.main.temp_min)-274.15);
  var celcius_max4 = Math.round(parseFloat(d.main.temp_max)-274.15);
  document.getElementById('location4').innerHTML = d.name;
  document.getElementById('temp_min4').innerHTML = 'Minima: ' + celcius_min4 + ' &deg;C';
  document.getElementById('temp_max4').innerHTML = 'Máxima: ' + celcius_max4 + ' &deg;C';
}



//Belem
function weatherBallon5( cityID5 ) {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' +cityID5+ '&appid=' + key) 

  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data5) {
    drawWeather5(data5);
  })
  .catch(function() {
    // catch any errors
  });
}
function drawWeather5( d ) {
  var celcius_min5 = Math.round(parseFloat(d.main.temp_min)-274.15);
  var celcius_max5 = Math.round(parseFloat(d.main.temp_max)-274.15);
  document.getElementById('location5').innerHTML = d.name;
  document.getElementById('temp_min5').innerHTML = 'Minima: ' + celcius_min5 + ' &deg;C';
  document.getElementById('temp_max5').innerHTML = 'Máxima: ' + celcius_max5 + ' &deg;C';
}


//Salvador
function weatherBallon6( cityID6 ) {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' +cityID6+ '&appid=' + key) 

  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data6) {
    drawWeather6(data6);
  })
  .catch(function() {
    // catch any errors
  });
}
function drawWeather6( d ) {
  var celcius_min6 = Math.round(parseFloat(d.main.temp_min)-274.15);
  var celcius_max6 = Math.round(parseFloat(d.main.temp_max)-274.15);
  document.getElementById('location6').innerHTML = d.name;
  document.getElementById('temp_min6').innerHTML = 'Minima: ' + celcius_min6 + ' &deg;C';
  document.getElementById('temp_max6').innerHTML = 'Máxima: ' + celcius_max6 + ' &deg;C';
}

//Curitiba
function weatherBallon7( cityID7 ) {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' +cityID7+ '&appid=' + key) 

  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data7) {
    drawWeather7(data7);
  })
  .catch(function() {
    // catch any errors
  });
}
function drawWeather7( d ) {
  var celcius_min7 = Math.round(parseFloat(d.main.temp_min)-274.15);
  var celcius_max7 = Math.round(parseFloat(d.main.temp_max)-274.15);
  document.getElementById('location7').innerHTML = d.name;
  document.getElementById('temp_min7').innerHTML = 'Minima: ' + celcius_min7 + ' &deg;C';
  document.getElementById('temp_max7').innerHTML = 'Máxima: ' + celcius_max7 + ' &deg;C';
}


//Fortaleza
function weatherBallon8( cityID8 ) {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' +cityID8+ '&appid=' + key) 

  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data8) {
    drawWeather8(data8);
  })
  .catch(function() {
    // catch any errors
  });
}
function drawWeather8( d ) {
  var celcius_min8 = Math.round(parseFloat(d.main.temp_min)-274.15);
  var celcius_max8 = Math.round(parseFloat(d.main.temp_max)-274.15);
  document.getElementById('location8').innerHTML = d.name;
  document.getElementById('temp_min8').innerHTML = 'Minima: ' + celcius_min8 + ' &deg;C';
  document.getElementById('temp_max8').innerHTML = 'Máxima: ' + celcius_max8 + ' &deg;C';
}


//Manaus
function weatherBallon9( cityID9 ) {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' +cityID9+ '&appid=' + key) 

  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data9) {
    drawWeather9(data9);
  })
  .catch(function() {
    // catch any errors
  });
}
function drawWeather9( d ) {
  var celcius_min9 = Math.round(parseFloat(d.main.temp_min)-274.15);
  var celcius_max9 = Math.round(parseFloat(d.main.temp_max)-274.15);
  document.getElementById('location9').innerHTML = d.name;
  document.getElementById('temp_min9').innerHTML = 'Minima: ' + celcius_min9 + ' &deg;C';
  document.getElementById('temp_max9').innerHTML = 'Máxima: ' + celcius_max9 + ' &deg;C';
}


//Joao Pessoa
function weatherBallon10( cityID10 ) {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' +cityID10+ '&appid=' + key) 

  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data10) {
    drawWeather10(data10);
  })
  .catch(function() {
    // catch any errors
  });
}
function drawWeather10( d ) {
  var celcius_min10 = Math.round(parseFloat(d.main.temp_min)-274.15);
  var celcius_max10 = Math.round(parseFloat(d.main.temp_max)-274.15);
  document.getElementById('location10').innerHTML = d.name;
  document.getElementById('temp_min10').innerHTML = 'Minima: ' + celcius_min10 + ' &deg;C';
  document.getElementById('temp_max10').innerHTML = 'Máxima: ' + celcius_max10 + ' &deg;C';
}



window.onload = function() {
  weatherBallon1( 'Rio de Janeiro' );
  weatherBallon2( 'Sao Paulo' );
  weatherBallon3( 'Belo Horizonte' );
  weatherBallon4( 'Brasilia' );
  weatherBallon5( 'Belem' );
  weatherBallon6( 'Salvador' );
  weatherBallon7( 'Curitiba' );
  weatherBallon8( 'Fortaleza' );
  weatherBallon9( 'Manaus' );
  weatherBallon10( 'Joao Pessoa' );
  

}



