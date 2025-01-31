import apiHandler from "./apiHandler.js";
import pagination from "./pagination.js";
import characters from "./characters.js";

pageSetup();

function pageSetup() {
    fetchCharacters();
    paginationSetup();
    
    document.querySelector('#searchInput').addEventListener('input', updateAutoCompleteList);
}