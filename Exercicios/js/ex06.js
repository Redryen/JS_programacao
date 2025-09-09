var n1, n2, n3, n4, frequencia, media;


n1 = parseFloat(prompt("Digite a primeira nota:"));
n2 = parseFloat(prompt("Digite a segunda nota:"));
n3 = parseFloat(prompt("Digite a terceira nota:"));
n4 = parseFloat(prompt("Digite a quarta nota:"));


frequencia = parseFloat(prompt("Digite o percentual de frequência (%):"));


media = (n1 + n2 + n3 + n4) / 4;


if (frequencia >= 75 && media >= 7) {
    alert("Você foi aprovado!");
} else if (frequencia < 75 && media < 7) {
    alert("Você foi reprovado. Motivo: Média e frequência insuficientes.");
} else if (frequencia < 75 && media >= 7) {
    alert("Você está de exame. Motivo: Frequência insuficiente.");
} else {
    alert("Você não foi aprovado. Verifique os critérios.");
}
