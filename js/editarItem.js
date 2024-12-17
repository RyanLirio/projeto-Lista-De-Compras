import { dataEhora } from "./dataEhora.js";

const editarItem = (itemEditado) => {

    const editValor = prompt('Edite o item desejado da lista');

    if(editValor != ''){
    itemEditado.innerText = editValor;
    }else
    {
        alert('Digite um item válido!');
    }
}

export {editarItem}
