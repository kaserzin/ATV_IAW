const frase = "Jogar o paraibano de volei";
const palavras = frase.split(" ");
const stam = palavras.reduce((soma, palavra) => soma + palavra.length, 0);
console.log(stam);
