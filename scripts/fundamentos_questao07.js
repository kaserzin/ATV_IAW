const frase = "tome denovo";
const palavras = frase.split(" ");
const nfrase = palavras.map(palavra =>palavra.length < 5 ? palavra.toUpperCase() : palavra.toLowerCase()
).join(" ");
console.log(nfrase);
