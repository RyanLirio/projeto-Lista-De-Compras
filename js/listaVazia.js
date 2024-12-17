import { excluirItem } from "./excluirItem.js";
const msgListaVazia = document.getElementById('mensagem-lista-vazia');
 
export function listaVazia(listona)
{
    console.log(listona.childElementCount);
    if(listona.querySelectorAll('li').length === 0)
        {
            msgListaVazia.style.display = 'block';
        }else
        {
            msgListaVazia.style.display = 'none';
        }
}