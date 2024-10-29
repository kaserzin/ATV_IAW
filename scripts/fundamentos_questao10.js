const nomec = "Gilberto Amauri Godoy Filho";
const [pnome, ...resto] = nomec.split(' ');
const iniciais = resto.reverse().map(nome => nome[0] + '.').join(' ');
console.log(`${iniciais} ${pnome}`);
