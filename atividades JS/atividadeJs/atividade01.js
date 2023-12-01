// 1 – Criando Variáveis:

let var1 = 5;
let var2 = 3;
let soma = var1 + var2;
console.log("Resultado da soma:", soma);


let stringVar = "Olá, mundo!";
console.log("Conteúdo da variável stringVar:", stringVar);

let boolVar = true;
console.log("Valor da variável booleana:", boolVar);

let numVar = 3.1415;
console.log("Valor da variável numérica:", numVar);

// 2 - Utilizando os conceitos apresentados, pergunte ao usuário:

let nomeUsuario = prompt("Qual é o seu nome?");
console.log("Nome do usuário em maiúsculas:", nomeUsuario.toUpperCase());


let idade = prompt("Qual é a sua idade?");
let bairro = prompt("Em qual bairro você mora?");
console.log("Idade:", idade);
console.log("Bairro:", bairro);

let num1 = parseInt(prompt("Digite um número inteiro:"));
let num2 = parseInt(prompt("Digite outro número inteiro:"));
let somaNumeros = num1 + num2;
console.log("Resultado da soma dos números:", somaNumeros);

// 3 - Aplicando métodos:


let meuNome = "Seu Nome Meio Sobrenome";
let nomeModificado = meuNome.replace("Meio", "Sobrenome");
console.log(nomeModificado);

let stringResultado = `Resultado final: ${nomeModificado}`;
console.log(stringResultado);

// 4 - Calculando o preço com desconto:  

let preco = 100.0;
let desconto = 0.2;
let precoFinal = preco * (1 - desconto);
console.log("Preço final com desconto:", precoFinal);