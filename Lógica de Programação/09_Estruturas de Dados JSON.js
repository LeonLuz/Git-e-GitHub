//Sem utilizar estrutura de dados:

let name = "Felipe"
let age = 28
let products = ["Mouse 2xwm", "Teclado mecânico", "Monitor"]
let productsValues = [29.90, 129.99, 899.99]

generateInvoice(name, age, products, productsValues)
function generateInvoice(name, age, products, productsValues){
    console.log("O comprador é " + name)
    console.log("A idade é " + age)
    console.log("---------------------")
    console.log("O produto é " + products[0])
    console.log("O valor é " + productsValues[0])
}

//Utilizando JSON (Javascript Object Notion):

let invoice = {
    name: "Felipe",
    age: 28,
    products: {
        0: ["mouse 2xwm", 29.90],
        1: ["Teclado Mecânico", 129.99],
        2: ["Monitor", 899.99],
        3: ["TV 50 polegadas", 1000.90]
    },
    taxes: 98.90
}

generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("----------------")

    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}: R$ ${productPrice}`)
    }
}