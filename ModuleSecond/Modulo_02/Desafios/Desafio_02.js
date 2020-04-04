//https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/desafios/01-2-lidando-com-objetos-e-vetores.md

//Construção e impressão de objetos

/* const data = {
  empresa: {
    nome: 'RocketSeat',
    cor: 'Roxo',
    foco: 'Programação',
    endereço: {
      rua: 'Rua Guilherme Gembala',
      numero: 260,
    }
  }
}
console.log(`A empresa ${data.empresa.nome} está localizada em ${data.empresa.endereço.rua}, ${data.empresa.endereço.numero}`);

 */

//Vetores e objetos

const data = {
  nome: 'Igor',
  idade: 23,
  tecnologias: [
    {
      nome: 'JavaScript',
      especialidade: 'Web',
    },
    {
      nome: 'ReactJs',
      especialidade: 'Native',
    },
  ]
}
console.log(`O usuário ${data.nome} tem ${data.idade} anos e usa a tecnologia ${data.tecnologias[0].nome} com especialidade em ${data.tecnologias[0].especialidade}`);
