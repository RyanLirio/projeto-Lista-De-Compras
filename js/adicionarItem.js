import { criarItem } from "./criarItem.js";
import { listaVazia } from "./listaVazia.js";

const item = document.getElementById('input-item');


const listona = document.getElementById('listona');


export function adicionarItem(ev)
{
    ev.preventDefault();
 
    const listaItens = criarItem(item.value);

    listona.appendChild(listaItens);

    listaVazia(listona);
}

