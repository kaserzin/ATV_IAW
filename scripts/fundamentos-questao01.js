const data = new Date();
const dSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

const diSemana = dSemana[data.getDay()];
const hAtual = data.toLocaleTimeString('pt-BR');

console.log(`Hoje é: ${diSemana}.`);
console.log(`A hora atual é: ${hAtual}.`);
