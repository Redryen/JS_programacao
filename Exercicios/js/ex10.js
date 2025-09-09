var numero;

numero = parseInt(prompt("Digite um número inteiro:"));

if (numero < 0) {
    numero = numero + 100;
    alert("Número negativo somado com 100: " + numero);
} else {
    alert("Número positivo ou zero: " + numero);
}
