const button = document.getElementById('button');
const input = document.getElementById('input');
const div = document.getElementById('div');
const loading = document.getElementById('loading');
const errorMsg = document.getElementById('error');





async function fetchCountry() {
const countryName = input.value;
if(!countryName.trim()) {
    errorMsg.textContent = 'Please enter a country name';
    errorMsg.classList.add('active');
    return;
}

errorMsg.classList.remove('active');
errorMsg.textContent = '';
loading.classList.add('active');
div.innerHTML = '';

const toLowerCaseName = countryName.toLowerCase();
try{

const response1 = await fetch(`https://restcountries.com/v3.1/name/${toLowerCaseName}`);


if(!response1.ok){throw new Error('Country not found. Please check the spelling and try again.')}

const data = await response1.json();
//console.log(data);//
 localStorage.setItem('lastCountry', toLowerCaseName);
loading.classList.remove('active');
div.innerHTML = `NAME :${data[0].name.common}  <br> CAPITAL :${data[0].capital} <br> REGION :${data[0].region} <br> POPULATION :${data[0].population}<br> PICTURE: <img src="${data[0].flags.png}" alt="${data[0].name}">`;
}
catch(error){
loading.classList.remove('active');
errorMsg.textContent = '❌ ' + error.message;
errorMsg.classList.add('active');
console.error('Error fetching country data:', error);
}


 
}

const lastCountry = localStorage.getItem('lastCountry');
if (lastCountry) {
    input.value = lastCountry;
    loading.classList.add('active');
    fetchCountry();
}




button.addEventListener('click', fetchCountry);