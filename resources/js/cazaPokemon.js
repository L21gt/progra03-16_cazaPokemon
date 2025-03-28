const pokemonList = ['Pikachu', 'Charizard', 'Squirtle', 'Yoshi', 'Snorlax'];

for (const pokemon of pokemonList) {
    if (pokemon === 'Yoshi') {
        continue;
    }
    console.log(`¡Atrapaste un ${pokemon}!`);
}

// Output
// ¡Atrapaste un Pikachu!
// ¡Atrapaste un Charizard!
// ¡Atrapaste un Squirtle!
// ¡Atrapaste un Snorlax!