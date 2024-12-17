import { excluirItem } from "./excluirItem.js";
const msgListaCompradosVazia = document.getElementById('mensagem-lista-comprados-vazia');
 
export function listaCompradosVazia(lista)
{
    console.log(lista.childElementCount)
    if(lista.querySelectorAll('li').length === 0)
        {
            msgListaCompradosVazia.style.display = 'block';
        }else
        {
            msgListaCompradosVazia.style.display = 'none';
        }
}