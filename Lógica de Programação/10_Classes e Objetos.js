/*
Classes:
    São a padronização do formato de uma estrutura de dados
    Podem guardar funções
Objetos
    Mantém a padronização da forma (classe), implementando os valores das propriedades
    Tem métodos inteligentes (funções próprias)
*/

//Criando a classe:

class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }
    
    assar(){
        console.log(`Assando bolo de ${this.saborDaMassa}`)
    }
}
/*
OBS!
    Uma classe deve sempre possuir um método constructor (atribui valores dentro da classe)
    Utilizar "this" para criar e chamar variáveis dentro da classe
    Dentro da classe, declarar funções não precisam da palavra "function"
*/

//Instanciando objetos:

let boloFesta = new formaDeBolo("chocolate", "Nutella")
let boloPremium = new formaDeBolo("baunilha", "coco")

boloFesta.escrever()
boloPremium.assar()
boloPremium.escrever()
