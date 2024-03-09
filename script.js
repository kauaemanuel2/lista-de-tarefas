function adicionarAtividade() {
    let taskInput = document.getElementById('novaTarefa');
    let taskText = taskInput.value;

    if (taskText.trim() !== '') {
        let listaDeTarefas = document.getElementById('listaTarefas');
        let li = document.createElement('li');

        li.innerHTML = '<span>' + taskText + '</span>' +
                       '<button onclick="removerAtividade(this)">Remover</button>' +
                       '<button onclick="completeTask(this)">Feito</button>';

        listaDeTarefas.appendChild(li);

        taskInput.value = '';
    }
}

document.getElementById('novaTarefa').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        adicionarAtividade();
    }
});


function removerAtividade(button) {
    let li = button.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
}

function completeTask(button) {
    let li = button.parentNode;
    let span = li.querySelector('span');
    let doneButton = li.querySelector('.done-button');

    span.style.textDecoration = 'line-through';
    doneButton.disabled = true;
}

