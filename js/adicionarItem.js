import { criarItem } from "./criarItem.js";
import { listaVazia } from "./listaVazia.js";

const item = document.getElementById('input-item');


const listona = document.getElementById('listona');


export function adicionarItem(ev)
{
    ev.preventDefault();
 
    
    if(item.value === '')
    {
        alert('Por favor, insira um item válido!');
        return;
    }
    else
    {
        const listaItens = criarItem(item.value);
        item.value = '';

        listona.appendChild(listaItens);

        listaVazia(listona);
    
    }
    

}

