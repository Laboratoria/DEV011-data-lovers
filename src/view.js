// estas funciones son de ejemplo
//aca disenamos la tarjeta

export const renderItems = (data) => {
  
  //crear lista de Lis
  const ulElement= document.createElement('ul');
  ulElement.setAttribute("id", "tarjetas");
  
  //Recorrer objeto
  data.forEach((pokemon) => {
    //crear el elemento Li
    const liElement = document.createElement("li");
    liElement.innerHTML = 
    `<div class="card">
        <div class="card-side front">
          <div><img src="${pokemon.img}" alt="${pokemon.name}"></div>
        </div>
        <div class="card-side back">
          <div>
          <dl itemscope itemtype="pokemon">
          <dt></dt>
          <dd itemprop="num">${pokemon.num}</dd>
          <dt></dt>
          <dd itemprop="name">${pokemon.name}</dd>
          <dt></dt>
          <dd itemprop="type">${pokemon.type}</dd>
          <dt></dt>
          <dd itemprop="num">${pokemon.generation["num"]}</dd>
        </dl>
          </div>
        </div>
    </div>`;
    liElement.className="tarjetas";
    ulElement.appendChild(liElement);
  });
  ulElement.classList.add("tarjetas");
  return ulElement;
};

export const renderTotalNumberOfPokemons= (numberOfPokemons)=>{
  const liElement = document.createElement("li");
  liElement.id= "count-pokemon";
  liElement.className="caja";
  liElement.setAttribute("data-testid", "count-pokemon");
  liElement.innerText= `Pokemones: ${numberOfPokemons}`;
  return liElement;
}
