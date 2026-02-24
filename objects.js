let miPerro = {
    nombre: "chester",
    raza: "braco frances"
}

miPerro.nombre = "chestersito"
miPerro.edad = 13
miPerro.frase = "ven aqui chester "

let araryN = []

araryN.push(miPerro)

let newPhrase = "frase"

console.log(miPerro[newPhrase])

araryN.forEach(item => {
  console.log(item.edad);
});

console.log(araryN)
console.log(miPerro)
