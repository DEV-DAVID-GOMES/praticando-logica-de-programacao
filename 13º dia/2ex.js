// 2º Crie uma classe Carro com as seguintes propriedades:

// Nome - qual a equipe do carro Ferrari, Mercedes, McLaren, etc;
// Potencia - número de cavalos de potência do carro;
// VelocidadeMaxima - qual a maior velocidade que o carro pode alcançar;
// Aceleracao - o tempo em segundos que o carro leva para ir de 0 a 100 km/h

//Adicione na classe carro um método que recebe como parâmetro uma distância em metros e calcula o tempo em segundos para percorrer essa distância. Use a seguinte fórmula para o cálculo: 

//  resultado = distância / (VelocidadeMaxima / Aceleracao). 

//    A função deve retornar esse resultado;

let car
let continuar = true

class Carro {
    constructor(nome, potencia, velocidadeMax, aceleracao) {
        this.nome = nome
        this.potencia = potencia
        this.velocidadeMax = velocidadeMax
        this.aceleracao = aceleracao

    }
    percurso(distancia) {

        let resultado = distancia / (this.velocidadeMax / this.aceleracao)
        console.log(`Com potência de: ${this.potencia},\n VelocidadeMaxima de: ${this.velocidadeMax}\n  aceleração: ${this.aceleracao} km/h\n você percorre ${distancia} M em: ${resultado.toFixed(2)} Segundos`)

    }
}

while (continuar) {

    let nome = prompt("Insira qual é a equipe do seu carro:")
    let potencia = parseFloat(prompt("Insira o numero de cavalos de potência do seu carro:"))
    let velocidadeMax = parseFloat(prompt("qual a maior velocidade que o carro pode alcançar:"))
    let aceleracao = parseFloat(prompt("o tempo em segundos que o carro leva para ir de 0 a 100 km/h:"))

    car = new Carro(nome, potencia, velocidadeMax, aceleracao)

    let distancia = parseFloat(prompt("Insira uma distância que deseja percorrer:"))
    car.percurso(distancia)

    continuar = parseInt(prompt("Deseja inserir as informações novamente?\n 1- SIM\n 2- NÃO"))
    if (continuar !== 1) {
        continuar = false;
    }
}

