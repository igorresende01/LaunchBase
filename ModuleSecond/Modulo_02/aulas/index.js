//Criar um programa que calcula a média das notas entre os alunos
//e envia mensagem do cálculo da média.

const aluno1 = "Igor";
const aluno2 = "João";
const aluno3 = "Carlos";
const nota1 = 10;
const nota2 = 2;
const nota3 = 21;

const media = (nota1+nota2+nota3)/3;

//Se a media for maior que 5 parabenize a turma

if(media >= 5){
    console.log(`As notas medias foram: ${media}`);
}
   else console.log('Que pena!')


