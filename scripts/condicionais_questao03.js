let somap = 0;
let somai = 0;
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        somap += i;
    } else {
        somai += i;
    }
}
console.log(`Soma dos números pares: ${somap}`);
console.log(`Soma dos números ímpares: ${somai}`);
