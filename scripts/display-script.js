document.addEventListener("DOMContentLoaded", function() {
    const pokémonData = JSON.parse(sessionStorage.getItem("pokémonData"));
    const pokémonContainer = document.getElementById("pokémonInfo");

    if (!pokémonData) {
        pokémonContainer.innerHTML = "<h1>No Pokémon data found</h1>";
        return;
    }
    
    const name = pokémonData.name;
    const id = pokémonData.id;
    const height = pokémonData.height;
    const weight = pokémonData.weight;
    const baseXp = pokémonData.base_experience;
    const types = pokémonData.types;
    const abilities = pokémonData.abilities;
    const stats = pokémonData.stats;
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    let baseStats = {};
    stats.forEach(stat => {
        baseStats[stat.stat.name] = stat.base_stat;
    });

    document.getElementById("pokémon-image").src = imageUrl;    
    document.getElementById("pokémon-image").alt = `Picture of ${name}`;
    document.getElementById("pokémon-id").textContent = `#${id}`;
    document.getElementById("pokémon-name").textContent = name;
    document.getElementById("pokémon-size").textContent = `${weight / 10} kg | ${height * 10} cm`;
    document.getElementById("pokémon-xp").textContent = `Base Experience: ${baseXp} XP`;
    document.getElementById("pokémon-hp").style.width = `${(baseStats["hp"] / 255) * 100}%`;
    document.getElementById("pokémon-hp").textContent = baseStats["hp"];
    document.getElementById("pokémon-attack").style.width = `${(baseStats["attack"] / 190) * 100}%`;
    document.getElementById("pokémon-attack").textContent = baseStats["attack"];
    document.getElementById("pokémon-defense").style.width = `${(baseStats["defense"] / 230) * 100}%`;
    document.getElementById("pokémon-defense").textContent = baseStats["defense"];
    document.getElementById("pokémon-special-attack").style.width = `${(baseStats["special-attack"] / 194) * 100}%`;
    document.getElementById("pokémon-special-attack").textContent = baseStats["special-attack"];
    document.getElementById("pokémon-special-defense").style.width = `${(baseStats["special-defense"] / 230) * 100}%`;
    document.getElementById("pokémon-special-defense").textContent = baseStats["special-defense"];
    document.getElementById("pokémon-speed").style.width = `${(baseStats["speed"] / 200) * 100}%`;
    document.getElementById("pokémon-speed").textContent = baseStats["speed"];
    
    const typesList = document.getElementById("pokémon-types");
    types.forEach(type => {
        const li = document.createElement("li");
        li.textContent = type.type.name;
        typesList.appendChild(li);
    });

    const abilitiesList = document.getElementById("pokémon-abilities");
    abilities.forEach(ability => {
        const li = document.createElement("li");
        li.textContent = ability.ability.name;
        abilitiesList.appendChild(li);
    });
});