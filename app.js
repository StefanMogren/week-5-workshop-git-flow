import apiHandler from "./apiHandler.js";
import pagination from "./pagination.js";
import characters from "./characters.js";

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
