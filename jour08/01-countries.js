var axios = require('axios');
var countriesNames = [];
function getCountries() {
axios.get("https://restcountries.com/v3.1/all").then(function (res) {
		console.log(res);
    console.log(res.data.name[0]);
})};

console.log(getCountries);


