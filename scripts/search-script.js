const apiUrl = "https://pokeapi.co/api/v2/pokemon";

async function fetchPokémon(name, id) {
    try {
        const response = await fetch(`${apiUrl}/${name || id}`);
        const pokémon = await response.json();

        return pokémon;
    } catch (error) {
        alert("Error fetching pokémon from database.")
        return null;
    }
}

const searchForm = document.getElementById("searchForm");

searchForm.addEventListener("submit", async function(event) {
    event.preventDefault();
    let nameInput = document.getElementById("name").value.toLowerCase();
    let idInput = document.getElementById("id").value;

    if (!nameInput && !idInput) {
        alert("Please enter either a Pokémon name or ID.")
        return;
    }

    const pokémon = await fetchPokémon(nameInput, idInput);
    if (pokémon) {
        sessionStorage.setItem("pokémonData", JSON.stringify(pokémon));
        window.location.href = "details-page.html";
    } else {
        alert("Pokémon not found in database.")
    }
})