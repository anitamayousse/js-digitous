const axios = require("axios");

    axios.get(" https://pokeapi.co/api/v2/pokemon/ditto").then(function (catchPokemon) {
        console.log(`id: ${catchPokemon.data.id}, name: ${catchPokemon.data.name}`);
  });