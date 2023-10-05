# Data Lovers

## Índice



* 1. Resumen del proyecto::pestañas_de_marcadores:
* 2. Descripción del proyecto::nota:
* 3. Investigación UX:sabueso_o_espía:
* 4. Aspectos generales:clip:
* 5. Pruebas unitarias:100:
* 6. CheckList:marca_de_verificación_gruesa:
* 7. Recursos:bocadillo_de_diálogo::libros:

***

## 1. Resumen de proyecto

El objetivo de este proyecto es crear una página web responsive que permita a los usuarios interactuar con una base de datos externa que contiene información completa sobre los 251 .Los usuarios podrán filtrar y ordenar estos datos según sus necesidades y tener cálculos estadisticos.se importará y extraerá toda la información necesaria de la base de datos para brindar una experiencia interactiva a los usuarios.

## 2. Descripción de proyecto

La página web está diseñada especialmente para entusiastas de Pokémon. En ella, los usuarios pueden acceder a información esencial sobre sus Pokémon favoritos, así como filtrarlos por tipo. Se ha priorizado la comodidad de los usuarios al incluir opciones de orden alfabético y cálculos estadísticos ascendentes y descendentes para facilitar la búsqueda y comparación de Pokémon.

## 3. Investigación UX

La parte de diseño y experiencia de usuario (UX) de la página web se basó en la información del proyecto. Se crearon varios diseños y filtros para optimizar la forma en que los usuarios interactúan con la plataforma. Esto asegura que la web sea fácil de usar y que los jugadores de Pokémon puedan acceder de manera eficiente a la información que desean, como la búsqueda y clasificación de Pokémon por tipo y estadísticas

3.1 Historias de Usuarios y Criterios de Aceptación :silueta_de_cabeza_parlante::altavoz_sonando:                                                                                                                                                                  H.U 

Filtrar por tipo

Yo como: Entrenador de Pokémon
Quiero: tener la capacidad
Para: poder buscar Pokémones específicos según su tipo y obtener  información detallada sobre ellos.

Criterios de aceptación
Selección de tipos: Debes poder seleccionar uno o varios tipos de Pokémon de la lista proporcionada.
Lista de Pokémon Filtrados: Una vez seleccionados los tipos
los tipos que se pueden seleccionar : Bicho, Dragón, Eléctrico, Hada, Lucha, Fuego, Volador, Fantasma, Planta, Tierra, Hielo, Normal, Veneno, Psíquico, Roca, Acero y Agua, (legendario opcional)
Lista de Pokémon filtrados: Una vez seleccionados los tipos, debo ver una lista de los Pokémon que coinciden con los tipos elegidos.
Información Detallada de Pokémon: Debes poder hacer clic en un Pokémon de la lista para poder ver:nombre,tipo,region,poder,descripcion.
Al hacer clic en un Pokémon de la lista filtrada, quiero poder acceder a información más detallada sobre ese Pokémon.
Restablecer filtros: Debo poder restablecer los filtros con un botón que borre los tipos seleccionados y muestre todos los Pokémon disponibles.

 Ordenar Alfabéticamente

Como: Usuario
Quiero: Tener la opción
Para: Facilitar la búsqueda y visualización de información en orden de ascenso
 criterios de aceptación
Interfaz de usuario: Cuando acceda a la funcionalidad de ordenamiento, debería ver una interfaz clara que le permita seleccionar el campo y el sentido (ascendente o descendente) del ordenamiento.
*Ordenamiento de Lista: Debería poder aplicar el orden por nombre de pokemon
*Insensibilidad a Mayúsculas/Minúsculas: El ordenamiento deberá realizarse teniendo en cuenta las letras del alfabeto (A, B, C, ..., Z) de forma insensible a mayúsculas y minúsculas
ubicacion: la funcion se hara acabo en la barra de herramienta

H.U  promedio de defensa

Yo como: Usuario (entrenador pokemon)
Quiero: conocer el  promedio de defensa cargados de mis Pokémon
Para: optimizar mi estrategia de combate y obtener una idea general de la potencia de un grupo de Pokémon en función
*Criterios de aceptacion
El sistema ordena  de mayor a menor.
El sistema permite filtrar los movimientos cargados por tipo

## 4. Consideraciones generales

* Este proyecto se debe resolver en duplas.
* El rango de tiempo estimado para completar el proyecto es de 3 a 4 Sprints.
* El proyecto será entregado subiendo tu código a
  [GitHub](https://github.com/) (commit/push) y la interfaz será desplegada
  usando [GitHub Pages](https://pages.github.com/).

  
 3.3 Prototipo en Baja Fidelidad :lápiz2::
Una vez definida la estética , se hizo el prototipo de baja fidelidad  realizar las modificaciones pertinentes

![image](https://github.com/Kotte91/DEV011-data-lovers/assets/142257681/da833bf4-b85b-4305-a88d-473759c6f168)

3.4 Prototipo en Alta Fidelidad:

![image](https://github.com/Kotte91/DEV011-data-lovers/assets/142257681/27a8add3-3dc6-4930-8bba-ee4cb26e64ad)

enlace a protofipo de alta fidelidad:
https://www.figma.com/file/cGOxmq6boCoUa18vaFHEA1/WhatsApp-Image-2023-05-03-at-10.15.47-AM?type=design&node-id=219%3A34&mode=design&t=1u3FltwgN400o2iR-1

4. Aspectos Generales :clip::
Este proyecto se realizó en dupla por : Maria olga salcedo royero y Maria jose valdebenito.  https://github.com/Mariasalcedo13/DEV011-data-lovers.gitEl proyecto fue realizado en 4 sprints (semanas).

5. Pruebas Unitarias :100::
Para las pruebas Unitarias (tests) se crearon funciones y su respectiva configuración, de tal manera que se ejecutara el test teniendo en cuenta el comando “npm test”. ahi van captura de los test con los chulitos

![image](https://github.com/Kotte91/DEV011-data-lovers/assets/142257681/f5bcbfc0-7f0b-4061-9642-e0f3fae89e6c)




6. CheckList :marca_de_verificación_gruesa::

Antes de agendar tu Project Feedback con un coach, asegúrate que tu proyecto:

* [ ] Cumple con todos los criterios mínimos de aceptación al ejecutar `npm run test:oas`
* [ ✔ ] Cumple con todas las pruebas _end to end_ al ejecutar `npm run test:e2e`
* [ ✔ ] Cumple con todas las pruebas unitarias al ejecutar `npm run test` y
  que tienen una cobertura del 70% de _statements_ (_sentencias_),
  _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
* [ ✔ ] Esta libre de _errores_ de `eslint` al ejecutar `npm run pretest`
* [ ] Está subido a GitHub y desplegado en GitHub Pages
* Tiene un `README.md` con la siguente:
  - [ ✔ ] _Definición del producto_ clara e informativa
  - [ ✔ ] Historias de usuario
  - [ ✔ ] Un _sketch_ de la solución (prototipo de baja fidelidad) y
  _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  - [ ✔ ] El listado de problemas que detectaste a través de tests
  de usabilidad en el `README.md`
* Tiene un UI que cumple las funcionalidades:
  - [ ✔ ] Muestra lista con datos y/o indicadores
  - [ ✔ ] Permite ordenar data por uno o más campos (asc y desc)
  - [ ✔ ] Permite filtrar data con base en una condición
  - [ ✔ ] Permite limpiar los filtros con un botón
  - [ ✔ ] Es _responsive_

