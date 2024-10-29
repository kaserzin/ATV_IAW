function contvogcon(frase) {
    let vogais = 0;
    let consoantes = 0;
    const letras = frase.toLowerCase();

    for (let char of letras) {
        if ("aeiou".includes(char)) {
            vogais++;
        } else if (char >= 'a' && char <= 'z') {
            consoantes++;
        }
    }

    return { vogais, consoantes };
}
const frase = "Conecta ganhou o tudo";
const resultado = contvogcon(frase);
console.log(`Vogais: ${resultado.vogais}, Consoantes: ${resultado.consoantes}`);