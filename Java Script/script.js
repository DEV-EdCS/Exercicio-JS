// Edlan Carvalho Silva

//Questão 1
let esporte = "Futsal"
console.log(esporte)




//Questão 2
let esportes = ["futsal", "vôlei", "basquete", "handebol"];
esportes.forEach(item => console.log(item));



//Questão 3
//para que o terceiro elemento seja exibido no console, precisa-se ser ordenado pelo console.log como mostrado abaixo
var frutas = ["maça", "banana", "laranja", "uva"];
console.log(frutas[2])



//Questão 4
let ladoQ = 3
let resultado = ladoQ * ladoQ
console.log(resultado) //9
console.log(3 ** 2) //9



//Questão 5
let A = 3
let B = 8
let C = 15

let adicao = A + B
console.log(`A soma de A e B é ${adicao}`)

if (adicao < C) {
    console.log("A soma é menor que C")
} else {
    console.log("A soma não é menor que C")
}



//Questão 6
var numero = "5";
var soma = numero + 10;
console.log(soma); //resposta 510



//Questão 7
//Declara as variáveis Y e X com valores exemplo
let Y = 7;
let X = 4;
let Z;

// Verfifica se Y e X são iguais
if (Y === X) {
    // Se forem iguais, soma Y e X
    Z = Y + X;
} else {
    // Caso contrário, mutiplica Y por X
    Z = Y * X;
}
// Exibe o valor de Z no console
console.log(`O valor de Z é ${Z}`);



//Questão 8
for (var contador = 0; contador < 5; contador++) {
    // Alguma lógica aqui
}
console.log(contador); //o console exibe o numero 5

for (let contador = 0; contador < 5; contador++) {
    // Alguma lógica aqui
}
console.log(contador); //o console exibe o numero 5 também




//Questão 9
// Declara uma variável 'numero' com um valor exemplo
let number = 8;
//exibe o antecessor do número
console.log(`Antecessor: ${number - 1}`);
//exibe o sucessor do numero
console.log(`Sucessor: ${number + 1}`);



//Questão 10
var x = 10;

function minhaFuncao() {
    var y = 5;
    console.log(x + y);
}

minhaFuncao(); //o console exibe o numero 15



//Questão 11
var numero = "5";

if (numero === 5) {
    console.log("O número é igual a 5.");
} else if (numero == 5) {
    console.log("O número é igual a 5, com conversão de tipo.")
} else {
    console.log("O número não é igual a 5.");
} //exibe no console: O número é igual a 5, com conversão de tipo.



//Questão 12
//Declara um array de numeros de 1 a 10
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Declara um array vazio para  armazenar os numeros pares
console.log(numeros)



//Questão 13
