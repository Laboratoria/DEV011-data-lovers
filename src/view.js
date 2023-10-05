//debe tener todas las funciones que utilizara para renderizar los elementos dinámicamente.
//Función obligatoria:renderItems(data): esta función recibe el arreglo de data para renderizar los elementos de cada item, y debería volver un elemento DOM o un string de HTML.

export const renderItems = (data) => {
  const container = document.createElement("ul");
  container.innerHTML = " ";

  // Iterar sobre los datos y generar las tarjetas
  data.forEach((item) => {
    // Crear un elemento li para cada tarjeta
    const card = document.createElement("li");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = item.poster;
    image.alt = item.title;
    image.setAttribute("itemscope", ""); // Agregar el atributo itemscope

    // Crear un elemento título y establecer su contenido
    const title = document.createElement("h2");
    title.textContent = item.title;
    title.textContent = '"' + item.title + '",';
    title.setAttribute("itemprop", "name"); // Agregar el atributo itemprop

    // Crear un elemento director y establecer su contenido
    const director = document.createElement("h3");
    director.textContent = item.director;
    director.setAttribute("itemprop", "director"); // Agregar el atributo itemprop

    // Crear un elemento año de publicación y establecer su contenido
    const year = document.createElement("h4");
    year.textContent = item.release_date;
    year.setAttribute("itemprop", "datePublished"); // Agregar el atributo itemprop

    // Añadir la imagen, título y año al elemento tarjeta
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(director);
    card.appendChild(year);

    // Añadir la tarjeta al contenedor
    container.appendChild(card);
  });
  return container;
};
