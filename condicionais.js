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

if(idadeComprador >= 18 || acompanhado == true){
    console.log("Selecione qual o destino: \n")
    console.log(listaDestinos)
}else {
    console.log(`Você não tem idade suficiente para acessar este sistema! \n \n`)
}

//Embarque

const passagem = true

console.log("Embarque: \n")

if(idadeComprador >= 18 || acompanhado == true && passagem == true){
    console.log("Boa Viagem!")
}else {
    console.log("Não é possível embarcar \n")
}

