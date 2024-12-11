//App para cadastrar compras do mercado e clacular o preço total do carrinho
import { adicionarItem } from "./js/adicionarItem.js";

const botaoSalvarItem = document.getElementById('adicionar-botao');
botaoSalvarItem.addEventListener('click', adicionarItem);

    