
const msgListaVazia = document.getElementById('mensagem-lista-vazia');
 
export function listaVazia(listona)
{
    console.log(listona.childElementCount);
    if(listona.childElementCount === 3)//Quando o primeiro elemento é adicionado esta iniciando em 4
        {
            msgListaVazia.style.display = 'block';
        }else
        {
            msgListaVazia.style.display = 'none';
        }
}