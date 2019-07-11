let aluno = prompt('Qual o nome do aluno');
let materia = prompt('Qual o nome da matéria');
let nota = prompt('E qual foi a nota');

let media = 6;

if (Number(nota) >= media) {
    alert('Parabéns, o aluno '+ aluno + ' foi aprovado na matéria ' + materia)

}
else if (Number(nota) >= media - 0.5) {
    alert('O aluno '+ aluno + 'foi aprovado na matéria ' + materia + ' pelo sistema');
}
else{

    alert('Parece que a nota do aluno ' + aluno + ' na matéria ' + materia + ' foi insuficiente');
}