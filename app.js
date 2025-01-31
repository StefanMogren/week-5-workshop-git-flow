import apiHandler from "./apiHandler.js";
import pagination from "./pagination.js";
import characters from "./characters.js";

function paginationSetup() {
    const prevRef = document.querySelector('#prevPageBtn');
    const nextRef = document.querySelector('#nextPageBtn');

    prevRef.addEventListener('click', () => {
        pagination.previousPage();
        renderCharacters();
    });
    
    nextRef.addEventListener('click', () => {
        pagination.nextPage();
        renderCharacters();
    });
pageSetup();

function pageSetup() {
    fetchCharacters();
    paginationSetup();

    document
        .querySelector("#searchInput")
        .addEventListener("input", updateAutoCompleteList);
}

async function fetchCharacters() {
    let nextUrl = "https://swapi.dev/api/people/";

    while (nextUrl) {
        const data = await apiHandler.fetchData(nextUrl);

        data.results.forEach((character) => {
            characters.pushCharacter(character);
        });

        nextUrl = data.next;
    }

    pagination.setNmbrOfPosts(characters.getCharacters().length);
    renderCharacters();
}
