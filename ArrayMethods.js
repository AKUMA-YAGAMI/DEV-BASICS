/*


let input = document.getElementById("input");
let button = document.getElementById("button");
let p = document.getElementById("p");

let arrayObjects = [
  { nombre: "cebolla", precio: 23 },
  { nombre: "calabaza", precio: 33 },
  { nombre: "limon", precio: 15 },
  { nombre: "manzana", precio: 45 }
];

function array() {
  let value = input.value.toLowerCase();

  let producto = arrayObjects.find(item =>
    item.nombre === value 
  );

  if (producto) {
    p.innerText = `${producto.nombre} cuesta $${producto.precio}`;
  } else {
    p.innerText = "Producto no encontrado";
  }
}

button.addEventListener("click", array);    */


/*

////////////////map()/////////////////////////////

const group = ['Master','Padawan', 'soldier'];

let newMap = group.map(arrayV => 'Hello ' + arrayV);

console.log(newMap)


*/


/*

/////////////////////// filter() /////////////////////

const products = [{name:'onion', price:22.50 }, {name:'cabage', price:12.50 }, {name:'carrot', price:32.50 }]

let newFilter = products.filter(arrayV => arrayV.price > 20)

console.log(newFilter)

*/


/*
//////////////////// find() //////////////////


const products = [{name:'onion', price:22.50 }, {name:'cabage', price:12.50 }, {name:'carrot', price:32.50 }]

let newFind = products.find(arrayV => arrayV.name === 'onion')

console.log(newFind)

*/

////////////////// reduce()  /////////////////////////

const products = [{name:'onion', price:22.50 }, {name:'cabage', price:12.50 }, {name:'carrot', price:32.50 }]

let newReduce = products.reduce((accumulator, arrayV) => {
  return accumulator + arrayV.price
}, 0)

console.log(newReduce)