var  n1, n2, n3, n4, result

n1 = parseInt(prompt("Digite a primeira nota:"))
n2 = parseInt(prompt("Digite a segunda nota:"))
n3 = parseInt(prompt("Digite a terceira nota:"))
n4 = parseInt(prompt("Digite a quarta nota:"))

result= (n1 + n2 + n3 + n4)/ 4
if(result>7){
    alert("Você foi aprovado")
}
else{
    alert("Você não foi aprovado")}
