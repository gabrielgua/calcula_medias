const form = document.getElementById('form-atividades');
const nome = document.getElementById('nome-atividade');
const nota = document.getElementById('nota-atividade');
// const btnSubmit = document.getElementById('btn-submit');
const aprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" /> ';
const reprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" /> ';

const notaMinima = parseFloat(prompt("Digite a nota mínima"));




let tableRows = '';

let atividades = [];
let notas = [];

function addTableRow() {

    if (atividades.includes(nome.value)) {
        alert("Atividade já cadastrada.")
        return;
    }


    addAtividade(nome.value);
    addNota(nota.value);


    let tableRow = '<tr>';
    tableRow += `<td>${nome.value}</td>`;
    tableRow += `<td>${nota.value}</td>`;
    tableRow += `<td>${nota.value >= notaMinima ? aprovado : reprovado}</td>`;
    tableRow += `</tr>`;

    tableRows += tableRow;

    const table = document.querySelector('tbody');
    table.innerHTML = tableRows;

    atualizaMedia();
}

function resetForm() {
    nome.value = '';
    nota.value = '';
}

function addAtividade(atividade) {
    atividades.push(atividade);
}

function addNota(nota) {
    notas.push(parseFloat(nota));
}

function atualizaMedia() {
    const media = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = media.toFixed(2);

    const resultado = document.getElementById('media-final-resultado');

    if (media < notaMinima) {
        resultado.innerHTML = 'Reprovado'
        resultado.classList.add('resultado-reprovado');
        resultado.classList.remove('resultado-aprovado');
        return;
    } 

    resultado.innerHTML = 'Aprovado'
    resultado.classList.remove('resultado-reprovado');
    resultado.classList.add('resultado-aprovado');
}

function calculaMediaFinal() {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }

    return soma / notas.length;
}


form.addEventListener('submit', function(e) {
    e.preventDefault();

    addTableRow();
    resetForm();
})


