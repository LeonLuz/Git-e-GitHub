//Declarando uma função:

function getData(){
    console.log("Pegando dados")
}

function saveData(){
    console.log("Salvando dados")
}

//Chamando uma função:

main()

//Função main é responsável por chamar outras funções

function main(){
    getData()
    saveData()
}

// Funções com parâmetro:

torrar("pão de forma") //múltiplos parâmetros

function torrar(pao,){
    console.log("Torrada feita com " + pao)
}

//OBS! Variáveis criadas dentro da função só existem dentro do escopo da função

//Declarar valor default (genérico):

pagar(4.90)

function pagar(preco, nome = "Cliente"){ //múltiplos parâmetros
    console.log("Pedido de " + nome)
    console.log("O valor é R$" + preco)
}
/*OBS!
    - Colocar o parâmetro com valor genérico por último
    - Interpolação de stings = Stings com valores que serão substituídos por variáveis (sem precisar concatenar)
    - String deve estar entre ``(crases) e variáveis ${variável}*/

createStringConnection("db_products", "felipe", "9876")

function createStringConnection(dataBaseName, user, pass){
    console.log(`connect:DBCONNECT;user=${user};pass=${pass};initial_dataBase=${dataBaseName}`)
}

//Funções com retorno: guardar o produto de uma função em uma variável

let resultado = soma(5, 10)

console.log(`O resultado dessa função é ${resultado}`)
function soma(numA, numB){
    return numA + numB
}

//OBS! Uma função só pode retornar um valor ou um objeto

//Exemplo de função:
let userName = getFirstName("Carlos-Almeida-Junior", "-")
console.log("Welcome " + userName)

userName = getFirstName("Felipe Silva Gonzales", " ")
console.log("Welcome " + userName)

function getFirstName(name, splitChar = " "){
    let firstName = name.split(splitChar)[0]
    return firstName
}