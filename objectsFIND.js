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

button.addEventListener("click", array);    