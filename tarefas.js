// Declaracao  das váriaveis de entrada de informações do front
let inputNovaTarefa = document.querySelector('#inputNovaTarefa');
let btnAddTarefa = document.querySelector('#btnAddTarefa');
let listaTarefas = document.querySelector('#listaTarefas');

// 2 eventos, caso o usuário de enter, ou clica no icone, ele cria um novo objeto
inputNovaTarefa.addEventListener('keypress', (e) => {
        
    if(e.keyCode == 13) {
        // objeto tarefa com id randomico
        let tarefa = {
            nome: inputNovaTarefa.value,
            id: gerarId(),
        }
        adicionarTarefa(tarefa);       
    }
});

btnAddTarefa.addEventListener('click', (e) => {
    
    let tarefa = {
        nome: inputNovaTarefa.value,
        id: gerarId(),
    }
    adicionarTarefa(tarefa);   
});



// funcao que gera ID para o objeto
function gerarId(){
    return Math.floor(Math.random() *3000);
}



function adicionarTarefa(tarefa) {
    // criando a váriavel li que vai receber a tarefa e devolver através do metodo appenChild
    let li = criarTagLI(tarefa);
    listaTarefas.appendChild(li);
    // deixando vago o input para a proxima tarefa
    inputNovaTarefa.value = '';


}

// Criando elementos conforme as classes do HTML (lista de tarefas) usando DOM
function criarTagLI(tarefa) {    
    let li = document.createElement('li');
    li.id = tarefa.id;

    let span = document.createElement('span');
    span.classList.add('textoTarefa');
    span.innerHTML = tarefa.nome;

    let div = document.createElement('div');    
    
    let btnExcluir = document.createElement('button');
    btnExcluir.classList.add('btnAcao');
    btnExcluir.innerHTML = '<i class="fa fa-trash"></i>';
    btnExcluir.setAttribute('onclick', 'excluir('+tarefa.id+')');
    
    // elementos filhos
    div.appendChild(btnExcluir);
    li.appendChild(span);
    li.appendChild(div);

    
    return li;
}

function excluir(idTarefa) {
    let confirmacao = window.confirm('Tem certeza que deseja excluir esta tarefa?');
    if (confirmacao) {
        let li = document.getElementById(''+ idTarefa + '');
        if(li) {
            listaTarefas.removeChild(li);
        }
    }

}

