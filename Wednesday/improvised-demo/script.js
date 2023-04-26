let baseURL = `https://pokeapi.co/api/v2`;
let pokemon = document.querySelector(`#pokeName`);
let searchBtn = document.querySelector(`#pokeSearch`);

let pokedex = document.querySelector(`#pokedex`);

for(let i = 1; i < 1009; i++) {
    let pokeImg2 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

    let imgTag = document.createElement(`img`);
    imgTag.src = pokeImg2;
    pokedex.appendChild(imgTag);
}

const submitHandler = event => {
    event.preventDefault();
    
    axios.get(baseURL +`/pokemon/${pokemon.value}`)
    .then(res => {
        console.log(res.data);

        let img = document.querySelector(`#pokeImg`);
        
        img.src = res.data.sprites.front_default;
        img.alt = `${pokemon.value}-pic`
    })
    .catch(err => console.log(err));
}

searchBtn.addEventListener(`click`, submitHandler);