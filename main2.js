let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let input = document.getElementById('input')
let p1 = document.getElementById('p1')

let count = 0

function add(){
let value = Number(input.value)

p1.innerHTML =  value + count
count = value
if(value > 20){
   p1.innerHTML = 20 
}
    
}



button1.addEventListener('click', add)


function sub(){
let value = Number(input.value)

p1.innerHTML =  count - value
count = value
if(value < 0){
   p1.innerHTML = 0 
}

}

button2.addEventListener('click', sub)




function reset(){
     p1.innerHTML = 0 
}


button3.addEventListener('click', reset)





