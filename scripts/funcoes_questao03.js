function maioremenor(lista) {
    const maior = Math.max(...lista);
    const menor = Math.min(...lista);
    return { maior, menor };
}
const numeros = [1, 2, 3, 4, 5, 6, 7];
const resultado = maioremenor(numeros);
console.log(`Maior: ${resultado.maior}, Menor: ${resultado.menor}`);
