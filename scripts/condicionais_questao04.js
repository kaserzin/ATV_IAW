const alunos = [
    ["Rogério", [100, 100, 100]], // é o melhor não tem jeito 
    ["Nicolas", [55, 70, 70]],
    ["João Victor", [85, 80, 75]],
    ["Pedro Lucas", [60, 70, 65]],
    ["Gabriel", [95, 100, 90]],
];
for (let i = 0; i < alunos.length; i++) {
    const nome = alunos[i][0];
    const notas = alunos[i][1];
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    const media = soma / notas.length;
    let status;
    if (media < 70) {
        status = "Reprovado";
    } else {
        status = "Aprovado";
    }
    console.log(`${nome}, média ${media.toFixed(2)}, ${status}.`);
}
