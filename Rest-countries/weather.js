var apikey="cb2fe737365cdf54082827a9b4f47b4f";
// var country=country.name.common
async function fetchCountryData() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
     return data
    //   console.log(data)
    //  var countryName= data[0].name.common;
    // console.log(countryName)
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }fetchCountryData()

  async function checkweather(country, countryCode) {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apikey}`);
      const data1 = await response.json();
      console.log(data1);
  
      let countname = data1.name;
      console.log(countname);
      let temperature = data1.main.temp;
      console.log(temperature);
      const weatherElement = document.getElementById(`${country}-${countryCode}-weather`);
      weatherElement.innerHTML = `Temperature is ${temperature}°K`;
  
    } catch (error) {
      console.error("Error:", error);
    }
  }
  function createcard(country){
     const card=document.createElement('div')
    
     card.innerHTML=
  
     `<div class="card">
  <div class="card-header">${country.name.common}</div>
  <div class="card-body">
  <img style="width:125px" src=${country.flags.png} alt:${country.name}<br/><br/>
     <p style:"color:white">Capital:${country.capital}</p>
     <p style:"color:white">Region:${country.region}</p>
     <p style:"color:white">Country Code:${country.cca2}</p>
     <button  onclick= "checkweather('${country.name.common}', '${country.cca2}')">C for weather</button>
     <div id="${country.name.common}-${country.cca2}-weather"></div>
</div>
  <div class="card-footer bg-transparent border-success"></div>
</div>`
    return card ;
  } 

 


  async function displayCountryCards() {
    const data = await fetchCountryData();
    const cardsContainer = document.getElementById('container');

    if (Array.isArray(data)) {
      data.forEach(country => {
        const card = createcard(country);
        cardsContainer.appendChild(card);
      });
    }
  }displayCountryCards()