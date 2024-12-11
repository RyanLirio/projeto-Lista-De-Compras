import { dataEhora } from "./dataEhora.js";
import { listaCompradosVazia } from "./listaCompradosVazia.js";
import { listaVazia } from "./listaVazia.js";

let contador = 0;

const listona = document.getElementById('listona');

export function criarItem(item)
{
    let novoItem = document.createElement('p');

    console.log(item.value)

    const listonaComprados = document.getElementById('listona-comprados');

    const listaItens = document.createElement('li');

    const countainerGeral = document.createElement('div');
    countainerGeral.classList.add('item-lista-container');
    countainerGeral.id = 'item-' + contador;

    const countainerCompra = document.createElement('div');
    countainerCompra.classList.add('container-compra');

    const countainerCheckBox = document.createElement('div');
    countainerCheckBox.classList.add('checkbox-container');
    
    const inputCheckBox = document.createElement('input');
    inputCheckBox.type = 'checkbox';
    inputCheckBox.id = 'checkbox' + contador++;
    inputCheckBox.classList.add('checkbox-input');

    const labelCheckBox = document.createElement('label');
    labelCheckBox.classList.add('checkbox-1');
    labelCheckBox.setAttribute('for', inputCheckBox.id);

    const checkboxCustomizado = document.createElement('div');
    checkboxCustomizado.classList.add('checkbox-customizado');

    labelCheckBox.addEventListener('click', function(ev)
    {
        const inputCheckBox = ev.currentTarget.querySelector('.checkbox-input');
        const checkboxCustomizado = ev.currentTarget.querySelector('.checkbox-customizado');
        const itemSelecionado = ev.currentTarget.closest('li').querySelector('#novo-item')
        if(inputCheckBox.checked){
            checkboxCustomizado.classList.add('checked');
            listonaComprados.appendChild(listaItens);
            itemSelecionado.style.textDecoration = 'line-through';
            listaCompradosVazia(listonaComprados);
            listaVazia(listona);
        }else
        {
            checkboxCustomizado.classList.remove('checked');
            itemSelecionado.style.textDecoration = 'none';
            listona.appendChild(listaItens);
            listaCompradosVazia(listonaComprados);
            listaVazia(listona);
        
        }
    })

    labelCheckBox.appendChild(inputCheckBox);
    labelCheckBox.appendChild(checkboxCustomizado);

    countainerCheckBox.appendChild(labelCheckBox);

    const countainerAcoes = document.createElement('div');
    countainerAcoes.classList.add('countainer-acoes');

    const countainerBotoes = document.createElement('button');
    countainerBotoes.classList.add('botao-acao')
    const countainerEdit = document.createElement('img');
    countainerEdit.src = 'img/edit.svg';
    countainerEdit.alt = 'Editar item';
    countainerBotoes.addEventListener('click', function()
    {    
        const editValor = prompt('Edite o item desejado da lista');
        novoItem.innerText = editValor;
    });

    const countainerBotoes2 = document.createElement('button');
    countainerBotoes2.classList.add('botao-acao');
    const countainerDelete = document.createElement('img');
    countainerDelete.src = 'img/delete.svg';
    countainerDelete.alt = 'Excluir item';
    countainerBotoes2.addEventListener('click', function()
    {
        listaItens.remove();
        
        listaVazia(listona);        
        listaCompradosVazia(listonaComprados);
    });

    novoItem = document.createElement('p');
    novoItem.id = "novo-item"
    novoItem.classList.add('objetivo')
    novoItem.innerText = item; 

    countainerBotoes2.appendChild(countainerDelete);
    countainerBotoes.appendChild(countainerEdit);
    
    countainerAcoes.appendChild(countainerBotoes2);
    countainerAcoes.appendChild(countainerBotoes);
    
    countainerCompra.appendChild(countainerCheckBox)
    countainerCompra.appendChild(novoItem);
    
    countainerGeral.appendChild(countainerCompra);
    countainerGeral.appendChild(countainerAcoes);

    const horaEdata = dataEhora();
    
    listaItens.appendChild(countainerGeral);
    listaItens.appendChild(horaEdata);

    
    return listaItens;
}