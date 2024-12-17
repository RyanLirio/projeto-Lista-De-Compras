
let contadorHora = 1;
export function dataEhora()
{
    
    const itemData = document.createElement('p');
    itemData.id = 'item-lista-texto' + contadorHora;
    itemData.classList.add('item-lista-texto');
    itemData.innerText = `${new Date().toLocaleDateString("pt-br", {weekday: "long"})}; (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-br", {hour: "numeric", minute: "numeric"})}`
    
    console.log(itemData);
    contadorHora++;
    console.log('hr'+contadorHora);
    return itemData;
}