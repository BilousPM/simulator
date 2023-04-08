// import pokemonCardTpl from '../'

const refs = {
    cardContainer: document.querySelector('.js-card-container'),
    searchForm: document.querySelector('.js-search-form')
};

refs.searchForm.addEventListener('submit', hendleSearchSubmit)




function fetchPokemon(pokemonId) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
       return fetch(url)
    .then(response => {
        // розпарсим відповідь з бекенду
        return response.json();
    })
    }

function renderPocemonCard(pokemon) {
    const markup = pokemonCardTpl(pokemon);
    refs.cardContainer.innerHTML = markup;  
}
    
function hendleSearchSubmit(e) {
    e.preventDefault();

    const form = e.currentTargen;
    const searchQuery = form.elements.query.value

    fetchPokemon(searchQuery).then(renderPocemonCard).catch(onFetchError).finally(() => 
        form.reset())
}

function onFetchError(error) {
    alert('Упс, щось пішло не так, введіть будьласка цифру-ідентифікатор')
}