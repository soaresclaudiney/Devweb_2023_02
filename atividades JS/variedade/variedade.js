
const alunos = [
    {
        nome: "João",
        notas: [8, 7, 6],
        endereco: {
            rua: "Rua A",
            cidade: "Cidade A"
        }
    },
    {
        nome: "Maria",
        notas: [6, 7, 5],
        endereco: {
            rua: "Rua B",
            cidade: "Cidade B"
        }
    },
    {
        nome: "Pedro",
        notas: [9, 8, 7],
        endereco: {
            rua: "Rua C",
            cidade: "Cidade C"
        }
    }
];

function calcularMedia(notas) {
    const total = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return total / notas.length;
}

alunos.forEach(aluno => {
    const media = calcularMedia(aluno.notas);
    const status = media >= 7 ? "aprovado" : "reprovado";
    
    console.log(`Aluno(a) ${aluno.nome} com notas ${aluno.notas.join(', ')} mora em ${aluno.endereco.rua}, ${aluno.endereco.cidade} e teve a média ${media.toFixed(2}, portanto foi ${status}.`);
});