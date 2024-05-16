//Operadores Aritméticos:

let resultado

resultado = 5 + 3

resultado = 8 - 2

resultado = 4 * 6

resultado = 10 / 2

resultado = 10 % 3 //Módulo (resto da divisão)

//Operadores de Comparação:

let x = 100
let y = 10

let igualA = (x == y)

let diferenteDe = (x !== y)

let maiorQue = (x > y)

let menorQue = (x < y)

let maiorOuIgual = (x >= y)

let menorOuIgual = (x <= y)

//Operadores de Atribuição:

let numero = 10

numero += 2 //numero = numero + 2

numero -= 3 //numero = numero - 3

numero * 4 //numero = numero * 4

numero /= 2 //numero = numero / 2

numero %= 3 //numero = numero % 3 (módulo)

//Operadores de Incremento e Decremento:

let contador = 5

contador++
contador--


//Operadores Lógicos:

// AND ( && ) = SE condição 1 E condição 2:

let idade = 18
let vistoVerificado = true
let podeViajar = (idade >= 18) && (vistoVerificado === true)

console.log(podeViajar)

// OR ( || ) = SE condição 1 OU condição 2:

let tempo = "chuva"
let item = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva")

console.log("Nosso personagem pode sair? " + podeSair)

// NOT ( ! ) = nega uma afirmação ou inverte a polaridade da booleana:

tempo = "chuva"
let horario = 8
resultado = !(tempo !== "chuva" && (horario > 6))

console.log(resultado)