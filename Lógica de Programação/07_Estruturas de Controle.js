//Estruturas Condicionais:

// IF = executa o comando SE retornar TRUE:

let ehLigado = false

if(ehLigado){
    console.log("Comando executado")
}

// ELSE = SE NÃO retornar TRUE, executa outro comando: 

let possuiOvos = false
let itensComprados = ""

if(possuiOvos){
    itensComprados = "Leite"
}
else{
    console.log("Passou na sessão de congelados")
    itensComprados = "Lasanha congelada"
}

console.log("Itens comprados: " + itensComprados)

// ELSE IF = verificação intermediária:

let nivelDeFome = 2

if(nivelDeFome === 1 ){
    console.log("Pouca fome")
}
else if(nivelDeFome === 2){
    console.log("Muita fome")
}
else if(nivelDeFome <= 0){
    console.log("Sem fome")
}
else{
    console.log("Esfomeado")
}

//Estruturas de Decisão (Switch - Case):

// SWITCH - CASE = dentro da estrutura switch, caso um case tenha o valor da expressão solicitada, o comando é executado:

let fruta = "Banana"

switch(fruta){
    case "Laranja":
        console.log("Suco de laranja")
    case "Banana":
        console.log("Vitamina de banana")
    case "Maçã":
        console.log("Suco de maçã")
}

// BREAK = para de executar após executar o case solicitado:

switch(fruta){
    case "Laranja":
        console.log("Suco de Laranja")
    break
    case "Banana":
        console.log("Vitamina de banana")
    break
    case "Maçã":
        console.log("Suco de maçã")
    break
}
// DEFAULT = mensagem genérica caso todos os cases falhem:

fruta = "Manga"

switch(fruta){
    case "Laranja":
        console.log("Suco de Laranja")
    break
    case "Banana":
        console.log("Vitamina de banana")
    break
    case "Maçã":
        console.log("Suco de maçã")
    break
    default:
        console.log("Sabor em falta")
}

//Estruturas de Repetição (laços):

// FOR = Declara 3 regras: Início, condição de parada e a forma que o contador aumenta:

for (let contador = 0; contador < 4; contador ++){
    console.log(contador)
}

//OBS! Atenção com contadores que iniciam no zero

let pontosDeVida = 0

for(let i = 0; i < 10; i++){
    pontosDeVida += 1 
    console.log("Tomou poção de vida " + i)
}

console.log(pontosDeVida + " Pontos de vida totais")

// WHILE = Declara a condição de parada e adiciona um incremento no final:

i = 0

while(i < 3){
    console.log("Enquanto")
    i++
}

// DO WHILE = Declara o comando, adiciona um incremento e depois a condição de parada:

contador = 0

do{
    console.log("Faça, enquanto")
    contador++
}while(contador < 3)