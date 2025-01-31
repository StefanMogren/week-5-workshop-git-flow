const characters = [];

function getCharacters() {
    return characters;
}

function pushCharacter(character) {
    characters.push(character);
}

export default { getCharacters, pushCharacter };