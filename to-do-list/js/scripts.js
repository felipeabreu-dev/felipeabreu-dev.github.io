let btn = document.getElementById('btnAdicionar');
let valorInput = document.getElementById('itarefa');
let areaLista = document.getElementById('areaLista');
let contador = 0;

function addTarefa() {
    //PEGAR VALOR DIGITADO
    let tarefa = valorInput.value;

    //VERIFICAR SE FOR NULO, INDEFINIDO OU VAZIO
    if((tarefa !== '') && (tarefa !== null) && (tarefa !== undefined)) {
        ++contador;

        let novoItem = `<div class="item" id="${contador}">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
            </div>
            <div class="item-nome">
                <p>${tarefa}</p>
            </div>
            <div class="item-btn">
                <button class="delete" onclick="deletar(${contador})"><i class="mdi mdi-delete"></i></button>
            </div>
        </div>`;

        //ADICIONANDO TAREFA NA LISTA
        areaLista.innerHTML += novoItem;

        //ZERANDO O CAMPO DE TAREFA
        valorInput.value = '';
        valorInput.focus();
    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute("class");
    console.log(classe);

    if(classe == "item"){
        item.classList.add("item-clicado");

        var icone = document.getElementById("icone_" + id);
        icone.classList.remove("mdi-circle-outline");
        icone.classList.add("mdi-checkbox-marked-circle");

        item.parentNode.appendChild(item);
    } else {
        item.classList.remove("item-clicado");

        var icone = document.getElementById("icone_" + id);
        icone.classList.remove("mdi-checkbox-marked-circle");
        icone.classList.add("mdi-circle-outline");
    }
}


valorInput.addEventListener("keyup", function(event) {
    //SE CLICOU ENTER(13)
    if(event.keyCode === 13){
        event.preventDefault();
        btn.click();
    }
});