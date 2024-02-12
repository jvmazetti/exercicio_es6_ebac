class Alunos {
    constructor(nomeDoAluno, notaDoAluno) {
        this.nome = nomeDoAluno;
        this.nota = notaDoAluno;
    }
}

const alunosAprovados = [];

if(this.nota >= 6){
    alunosAprovados = alunosAprovados + this.nome;
    console.log(`Os alunos ${alunosAprovados} foram aprovados pois tiveram nota maior ou igual a 6`)
}