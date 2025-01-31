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
}