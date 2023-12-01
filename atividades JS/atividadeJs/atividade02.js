// 5 - Verificando a idade:
 // Exercício 1
let idadeUsuario = parseInt(prompt("Digite sua idade:"));

if (idadeUsuario < 18) {
    console.log("Você é menor de idade.");
} else if (idadeUsuario >= 18 && idadeUsuario < 60) {
    console.log("Você é adulto.");
} else {
    console.log("Você é idoso.");
}
// 6 - Verificando a idade para dirigir:

let idadeDirigir = parseInt(prompt("Digite sua idade:"));

if (idadeDirigir >= 18) {
    console.log("Você pode dirigir.");
} else {
    console.log("Você ainda não pode dirigir.");
}
// 7 - Verificando se o número é positivo, negativo ou zero:

let numero = parseInt(prompt("Digite um número inteiro:"));

if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}
// 8 - Calculando o IMC:
let altura = parseFloat(prompt("Digite sua altura em metros:"));
let peso = parseFloat(prompt("Digite seu peso em quilogramas:"));

let imc = peso / (altura ** 2);

if (imc >= 18.5 && imc <= 24.9) {
    console.log("Seu IMC está dentro do intervalo saudável.");
} else {
    console.log("Seu IMC não está dentro do intervalo saudável.");
}