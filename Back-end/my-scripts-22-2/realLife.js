const axios = require('axios');

const getPokemonApi = async (id) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    return response.data;
}

async function main() {
    const promises = [];
    const initialHour = (Date.now());
    for(let i = 1; i <= 50; i++) {
        const promise = await getPokemonApi(i);
        promises.push(promise);
    }

    pokemons = await Promise.all(promises);
    pokemons.forEach(
        pokemon => console.log(`Pokemon: ${pokemon.name}`)
    );
    const finalHour = Date.now();
    console.log((finalHour - initialHour) / 1000);

}

main();
