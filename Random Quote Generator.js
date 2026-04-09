const quoteBtn = document.getElementById('quoteBtn');
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');





async function fetchCountries() {
   
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode');
    if (!response.ok) throw new Error('TRY AGAIN LATER');

    const data = await response.json();
   

quoteText.textContent = data.joke;
  

}

quoteBtn.addEventListener('click', fetchCountries);