import { listaVazia } from "./listaVazia.js";
import { listaCompradosVazia } from "./listaCompradosVazia.js";

export function excluirItem(itemExluido, listona, listonaComprados)
{
    const confirmacao = confirm('Você tem certeza que deseja excluir esse item?');
    if(confirmacao){
        itemExluido.remove();
    }
    listaVazia(listona);        
    listaCompradosVazia(listonaComprados);
}