// Você deve criar um sistema de reservas para um hotel:

//      - Um hotel deve possuir: id, nome, categoria, endereço e telefone;
//      - Uma reserva deve possuir: id, id do hotel, nome do responsável,
//        dia de entrada e dia de saída;

// 1 - Crie 2 arrays, um para guardar hotéis e um para reservas

// 2 - Crie funções para cadastrar um hotel e uma reserva;

// 3 - Crie uma função que recebe como parâmetro o id do hotel e exibe na tela todas as reservas neste hotel com as seguintes informações: nome do hotel - nome do responsável da reserva - dia de entrada - dia de saída

// 4 - Crie uma função que recebe como parâmetro o id de uma reserva e exibe no console: nome do hotel - endereço - dia de entrada - dia de saída

// 5 - Crie uma função que recebe como parâmetro o nome de uma pessoa e exibe na tela todas as suas reservas;

// 6 - Crie uma função que recebe como parâmetro uma categoria e retorna um array com todos os hotéis nessa categoria;

// 7 - Crie uma função que recebe o id de um hotel e um telefone como parâmetro, a função deve atualizar o telefone de cadastro com o número recebido;

// 8 - Crie um fluxo de funcionamento para o algoritmo, o usuário deve poder escolher quando encerrar o programa.


// Regras:
// O id não pode ser igual a nenhum outro já existente;
// O dia de entrada não pode ser maior que o de saída;
// No cadastro de uma reserva o id do hotel deve ser válido, ou seja, não deve permitir o cadastro de um hotel que não esteja no sistema;


let hoteis = []
let reservas = []

class Hotel {
    constructor(id, nome, categoria, endereco, telefone) {
        this.id = id
        this.nome = nome
        this.categoria = categoria
        this.endereco = endereco
        this.telefone = telefone
    }
}
function cadastrarHotel() {

    let id = parseInt(prompt("Insira o ID do hotel:"))
    let nome = prompt("Insira o nome do hotel:")
    let categoria = prompt("Insira a categoria do hotel:")
    let endereco = prompt("Insira o endereço do hotel:")
    let telefone = prompt("Insira o telefone do hotel:")

    let novoHotel = new Hotel(id, nome, categoria, endereco, telefone);
    hoteis.push(novoHotel);
}

class Reserva {
    constructor(id, idHotel, nomeResponsavel, diaDeEntrada, diaDeSaida) {
        this.id = id
        this.idHotel = idHotel
        this.nomeResponsavel = nomeResponsavel
        this.diaDeEntrada = diaDeEntrada
        this.diaDeSaida = diaDeSaida
    }
}

function cadastrarReserva() {
    let id = parseInt(prompt("Insira o ID da reserva:"))
    let idHotel = parseInt(prompt("Insira o ID do hotel:"))
    let nomeResponsavel = prompt("Insira o nome do responsável:")
    let diaDeEntrada = parseInt(prompt("Insira o dia entrada:"))
    let diaDeSaida = parseInt(prompt("Insira o dia de saída:"))

    let novaReserva = new Reserva(id, idHotel, nomeResponsavel, diaDeEntrada, diaDeSaida)
    reservas.push(novaReserva)
}

function exibirReservasDoHotel(idHotel) {
    reservas.forEach((reserva) => {
        if (reserva.idHotel === idHotel) {
            console.log(`NOME DO HOTEL: ${hoteis.find(hotel => hotel.id === reserva.idHotel).nome}\n` +
                `NOME DO RESPONSÁVEL DA RESERVA: ${reserva.nomeResponsavel}\n` +
                `DIA DE ENTRADA: ${reserva.diaDeEntrada}\n` +
                `DIA DE SAÍDA: ${reserva.diaDeSaida}`);
        }
    });
}

function exibirReserva(id) {
    reservas.forEach((reserva) => {
        if (reserva.id === id) {
            console.log(`NOME DO HOTEL: ${hoteis.find(hotel => hotel.id === reserva.idHotel).nome}\n ENDEREÇO: ${hoteis.find(hotel => hotel.id === reserva.idHotel).endereco}\n DIA DE ENTRADA: ${reserva.diaDeEntrada}\n DIA DE SAÍDA: ${reserva.diaDeSaida}`)
        }
    })
}

function exibirReservaPorNome(nome) {
    reservas.forEach((reserva) => {
        if (reserva.nomeResponsavel === nome) {
            console.log(`NOME DO HOTEL: ${hoteis.find(hotel => hotel.id === reserva.idHotel).nome}\n` +
                `DIA DE ENTRADA: ${reserva.diaDeEntrada}\n` +
                `DIA DE SAÍDA: ${reserva.diaDeSaida}`);
        }
    });
}