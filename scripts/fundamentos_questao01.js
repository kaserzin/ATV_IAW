const hoje = new Date();
const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
const dsemana = dias[hoje.getDay()];
const hora = hoje.toLocaleTimeString('pt-BR');
console.log(`Hoje é: ${dsemana}.`);
console.log(`A hora atual é: ${hora}.`);
