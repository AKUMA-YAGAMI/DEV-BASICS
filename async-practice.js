/*


fetch('https://jsonplaceholder.typicode.com/todos/8')
  .then(response => response.json())
  .then(data => console.log(data))



  fetch('https://jsonplaceholder.typicode.com/todos/8')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  })
  .then(data => console.log(data))
  .catch(error => console.log('Fetch error:', error))




  async function getTodo() {
  try {
    let response1 = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    
    if (!response1.ok) {
      throw new Error('Network response was not ok')
    }
    
    let response2 = await response1.json()
    
    console.log(response2)
    
  } catch (error) {
    console.log('Fetch error:', error)
  }
}

getTodo() */

/*

let button = document.getElementById('button')
let p = document.getElementById('p')


  async function getTodo() {
  try {
    let response1 = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    
    if (!response1.ok) {
      throw new Error('Network response was not ok')
    }
    
    let response2 = await response1.json()
    
   p.innerHTML = `${response2.name} | Type: ${response2.types[0].type.name}`
    
  } catch (error) {
    console.log('Fetch error:', error)
  }



}


button.addEventListener('click', getTodo)
console.log("Button found:", button)

*/

/*


let button = document.getElementById('button')
let p = document.getElementById('p')

async function dogsBreed(){
try{
let response1 = await fetch('https://openlibrary.org/search.json?q=the+hunger+games')

if(!response1.ok){
    throw new Error('FATAL ERROR')
}
let response2 = await response1.json()

console.log(response2)
p.innerHTML = `Just look at this master no hands hahahaha  ${response2.docs[0].title} what else ${response2.docs[0].author_name[0]}`


}

catch(error){
    console.log('error master', error)
}

}

button.addEventListener('click', dogsBreed)



*/

let input = document.getElementById('input')
let button = document.getElementById('button')
let p = document.getElementById('p')


async function noHands(){

try{
let countryName = input.value.toLowerCase()
let response1 = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)

if(!response1.ok){
    throw new Error('look master no hands')}

    let response2 = await response1.json()

    console.log(response2)

    

p.innerHTML = `THIS IS YOUR COUNTRY <br> ${response2[0].name.common} <br> Capital ${response2[0].capital[0] } <br> Area: ${response2[0].area }km2  <br> Borders : ${response2[0].borders} `

    
    
} catch(error){
    console.log('error', error)
}

}

button.addEventListener('click', noHands)




















