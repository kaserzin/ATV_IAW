const num = [1, 7, 5, 4];
const scubos = num.reduce((a, num) => a + Math.pow(num, 3), 0);
console.log(`A soma dos cubos é: ${scubos}`);
