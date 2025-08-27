var nome, idade

nome = prompt("Digite o seu nome:")
idade = parseInt(prompt("Digite a sua idade:"))

if(idade>=18){
    alert(nome + " você pode tentar tirar a CNH")
}
else{
    alert(nome + " você não tem idade suficiente para tirar a CNH")
}