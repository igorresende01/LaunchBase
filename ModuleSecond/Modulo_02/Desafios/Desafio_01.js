//https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/desafios/01-1-primeiros-passos-com-js.md

//Calculo de IMC

const nome = "Igor";
const peso = 88.4;
const altura = 1.90;

const imc = peso / (altura * altura);

console.log(imc >= 30 ? `${nome} está acima do peso` : `${nome} não está acima do peso`);

//Calculo de Aposentadoria

const nomepessoa = "IgorH";
const sexo = 'M';
const idade = 23;
const contribuicao = 2;

const anosContribuicao = idade + contribuicao;

const homemAposenta = sexo == 'M' && contribuicao >= 35 && anosContribuicao >= 95;
const mulherAposenta = sexo == 'F' && contribuicao >= 30 && anosContribuicao >= 90;

if (homemAposenta || mulherAposenta) {
    console.log(`${nome}, pode aposentar`);
} else {
    console.log(`${nome}, não pode aposentar`);
}