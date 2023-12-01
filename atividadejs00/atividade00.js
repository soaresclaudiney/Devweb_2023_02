
var codigoPromocional = prompt("Informe o código promocional (DESC1, DESC2, DESC3, DESC4 ou DESC5):");


var valorOriginal = 1000; 


var valorComDesconto;

switch (codigoPromocional) {
    case "DESC1":
        valorComDesconto = valorOriginal * 0.95;
        console.log("5% de desconto");
        break;
    case "DESC2":
        valorComDesconto = valorOriginal * 0.9;
        console.log("10% de desconto");
        break;
    case "DESC3":
        valorComDesconto = valorOriginal * 0.85;
        console.log("15% de desconto");
        break;
    case "DESC4":
        valorComDesconto = valorOriginal * 0.8;
        console.log("20% de desconto");
        break;
    case "DESC5":
        valorComDesconto = valorOriginal * 0.75;
        console.log("25% de desconto");
        break;
    default:
        console.log("Erro: Código promocional inválido");
}

console.log("Valor original: R$ " + valorOriginal);
console.log("Valor com desconto: R$ " + valorComDesconto);


var numeroSorteado = Math.floor(Math.random() * 11);


while (true) {

    var numeroUsuario = prompt("Digite um número de 0 a 10:");


    numeroUsuario = parseInt(numeroUsuario);

    
    if (numeroUsuario === numeroSorteado) {
        console.log("Parabéns, você acertou!");
        break; 
    } else {
        console.log("Tente novamente");
    }
}