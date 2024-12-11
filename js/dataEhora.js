export function dataEhora()
{
    const itemData = document.createElement('p');
    itemData.classList.add('item-lista-texto');
    itemData.innerText = `${new Date().toLocaleDateString("pt-br", {weekday: "long"})}; (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-br", {hour: "numeric", minute: "numeric"})}`
    return itemData;
}