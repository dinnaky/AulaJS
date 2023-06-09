// Tag de lista

const listaDestinos = new Array (
    `São Paulo`,
    `Curitiba`,
    `Pindamonhangaba`
)

//Caso queira adicionar um novo elemento a lista

listaDestinos.push(`Cianorte`)
console.log(listaDestinos)

// Remover um elemento (REMOVENDO CURITIBA)

listaDestinos.splice(1,1)
console.log(listaDestinos)

//Exibir elementos específicos 

console.log(listaDestinos[1]) 

//ou

console.log(listaDestinos[1], listaDestinos[2]) 