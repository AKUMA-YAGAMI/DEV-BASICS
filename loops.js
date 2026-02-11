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

let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let input = document.getElementById('input')
let p = document.getElementById('p')
let p2 = document.getElementById('p2')
let array = []








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





