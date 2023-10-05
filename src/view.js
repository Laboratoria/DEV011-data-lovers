export const renderItems = (data) => {
   let cards = "";   data.forEach((element) => {
    cards += ` 
    <div class= "marcoCartas"> 
    <div class="card">
    <h2>${element.name.common}</h2>
    <p><b>Capital:</b> ${element.capital}</p>
    <img src="${element.flags.svg}" alt="Bandera de ${element.name.common}" />
      <div class="info">
        <p> <b>Población:</b> ${element.population}</p>
        <p><b>Área:</b> ${element.area} <b>km² </b></p>
       <!-- Agrega más información aquí según tus necesidades -->
       </div>
     </div>
    </div>
     `;
   });
  return cards;
 };


// export const renderItems = (data) => {
//   let cards = "";
//   data.forEach((element) => {
//     cards += `
//       <div class="marcoCartas">
//         <div itemscope itemtype = "data">
//         <div class="card">
//           <h2>${element.name.common}</h2>
//           <p itemprop="capital">Capital: ${element.capital}</p>
//             <img src="${element.flags.svg}" alt="Bandera de ${element.name.common}" />
//             <div class="info">
//           <p itemprop="population">Población:${element.population}</p>
//               <p itemprop="area"> Área:${element.area} <b>km²</p>
//             </div>  
//           </dl>
//         </div>
//       </div>
//     `;
//   });
//   return cards;
// };

