//Trabalhando com condicionais (Conflito de maior idade)

console.log("Destinos diponíveis: \n")

const listaDestinos = new Array(
    `Cianorte`,
    `Jussara`,
    `Umuarama`,
    `Terra Boa`
)
//Compra

const idadeComprador = 15
const acompanhado = false
let passagem = false

if(idadeComprador >= 18 || acompanhado == true){
    console.log("Selecione qual o destino: \n")
    console.log(listaDestinos)
    passagem = true
}else {
    console.log(`Você não tem idade suficiente para acessar este sistema! \n \n`)
    passagem = false
}

//Embarque

console.log("Embarque: \n")

if(idadeComprador >= 18 || acompanhado == true && passagem == true){
    console.log("Boa Viagem!")
}else {
    console.log("Não é possível embarcar \n")
}

