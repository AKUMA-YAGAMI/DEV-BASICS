console.log("JavaScript is connected!")
let input = document.getElementById('input')
let search = document.getElementById('search')
let filterGenre = document.getElementById('filterGenre')
let topRated = document.getElementById('topRated')
let countGenre = document.getElementById('countGenre')
let watchLater = document.getElementById('watchLater')
let display = document.getElementById('display') 
let watchList = document.getElementById('watchList') 



const movies = [
  {title: 'Inception', year: 2010, genre: 'sci-fi', rating: 8.8},
  {title: 'The Godfather', year: 1972, genre: 'drama', rating: 9.2},
  {title: 'Toy Story', year: 1995, genre: 'animation', rating: 9.3},
  {title: 'Pulp Fiction', year: 1994, genre: 'drama', rating: 8.9},
  {title: 'The Matrix', year: 1999, genre: 'sci-fi', rating: 9.7}
]





function searchM(){ 
    let inputValue = input.value 
    let inputValueLow = inputValue.toLowerCase()


let movieSearch = movies.find(arrayV => arrayV.title.toLowerCase() === inputValueLow)

   if(movieSearch){
display.innerText =`title ${movieSearch.title} year ${movieSearch.year}  genre ${movieSearch.genre} rating ${movieSearch.rating} `}
   else{
    display.innerText =`movie not found`
   }
    
}

search.addEventListener('click', searchM);

function filterIt(){
    let inputValue = input.value
    let inputValueLow = inputValue.toLowerCase()
    let movieSearch = movies.filter(arrayV => arrayV.genre.toLowerCase() === inputValueLow)

if(movieSearch.length > 0) {
    // Map through each product and display them all
    let displayText = movieSearch.map(p => `TITLE : ${p.title} GENRE : ${p.genre}`).join('<br>')
    display.innerHTML = displayText
} else {
    display.innerText = 'no movies found'
}
    
}

filterGenre.addEventListener('click', filterIt);



function filterItRate(){
    let inputValue = Number(input.value)
   
    let movieSearch = movies.filter(arrayV => arrayV.rating >= inputValue)

if(movieSearch.length > 0) {
    // Map through each product and display them all
    let displayText = movieSearch.map(p => `TITLE : ${p.title} RATING : ${p.rating}`).join('<br>')
    display.innerHTML = displayText
} else {
    display.innerText = 'no movies found'
}
    
}

topRated.addEventListener('click', filterItRate);


let whatchLaterMovies = []

function watchLaterM(){
    let inputValue = input.value
    let inputValueLow = inputValue.toLowerCase()
    let addMovie = movies.find(arrayV => arrayV.title.toLowerCase() === inputValueLow)


    whatchLaterMovies.push(addMovie)

    display.innerHTML = whatchLaterMovies.map(parameter => ` TITLE : ${parameter.title} GENRE : ${parameter.genre}`).join('<br>')



}


watchLater.addEventListener('click', watchLaterM);



















