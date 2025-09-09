var num1, num2, operacao, resultado;

num1 = parseFloat(prompt("Digite o primeiro número:"));
num2 = parseFloat(prompt("Digite o segundo número:"));

operacao = prompt("Digite a operação desejada: soma, subtração, multiplicação ou divisão").toLowerCase();

if (operacao === "soma") {
    resultado = num1 + num2;
    alert("Resultado da soma: " + resultado);
} else if (operacao === "subtração" || operacao === "subtracao") {
    resultado = num1 - num2;
    alert("Resultado da subtração: " + resultado);
} else if (operacao === "multiplicação" || operacao === "multiplicacao") {
    resultado = num1 * num2;
    alert("Resultado da multiplicação: " + resultado);
} else if (operacao === "divisão" || operacao === "divisao") {
    if (num2 !== 0) {
        resultado = num1 / num2;
        alert("Resultado da divisão: " + resultado);
    } else {
        alert("Erro: divisão por zero não é permitida.");
    }
} else {
    alert("Operação inválida. Tente novamente usando: soma, subtração, multiplicação ou divisão.");
}
