


const arrayAlunos = [
    {
        "nome": "Paulo",
        "nota": 8
    },
    {
        "nome": "João",
        "nota": 10
    },
    {
        "nome": "Pedro",
        "nota": 5
    },
    {
        "nome": "José",
        "nota": 6
    },
    {
        "nome": "Tiago",
        "nota": 7
    },
    {
        "nome": "Joel",
        "nota": 4
    }


];

let alunosAprovados = arrayAlunos.filter((arrayAlunosnota) => {
    return arrayAlunosnota >= 6;
})

console.log(alunosAprovados)