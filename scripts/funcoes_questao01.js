function invnum(numero) {
    return parseInt(numero.toString().split('').reverse().join(''), 10);
}
const num = 54321
console.log(`Número inicial ${num}| Número invertido ${invnum(num)}`);
