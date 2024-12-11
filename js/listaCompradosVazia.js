const msgListaCompradosVazia = document.getElementById('mensagem-lista-comprados-vazia');
 
export function listaCompradosVazia(lista)
{
    console.log(lista.childElementCount)
    if(lista.childElementCount === 3)//Quando o primeiro elemento é adicionado esta iniciando em 4
        {
            msgListaCompradosVazia.style.display = 'block';
        }else
        {
            msgListaCompradosVazia.style.display = 'none';
        }
}