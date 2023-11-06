let searchBtn = document.getElementById("search-button");
let flagImage = document.getElementById("image");
let nameElement = document.getElementById("name"); 
let capitalElement = document.getElementById("capital"); 
let populationElement = document.getElementById("population"); 
let currencyElement = document.getElementById("currency"); 
let regionElement = document.getElementById("region");

searchBtn.addEventListener("click", () => {
  let country_input = document.getElementById("country-input").value;
  let url = `https://restcountries.com/v3.1/name/${country_input}?fullText=true`;
  flagImage.classList.add("image");
  console.log(url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data[0]) {
        const flagUrl = data[0].flags.svg;
        flagImage.src = flagUrl;
        nameElement.innerHTML = "<br>Name: " + data[0].name.common;
        capitalElement.innerHTML = "Capital: " + data[0].capital[0];
        populationElement.innerHTML = "Population: "+ data[0].population;
        currencyElement.innerHTML = "Currency: "+data[0].currencies[Object.keys(data[0].currencies)].name;
        regionElement.innerHTML = "Region: " + data[0].region;

      } else {
        flagImage.src = './flag.webp';
        console.error("Flag URL not found in API response");
        alert("Invalid Country");
        nameElement.innerHTML = "";
        capitalElement.innerHTML = "";
        populationElement.innerHTML = "";
        currencyElement.innerHTML = "";
        regionElement.innerHTML = "";
      }

      console.log(data[0].capital[0]);
      console.log(data[0].population[0]);
      console.log(data[0].region);
      console.log(data[0].currencies);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
