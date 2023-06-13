//Programa de compra de passagem

console.log("\n Destinos diponíveis: \n")

const listaDestinos = new Array(
    `Cianorte`,
    `Jussara`,
    `Umuarama`,
    `Terra Boa`
)

console.log(listaDestinos)
console.log("\n")
//Compra

const idadeComprador = 18
const acompanhado = false
let passagem = false
const destino = "Cianorte"

const podeComprar = idadeComprador >= 18 || acompanhado == true

let contador = 0
let destinoExiste = false
while(contador<4){
    
    if(listaDestinos[contador] == destino){
        destinoExiste = true
        break
    }
    contador += 1;
} 

console.log("Destino existe: ", destinoExiste)

if(podeComprar && destinoExiste){
    console.log("Boa viagem!")
}else{
    console.log("Tivemos um erro")
}

for(let i = 0 ; i <3 ; i++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true
        }
}