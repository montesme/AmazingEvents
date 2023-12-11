import * as misFunciones from "../modulos/funciones.js";
import * as misVariables from "../modulos/variables.js";

document.addEventListener("DOMContentLoaded", function() {
  fetch(misVariables.url)
    .then(response => response.json())
    .then(data => {
      misFunciones.pintarTarjetas(data.events, misVariables.carousel);

      let arregloCategory = Array.from(new Set(data.events.map(event => event.category)));
      console.log(arregloCategory);
      misFunciones.pintarCheckbox(arregloCategory, misVariables.divCheckbox)
      

misVariables.divCheckbox.addEventListener("change", e => {
        let checked = Array.from(document.querySelectorAll("input[type=checkbox]:checked")).map(checkbox => checkbox.value.toLowerCase());

        

        if (checked.length === 0) {
          misFunciones.pintarpintarTarjetas(data.events, carousel); // Mostrar todas las tarjetas originales
        } else {
          let nuevoArreglo = misFunciones.filtrarCheckbox(data.events, checked);
          misFunciones.pintarTarjetas(nuevoArreglo, misVariables.carousel);
        }
      });

      misFunciones.pintarCheckbox(arrayCategory, misVariables.divCheckbox);

      misVariables.search.addEventListener("keyup", e => {
        let checked = Array.from(document.querySelectorAll("input[type=checkbox]:checked")).map(checkbox => checkbox.value.toLowerCase());

        let newArray = misFunciones.filtrarCheckbox(data.events, checked);
        let nuevoArregloBuscar = misFunciones.FitlerText(newArray, e.target.value);
        let buscador = misFunciones.FitlerText(data.events, e.target.value);

        if (newArray == 0) {
          if (buscador.length == 0) {
            misVariables.carousel.innerHTML = `
              <div class="carousel-item active tamañoCard d-flex justify-content-center align-items-center "> 
                <div class= "bg-primary text-white rounded-5 p-3 ps-5 pe-5 m-3 opacity-bg">
                  <h2 class="display-5 fw-bold  fst-italic text-center">There are no events available for this search</h2>
                </div>
              </div>`;
          } else {
            misFunciones.pintarTarjetas(buscador, misVariables.carousel);
          }
        }

        if (newArray != 0) {
          if (nuevoArregloBuscar.length == 0) {
            misVariables.carousel.innerHTML = `
              <div class="carousel-item active tamañoCard d-flex justify-content-center align-items-center "> 
                <div class= "bg-primary text-white rounded-5 p-3 ps-5 pe-5 m-3 opacity-bg">
                  <h2 class="display-5 fw-bold  fst-italic text-center">There are no events available for this search</h2>
                </div>
              </div>`;
          } else {
            misFunciones.pintarTarjetas(nuevoArregloBuscar, misVariables.carousel);
          }
        }
      });
    });
});
