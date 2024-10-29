function palavrapre(frase, palavra) {
    return frase.split(" ").includes(palavra);
}
const frase = "Perdemos para o Campestre";
const palavra = "Ganhamos";
console.log(palavrapre(frase, palavra));