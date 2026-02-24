/* let array = [1, 2, 3, 4, 5]

for(let i=0; i < array.length; i++){
    console.log(array[i])

} */

    /*
let array = [1, 2, 3, 4, 5]

array.forEach(array => {
    // do something with item
})

*/
/*
let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let input = document.getElementById('input')
let p = document.getElementById('p')
let p2 = document.getElementById('p2')
let array = [

{nombre:"spiderman2", year:2008, gender:action}, {nombre:"spiderman2", year:2008, gender:action}, 
{nombre:"spiderman2", year:2008, gender:action}, {nombre:"spiderman2", year:2008, gender:action}, 


]








function add() {
    let result = ""

    array.forEach(item => {
        result = result + item + "<br>"
    })

    p.innerHTML = result
}


button1.addEventListener('click',add)

function  push(){
array.push(input.value)
    input.value = ""
}

button2.addEventListener('click',push)

function  displaycart(){
    
let randomIndex = Math.floor(Math.random() * array.length)
let randomAnimal = array[randomIndex]
p2.innerHTML = 'PELICULA/COMIDA QUE TOCA HOY MY LOVE  '+  randomAnimal

    
}

button3.addEventListener('click',displaycart)





console.log(array)   */


let button1 = document.getElementById('button1')

let p = document.getElementById('p')




let señorAnillos = {
    nombre: "the lord of the rings 1",
    gender:"action",
    year:2002

}

let matilda = {
    nombre: "matilda",
    gender:"drama",
    year: 1999

}

let ninjaT = {
    nombre: "ninjaT",
    gender:"action",
    year: 1997

}





let array = [señorAnillos, matilda, ninjaT
]





function randomMovie () {
    
        let randomIndex = Math.floor(Math.random()* array.length)
        let randomValue = array[randomIndex]
        let allValues = Object.values(randomValue) 
        p.innerText = "THIS IS THE MOVIE     " + allValues ;
}


button1.addEventListener("click",randomMovie)