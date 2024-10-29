const num = [1, 2, 3, 2, 2, 4, 4,4, 4, 5, 6, 2];
const ocor = {};
num.forEach(num => ocor[num] = (ocor[num] || 0) + 1);
const maisfre = Object.keys(ocor).reduce((a, b) => ocor[a] > ocor[b] ? a : b);
console.log(`O número com mais ocorrências é: ${maisfre}`);
