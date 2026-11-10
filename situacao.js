//decidindo a situação de um aluno;

const nota1 = 6.0;
const nota2 = 7.0;
const media = (nota1 + nota2)/2;

//O que é estrutura de condição (condicionais if/ else, else if)

let situacao;

if(media >= 7){
    situacao = "Você está aprovado"
}
else if(media >= 5){
    situacao = "Você está de recuperação"
}
else{
    situacao = "Você está reprovado"
}

console.log (`Media ${media.toFixed(1)}: ${situacao}`)