function celPFah(cel) {
    return (cel * 9/5) + 32;
}
function fahPCel(fah) {
    return (fah - 32) * 5/9;
}
const cel = 30;
const fah = 100;
console.log(`${cel}°C é igual a ${celPFah(cel).toFixed(2)}°F`);
console.log(`${fah}°F é igual a ${fahPCel(fah).toFixed(2)}°C`);
