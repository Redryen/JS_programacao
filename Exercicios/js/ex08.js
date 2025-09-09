var num1, num2, soma, resultado;

num1 = parseFloat(prompt("Digite o primeiro número:"));
num2 = parseFloat(prompt("Digite o segundo número:"));

soma = num1 + num2;

if (soma > 20) {
    resultado = soma + 8;
    alert("Resultado final (soma + 8): " + resultado);
} else {
    resultado = soma - 5;
    alert("Resultado final (soma - 5): " + resultado);
}
