function maior(frase) {
    const palavras = frase.split(" ");
    let maiorPalavra = "";

    for (let palavra of palavras) {
        if (palavra.length > maiorPalavra.length) {
            maiorPalavra = palavra;
        }
    }
    return maiorPalavra;
}
const frase = "Ano que vem tem Currais Novos";
console.log(maior(frase));
