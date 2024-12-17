import { dataEhora } from "./dataEhora.js";
import { listaCompradosVazia } from "./listaCompradosVazia.js";
import { listaVazia } from "./listaVazia.js";
import { excluirItem } from "./excluirItem.js";
import { editarItem } from "./editarItem.js";

let contador = 0;

const listona = document.getElementById('listona');

export function criarItem(item)
{
    let novoItem = document.createElement('p');
    let contadorHora = 0;
    let horaEdata = dataEhora();
    contadorHora++;
    console.log('hr'+contadorHora);
    

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
    countainerBotoes.classList.add('botao-acao');
    countainerBotoes.id = 'editar'+ contadorHora;
    const countainerEdit = document.createElement('img');
    countainerEdit.src = 'img/edit.svg';
    countainerEdit.alt = 'Editar item';
    countainerBotoes.addEventListener('click', function(ev)
    {    
        countainerBotoes.addEventListener('click', function(ev) {    
            // Pega o botão clicado (ev.currentTarget)
            const botaoEditar = ev.currentTarget;
        
            // Sobe para o elemento pai e encontra o elemento <p> que contém o texto do item
            const itemSelecionado = botaoEditar.closest('li').querySelector('#novo-item');
        
            // Chama a função de edição passando o texto correto
            editarItem(itemSelecionado);
        
            // Atualiza a data/hora para este item editado
            const horaEdataEditada = botaoEditar.closest('li').querySelector('.item-lista-texto');
            if (horaEdataEditada) {
                horaEdataEditada.innerText = `${new Date().toLocaleDateString("pt-br", {weekday: "long"})}; (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-br", {hour: "numeric", minute: "numeric"})}`;
            }
        
            console.log("Botão editar clicado para o item com ID:", botaoEditar.id);
        });
    });
        

    const countainerBotoes2 = document.createElement('button');
    countainerBotoes2.classList.add('botao-acao');
    const countainerDelete = document.createElement('img');
    countainerDelete.src = 'img/delete.svg';
    countainerDelete.alt = 'Excluir item';
    countainerBotoes2.addEventListener('click', function(){
        excluirItem(listaItens, listona, listonaComprados);
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
    
    listaItens.appendChild(countainerGeral);
    listaItens.appendChild(horaEdata);

    
    return listaItens;
}