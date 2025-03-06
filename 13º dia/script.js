//1º Crie uma classe para representar o seu computador:

// Tipo - desktop ou notebook;
// Processador - nome do seu processador, ex: Ryzen 5
// Video - Integrado ou Dedicado;
// Armazenamento - número em GB de memória, ex: 500 ou 1000;
// MemoriaRam - número em GB de memória, ex: 4, 8 ou 16;
// SSD - True ou False

// Implemente um método nessa classe para exibir as informações no console;


let continuar = true
let computer

class Pc {
    constructor(tipo, processador, video, armazenamento, memoriaRam,ssd) {
        this.tipo = tipo
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.memoriaRam = memoriaRam
        this.ssd = ssd
    }
    configuracoes() {
        console.log(`======= CONFIGURAÇÕES DO SEU PC =======\n Tipo: ${this.tipo}\n Processador: ${this.processador}\n Video: ${this.video}\n Armazenamento: ${this.armazenamento}\n MemoriaRam: ${this.memoriaRam}\n SSD: ${this.ssd}`)
    }
}

while(continuar) {
    let tipo = prompt("Insira o tipo do seu pc:")
    let processador = prompt("Insira o nome do seu processador:")
    let video = prompt("Sua placa de video, Integrado ou Dedicado:")
    let armazenamento = prompt("Numero de GB de memoria do seu PC:")
    let memoriaRam = prompt("numero de GB de memoria RAM do seu PC:")
    let ssd = prompt("Tem SSD:")

    computer = new Pc(tipo, processador, video, armazenamento, memoriaRam, ssd)

    
    continuar = parseInt(prompt("Deseja inserir as informações novamente?\n 1- SIM\n 2- NÃO"))
    if(continuar !== 1) {
        continuar = false;
    }
}

computer.configuracoes()