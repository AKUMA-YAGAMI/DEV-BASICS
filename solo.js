let input1 = document.getElementById('input')
let button1 = document.getElementById('button1')
let input2 = document.getElementById('input2')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let p = document.getElementById('p')





let products = []


function pushIt(){
    products.push(input1.value)
    p.innerHTML = products
}


button1.addEventListener('click', pushIt)


function eraseFirst(){
    products.shift()
    p.innerHTML = products
}


button2.addEventListener('click', eraseFirst)


function eraseLast(){
    products.pop()
    p.innerHTML = products
}


button3.addEventListener('click', eraseLast)



