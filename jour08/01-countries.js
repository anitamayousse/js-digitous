const axios = require('axios');
const countriesNames = [];
axios.get("https://restcountries.com/v3.1/all").then(function (res) {
    let countriesNames = res.data.map (function (getCountries) {
    return getCountries.name.common;
})
console.log (countriesNames);   
});

