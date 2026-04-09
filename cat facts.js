const button = document.getElementById('catBtn');
const factDisplay = document.getElementById('catFact');


async function fetchCatFact(){
    try {
        const response1 = await fetch('https://catfact.ninja/fact');
        const data = await response1.json()
       let (!response1.ok) {
            throw new Error('Error fetching cat fact');
        }

    } catch (error) {
        console.error('Error fetching cat fact:', error);
    }

    factDisplay.textContent = data.fact;
}

button.addEventListener('click', fetchCatFact);