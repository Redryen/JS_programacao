var n1, n2, n3, n4, frequencia, media;


n1 = parseFloat(prompt("Digite a primeira nota:"));
n2 = parseFloat(prompt("Digite a segunda nota:"));
n3 = parseFloat(prompt("Digite a terceira nota:"));
n4 = parseFloat(prompt("Digite a quarta nota:"));


frequencia = parseFloat(prompt("Digite o percentual de frequência (%):"));


media = (n1 + n2 + n3 + n4) / 4;


if (media >= 7 && frequencia >= 75) {
    alert("Você foi aprovado!");
} else if (media < 7 && frequencia < 75) {
    alert("Você não foi aprovado. Motivo: Média insuficiente e frequência abaixo do necessário.");
} else if (media < 7) {
    alert("Você não foi aprovado. Motivo: Média insuficiente.");
} else {
    alert("Você não foi aprovado. Motivo: Frequência abaixo do necessário.");
}
