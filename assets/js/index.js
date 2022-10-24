
URL = 'https://pokeapi.co/api/v2/pokemon/';
URLType = 'https://pokeapi.co/api/v2/type/';

fetch(URL).then(r => r.json()).then( data =>{
    const pokemon = data.results;

    const nombre = pokemon.map((item) => {
       return console.log('El nombre del pokemon es ' + item.name + ' su URL es' + item.url);

     })
})

fetch(URLType).then(r => r.json()).then(d =>{
    const type = d.results;
    const tipo = type.map((item) => {
        return console.log(item.name)
    })

})




