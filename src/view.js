// estas funciones son de ejemplo
export const renderItems = (data) => {
  /*return 'example';*/
  const root = document.createElement("ul");
  data.forEach(pokemon => {
    const li = document.createElement("li");
    li.setAttribute("itemscope", "")
    li.setAttribute("itemtype", "pokemon")
    li.setAttribute("class","tarjetaPokedex")
    const img = document.createElement("img");
    img.setAttribute("itemprop", "imagen")
    const pokenum = document.createElement("pokenum");
    pokenum.setAttribute("itemprop", "numero")
    const n = document.createElement("n");
    n.setAttribute("itemprop","name")
    const t = document.createElement("t");
    t.setAttribute("itemprop", "tipo1")
    const t2 = document.createElement("t2");
    t2.setAttribute("itemprop", "tipo2")
    img.src = pokemon.img;
    pokenum.textContent = `${pokemon.num}`
    n.textContent = `${pokemon.name}`
    t.textContent = `${pokemon.type[0]}`
    if (pokemon.type[1]) {
      t2.textContent = `${pokemon.type[1]}`
    }
    li.appendChild(img);
    li.appendChild(pokenum)
    li.appendChild(n)
    li.appendChild(t)
    li.appendChild(t2)
    root.appendChild(li);
  });
  return root;
};


