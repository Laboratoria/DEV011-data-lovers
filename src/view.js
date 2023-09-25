//debe tener todas las funciones que utilizara para renderizar los elementos dinámicamente.
//Función obligatoria:renderItems(data): esta función recibe el arreglo de data para renderizar los elementos de cada item, y debería volver un elemento DOM o un string de HTML.

export const renderItems = (data) => {
    const container = document.getElementById("root");
    container.innerHTML = " ";
  
    // Iterar sobre los datos y generar las tarjetas
    data.films.forEach((item) => {
      // Crear un elemento li para cada tarjeta
      const card = document.createElement("li");
      card.classList.add("card");
  
      // Crear un elemento imagen y establecer su src y alt
      const image = document.createElement("img");
      image.src = item.poster;
      image.alt = item.title;
  
      // Crear un elemento título y establecer su contenido
      const title = document.createElement("h2");
      title.textContent = item.title;
  
      // Crear un elemento año de publicación y establecer su contenido
      const year = document.createElement("h3");
      year.textContent = item.release_date;
  
      // Añadir la imagen, título y año al elemento tarjeta
      card.appendChild(image);
      card.appendChild(title);
      card.appendChild(year);
  
      // Añadir la tarjeta al contenedor
      container.appendChild(card);
    });
  }
  
    
 
  


