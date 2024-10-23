function calcAreaTri(a, b, c) {
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

const area = calcAreaTri(2, 3, 4);
console.log(`A área do triângulo é: ${area.toFixed(2)}cm²`);