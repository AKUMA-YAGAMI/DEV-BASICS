const form = document.getElementById('searchForm');
const apiChoice = document.getElementById('apiChoice');
const searchInput = document.getElementById('searchInput');
const results = document.getElementById('results');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = searchInput.value.trim();
    if (!query) {
        results.innerHTML = '<p style="color: red;">Please enter a search term.</p>';
        return;
    }

    const selectedApi = apiChoice.value;
    results.innerHTML = '<p>Loading...</p>';

    try {
        if (selectedApi === 'countries') {
            await fetchCountries(query);
        } else if (selectedApi === 'books') {
            await fetchBooks(query);
        } else if (selectedApi === 'pokemon') {
            await fetchPokemon(query);
        }
    } catch (error) {
        console.error(error);
        results.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
});

async function fetchCountries(query) {
    const url = `https://restcountries.com/v3.1/name/${encodeURIComponent(query)}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Country not found');

    const data = await response.json();
    const country = data[0];

    results.innerHTML = `
        <h2>Countries result</h2>
        <p><strong>Name:</strong> ${country.name.common}</p>
        <p><strong>Capital:</strong> ${country.capital?.[0] || 'N/A'}</p>
        <p><strong>Region:</strong> ${country.region}</p>
        <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
        <p><strong>Area:</strong> ${country.area.toLocaleString()} km²</p>
        <p><strong>Borders:</strong> ${(country.borders || []).join(', ') || 'None'}</p>
    `;
}

async function fetchBooks(query) {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Books search failed');

    const data = await response.json();
    const top5 = (data.docs || []).slice(0, 5);
    if (!top5.length) {
        results.innerHTML = '<p>No books found</p>';
        return;
    }

    results.innerHTML = '<h2>Books result</h2>' + top5.map(book => {
        return `
            <div style="margin-bottom: 10px; border-bottom: 1px solid #ccc; padding-bottom: 8px;">
                <p><strong>Title:</strong> ${book.title}</p>
                <p><strong>Author:</strong> ${(book.author_name || ['Unknown']).join(', ')}</p>
                <p><strong>First Published:</strong> ${book.first_publish_year || 'N/A'}</p>
            </div>
        `;
    }).join('');
}

async function fetchPokemon(query) {
    const url = `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(query.toLowerCase())}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Pokémon not found');

    const data = await response.json();

    results.innerHTML = `
        <h2>Pokémon result</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>ID:</strong> ${data.id}</p>
        <p><strong>Height:</strong> ${data.height}</p>
        <p><strong>Weight:</strong> ${data.weight}</p>
        <p><strong>Type(s):</strong> ${data.types.map(t => t.type.name).join(', ')}</p>
        <img src="${data.sprites.front_default || ''}" alt="${data.name}" />
    `;
}
