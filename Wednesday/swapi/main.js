let button = document.querySelector(`button`);
let body = document.querySelector(`body`);

const btnClicked = () => {
    console.log(`Button clicked.`);
    axios.get(`https://swapi.dev/api/planets/?search=Alderaan`)
        .then(res => {
            let residents = res.data.results[0].residents;

            for(let i = 0; i < residents.length; i++) {
                console.log(residents[i]);
                axios.get(residents[i])
                    .then(res => {
                        let name = res.data.name;
                        let h2Tag = document.createElement(`h2`);
                        h2Tag.innerHTML = name;
                        body.appendChild(h2Tag);
                    })
                    .catch(err => console.log(err));
            }
        })
        .catch(err => console.log(err));
}

button.addEventListener(`click`, btnClicked);