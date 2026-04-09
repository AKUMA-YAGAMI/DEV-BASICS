const button = document.getElementById('catBtn');
const factDisplay = document.getElementById('catFact');


async function fetchCatFact(){
    try {
        const response1 = await fetch('https://catfact.ninja/fact');

      if (!response1.ok) {
            throw new Error('Error fetching cat fact');
        }        const data = await response1.json()
    factDisplay.textContent = `LOOK SENSEI NO HANDS${data.fact}`;

    } catch (error) {
        console.error('Error fetching cat fact:', error);
    }
       
    
}

button.addEventListener('click', fetchCatFact);