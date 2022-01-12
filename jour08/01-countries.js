const axios = require('axios');
let countriesNames = [];
function getCountries() {

axios.get("https://restcountries.com/v3.1/all").then(function (res) {
    let countriesNames = res.data.map (function (getCountries) {
    return getCountries.name.common;
})
console.log (countriesNames.join(" - " ));   
})};

getCountries();