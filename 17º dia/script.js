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

class Reserva {
    constructor(id, idHotel, nomeResponsavel, diaDeEntrada, diaDeSaida) {
        this.id = id
        this.idHotel = idHotel
        this.nomeResponsavel = nomeResponsavel
        this.diaDeEntrada = diaDeEntrada
        this.diaDeSaida = diaDeSaida
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

function cadastrarReserva() {
    let id = parseInt(prompt("Insira o ID da reserva:"))
    let idHotel = parseInt(prompt("Insira o ID do hotel:"))
    let nomeResponsavel = prompt("Insira o nome do responsável:")
    let diaDeEntrada = parseInt(prompt("Insira o dia entrada:"))
    let diaDeSaida = parseInt(prompt("Insira o dia de saída:"))

    if (reservas.some(reserva => reserva.id === id)) {
        console.log("Erro: ID da reserva já existe!");
        return;
    }

    if (!hoteis.some(hotel => hotel.id === idHotel)) {
        console.log("Erro: ID do hotel não encontrado!");
        return;
    }

    if (diaDeEntrada >= diaDeSaida) {
        console.log("Erro: O dia de entrada deve ser menor que o dia de saída!");
        return;
    }

    let novaReserva = new Reserva(id, idHotel, nomeResponsavel, diaDeEntrada, diaDeSaida)
    reservas.push(novaReserva)
    console.log("Reserva cadastrada com sucesso!");
}

function exibirReservasDoHotel(idHotel) {
    let hotel = hoteis.find(hotel => hotel.id === idHotel);

    if (!hotel) {
        console.log("Erro: Hotel não encontrado!");
        return;
    }

    let reservasHotel = reservas.filter(reserva => reserva.idHotel === idHotel);

    if (reservasHotel.length === 0) {
        console.log("Nenhuma reserva encontrada para este hotel.");
        return;
    }

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
    let reserva = reservas.find(reserva => reserva.id === id);

    if (!reserva) {
        console.log("Erro: Reserva não encontrada!");
        return;
    }

    let hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);
    console.log(`NOME DO HOTEL: ${hotel.nome}\n ENDEREÇO: ${hotel.endereco}\n DIA DE ENTRADA: ${reserva.diaDeEntrada}\n DIA DE SAÍDA: ${reserva.diaDeSaida}`);

}


function exibirReservaPorNome(nome) {
    let reservasUsuario = reservas.filter(reserva => reserva.nomeResponsavel === nome);

    if (reservasUsuario.length === 0) {
        console.log("Nenhuma reserva encontrada para essa pessoa.");
        return;
    }

    reservasUsuario.forEach((reserva) => {
        let hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);
        console.log(`NOME DO HOTEL: ${hotel.nome}\n` +
            `DIA DE ENTRADA: ${reserva.diaDeEntrada}\n` +
            `DIA DE SAÍDA: ${reserva.diaDeSaida}`);
    });
}

function exibirHoteisPorCategoria(categoria) {
    return hoteis.filter(hotel => hotel.categoria === categoria);
}

function atualizarTelefoneCadastrado(idHotel, telefone) {
    let hotel = hoteis.find(hotel => hotel.id === idHotel);

    if (!hotel) {
        console.log("Erro: Hotel não encontrado!");
        return;
    }

    hotel.telefone = telefone;
    console.log(`Telefone atualizado para: ${telefone}`);
}

let continuar = true

while (continuar === true) {
    let opcao = parseFloat(prompt("HOTEL DODEV\n 1- Cadastrar hotel\n 2- Cadastrar reserva\n 3- Exibir reserva do hotel\n 4- Exibir informação da reserva\n 5- Exibir todas as suas reservas\n 6- Exibir hoteis por categoria\n 7- Atualizar telefone cadastraddo\n 8- Encerrar programa"))

    switch (opcao) {
        case 1:
            cadastrarHotel()
            break;
        case 2:
            cadastrarReserva()
            break;
        case 3:
            let idHotel = parseInt(prompt("Insira o ID do hotel:"));
            exibirReservasDoHotel(idHotel);
            break;
        case 4:
            let idReserva = parseInt(prompt("Insira o ID da reserva:"));
            exibirReserva(idReserva);
            break;
        case 5:
            let nome = prompt("Insira o nome do responsável:");
            exibirReservaPorNome(nome);
            break;
        case 6:
            let categoria = prompt("Insira a categoria desejada:");
            console.log(exibirHoteisPorCategoria(categoria));
            break;
        case 7:
            let idHotelAtualizar = parseInt(prompt("Insira o ID do hotel:"));
            let telefoneNovo = prompt("Insira o novo telefone:");
            atualizarTelefoneCadastrado(idHotelAtualizar, telefoneNovo);
            break;
        case 8:
            continuar = false;
            console.log("Programa encerrado.");
            break;
        default:
            alert("Opção inválida! Tente novamente.");
    }

}