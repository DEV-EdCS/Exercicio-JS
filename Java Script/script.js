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

function CalcularAreaQ(lado) {
    let area = lado * lado
    console.log(`A area do quadrado de lado ${lado} é ${area}m²`)
}

CalcularAreaQ(3)



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
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Declara um array vazio para  armazenar os numeros pares
const pares = [];

//itera sobre cada elemento do array 'numeros'
numeros.forEach(numeros => {
    //verifica se o numero é par
    if (numeros % 2 === 0) {
        //se for par, adiciona ao array 'pares'
        pares.push(numeros);
    }
});

//exibe o array de numeros pares no console
console.log(pares); // [2, 4, 6, 8, 10]



//Questão 13
//Define um afunção que calcula a média de três notas
function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

//Define uma função que avalia a média e retorna a situação correspondente
function avaliarMedia(media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5) {
        "Recuperação;"
    } else {
        return "Reprovado";
    }
}

//Exemplo de uso das funções
let nota1 = 8;
let nota2 = 7;
let nota3 = 6;
//calcula a média das notas
let media = calcularMedia(nota1, nota2, nota3);
//Avalia a média e obtém a situação
let situacao = avaliarMedia(media);

//exibe a média e a situação no console
console.log(`Média ${media.toFixed(1)}, resultado: ${situacao}`)



//Questão 14
//Define uma função que calcula o IMC dado o peso e a altura
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

//Define uma função que classifca o IMC e retorna a situação correspondente
function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 25) {
        return "Peso ideal";
    } else if (imc < 30) {
        return "Sobrepeso";
    } else if (imc < 40) {
        return "Obesidade";
    } else {
        return "Obesidade mórbida";
    }
}

//Exemplo de uso das funções
let peso = 72; //exemplo de peso
let altura = 1.70; //exemplo de altura
//Calcular o IMC
let imc = calcularIMC(peso, altura);
//classifica o IMC e obtém a situação
let classificacao = classificarIMC(imc);

//exibe o IMC e a situação no console
console.log(`Seu IMC é ${imc.toFixed(1)}, resultado: ${classificacao}`);



//Questão 15
//Declara uma variável 'tabuada' com um valor exemplo
let tabuada = 8; //exemplo de número

//Itera de 1 a 10
for (let i = 1; i <= 10; i++) {
    //calcula o numero fornecido pelo usuario fornecido pelo usuario e o numero atual da iteracao
    let resultado = tabuada * i;
    //exibe o resultado da multiplicacao no console
    console.log(`${tabuada} x ${i} = ${resultado}`);
}



//Questão 16
// Função para ler dois números e realizar a divisão
function dividirNumeros(n1, n2) {
    // Verifica se n2 é zero
    if (n2 === 0) {
        // Lança uma exceção se n2 for zero
        throw new Error("Divisão por zero não é permitida");
    }
    
    // Calcula o resultado da divisão
    let resultado = n1 / n2;
    
    // Exibe o resultado
    console.log(`O resultado de ${n1} dividido por ${n2} é ${resultado}`);
}

// Exemplo de uso da função com tratamento de exceção
try {
    // Suponha que os números fornecidos sejam 10 e 0
    let n1 = 10;
    let n2 = 0;
    
    // Chama a função dividirNumeros
    dividirNumeros(n1, n2);
} catch (e) {
    // Captura e exibe a exceção
    console.log(e.message);
}




//Questão 17
//Define uma função que calcula o custo da viagem
function
    CalcularCustoViagem(distancia) {
    let consumoPorKm = 9.8
    let precoLitroGasolina = 5.24
    let consumoTotal = distancia / consumoPorKm
    return (consumoTotal * precoLitroGasolina * 2).toFixed(2)
}

//Exemplo de uso da função com uma distancia de 2900 km
let distancia = 2900; //exemplo de distancia
let custo = CalcularCustoViagem(distancia)

//exibe o custo de viagem no console
console.log (`Para fazer ${distancia} Km/s você deve abastecer ${custo} R$`)



//Questão 18
 //Define uma  função que calcula o fatorial dde um número
 function calcularFatorial(n) {
    if (n < 0) throw "Número deve ser maior ou igual a 0"
    let fatorial = 1
    for (let i = n; i >0; i--) {
        fatorial *= i
    }
    return fatorial
 }

 //Exemplo de uso da função com o número 5
 let valorN = 5; //exemplo de número
 try {
    let fatorial = calcularFatorial(valorN)
    //Exibe o fatorial no console
    console.log(`O fatorial de ${valorN} é ${fatorial}`)
 } catch (e) {
    console.log(e)
 }



//Questão 19
//Declara um array de numeros
let sequencia = [12, 36, 52, 77]
//Declara um array vazio para  armazenar os numeros mais sete
let maisSete = [];

//itera sobre cada elemento do array 'sequencia'
sequencia.forEach(sequencia => {
    maisSete.push (sequencia + 7)
})

//exibe o array de numeros +7
console.log(maisSete); // [2, 4, 6, 8, 10]



//Questão 20
// Declara variáveis booleanas que indicam se Raimundo possui carteira de identidade ou de motorista
let temCarteiraIdentidade = false; // exemplo de valor
let temCarteiraMotorista = true; // exemplo de valor

// Verifica se Raimundo possui pelo menos uma das carteiras
if (temCarteiraIdentidade || temCarteiraMotorista) {
    console.log("Raimundo pode fazer a prova");
} else {
    console.log("Raimundo não pode fazer a prova");
}

//Exemplo de saída: Com as variáveis definidas como temCarteiraIdentidade = true e temCarteiraMotorista = false, a saída será: Raimundo pode fazer a prova. Se ambas as variáveis fossem false, a saída seria: Raimundo não pode fazer a prova.



//Questão 21
var frutas = ["maça", "banana", "laranja"];
console.log(frutas[3]);
//undefined