/* 
Ejemplos de bucles y manipulación de arrays
*/

// Ejemplo de bucle for tradicional
/*
let array = [1, 2, 3, 4, 5];

for(let i=0; i < array.length; i++){
    console.log(array[i]);
}
*/

// Ejemplo de forEach
/*
let array = [1, 2, 3, 4, 5];

array.forEach(item => {
    // hacer algo con el item
    console.log(item);
});
*/

// Código interactivo para manejo de películas
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let input = document.getElementById('input');
let p = document.getElementById('p');
let p2 = document.getElementById('p2');

// Array de películas con sintaxis corregida
let array = [
    {nombre:"spiderman", year:2008, gender:"acción"},
    {nombre:"spiderman 2", year:2009, gender:"acción"},
    {nombre:"spiderman 3", year:2010, gender:"acción"},
    {nombre:"avengers", year:2012, gender:"acción"}
];

// Función para mostrar todas las películas
function add() {
    let result = "";
    
    array.forEach(item => {
        result = result + item.nombre + " (" + item.year + ") - " + item.gender + "<br>";
    });
    
    p.innerHTML = result;
}

// Función para agregar una nueva película
function push(){
    // Validar que el input no esté vacío
    if(input.value.trim() !== ""){
        // Creamos un objeto con los valores por defecto para año y género
        const nuevaPelicula = {
            nombre: input.value,
            year: 2023, // Año por defecto
            gender: "desconocido" // Género por defecto
        };
        array.push(nuevaPelicula);
        input.value = "";
    }
}

// Función para mostrar una película aleatoria
function displaycart(){
    if(array.length > 0){
        let randomIndex = Math.floor(Math.random() * array.length);
        let randomPelicula = array[randomIndex];
        p2.innerHTML = 'PELÍCULA QUE TOCA HOY: ' + randomPelicula.nombre + 
                      ' (' + randomPelicula.year + ') - ' + randomPelicula.gender;
    }
}

// Event listeners
button1.addEventListener('click', add);
button2.addEventListener('click', push);
button3.addEventListener('click', displaycart);

// Segunda sección: Ejemplo con objetos individuales
let señorAnillos = {
    nombre: "The Lord of the Rings: The Fellowship of the Ring",
    gender: "aventura",
    year: 2001
};

let matilda = {
    nombre: "Matilda",
    gender: "familia",
    year: 1996
};

let ninjaT = {
    nombre: "Teenage Mutant Ninja Turtles",
    gender: "acción",
    year: 1990
};

let peliculasClasicas = [señorAnillos, matilda, ninjaT];

// Función para mostrar una película clásica aleatoria
function randomMovie() {
    if(peliculasClasicas.length > 0){
        let randomIndex = Math.floor(Math.random() * peliculasClasicas.length);
        let randomValue = peliculasClasicas[randomIndex];
        let allValues = Object.values(randomValue);
        p.innerText = "PELÍCULA CLÁSICA: " + allValues.join(" - ");
    }
}

button1.addEventListener("click", randomMovie);

// Mensaje inicial
p.innerHTML = "Haz clic en los botones para interactuar con las películas";