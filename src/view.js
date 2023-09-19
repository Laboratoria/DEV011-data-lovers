// estas funciones son de ejemplo
//aca disenamos la tarjeta

export const renderItems = (data) => {
  //crear lista de Lis
  const ulElement= document.createElement('ul')
  //Recorrer objeto
  data.forEach((pokemon) => {
    //crear el elemento Li
    const liElement = document.createElement("li");
    liElement.innerHTML = `
    <img src="${pokemon.img}" alt="${pokemon.name}">
    <dl itemscope itemtype="pokemon">
      <dt>Nombre:</dt>
      <dd itemprop="name">${pokemon.name}</dd>
      <dt>Número:</dt>
      <dd itemprop="num">${pokemon.num}</dd>
      <dt>Tipo:</dt>
      <dd itemprop="type">${pokemon.type}</dd>
      <dt>Altura:</dt>
      <dd itemprop="height">${pokemon.size.height}</dd>
      <dt>Peso:</dt>
      <dd itemprop="weight">${pokemon.size.weight}</dd>
    </dl>
    `;
    ulElement.appendChild(liElement);


    //console.log(`Número: ${pokemon.num}`);
    //console.log(`Nombre: ${pokemon.name}`);
    //console.log(`Generación: ${pokemon.generation.name}`);
    // Puedes imprimir más propiedades aquí según tus necesidades
  });
  //console.log(liElements[0].name);
  return ulElement;
};
