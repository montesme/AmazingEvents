let url = "https://mindhub-xj03.onrender.com/api/amazing"

fetch(url)
    .then(response => response.json())
    .then(data => {
 
let carousel = document.getElementById("carouselPrincipal");

let eventosPasados = filtrarArregloMenores(data.events, data.currentDate)

misFunciones.pintarTarjetas(eventosPasados, carousel)

let buscador = document.getElementById("inputBusqueda");
buscador.addEventListener("keyup", e => {
  let nuevoArreglo = misFunciones.filtrarPalabra(data.events, e.target.value);
  misFunciones.pintarTarjetas(nuevoArreglo, carousel)
})

let contenedorCheckbox = document.getElementById("checkboxContainer");


let arregloCategory = Array.from(new Set(data.events.map(evento => evento.category)))
 console.log(arregloCategory);

misFunciones.pintarCheckbox(arregloCategory, contenedorCheckbox);


contenedorCheckbox.addEventListener("change", e => {
  let checked = Array.from(document.querySelectorAll("input[type=checkbox]:checked")).map(checkbox => checkbox.value);
  
  if (checked.length === 0) {
    misFunciones.pintarTarjetas(data.events, carousel); // Mostrar todas las tarjetas originales
  } else {
    let nuevoArreglo = filtrarCheckbox(data.events, checked);
    misFunciones.pintarTarjetas(nuevoArreglo, carousel);
  }
});
misFunciones.filtrarCheckbox(data,events, checked)


function pintarTarjetas(arregloproductos, divPrincipal) {
    
    let contenedorPrincipal = document.createElement("div");
    contenedorPrincipal.classList.add("carousel-inner");

    divPrincipal.innerHTML = ""
  if (arregloproductos.length == 0) {
    divPrincipal.innerHTML = `<div class="carousel-item active tamañoCard d-flex justify-content-center align-items-center "> 
    <div class= "bg-white text-blue rounded-3 p-2 ps-2 pe-2 m-2 opacity-bg"><h2 class="display-5 fw-bold 
     fst-italic text-center">No hay eventos disponibles para su busqueda</h2></div>

    </div>`

  }

    for (let i = 0; i < arregloproductos.length; i += 4) {
        let contenedor = document.createElement("div");
        contenedor.classList.add("carousel-item");
        if (i === 0) {
            contenedor.classList.add("active");
        }

        let contenedorItem = document.createElement("div");
        contenedorItem.classList.add("d-flex", "justify-content-center");

        for (let j = i; j < i + 4 && j < arregloproductos.length; j++) {
            const event = arregloproductos[j];

            let card = document.createElement("div");
            card.classList.add("card", "tamañocard", "mx-3");

                card.innerHTML = `
          
              <img  class="img" src="${arregloproductos[j].image}" alt="...">
              <div class="card-body ">
                  <h5 class="card-title">${arregloproductos[j].name}</h5>
                  <p class="card-text">${arregloproductos[j].description}</p>
              </div>
              <div class="card-body d-flex justify-content-center align-items-center">
              <div class="mr-3">Price ${arregloproductos[j].price}</div>
             <a href="./details.html" class="btn btn-primary">Details</a>
            </div>
      `;

      contenedorItem.appendChild(card);
    }

    contenedor.appendChild(contenedorItem);
    contenedorPrincipal.appendChild(contenedor);
}

divPrincipal.appendChild(contenedorPrincipal);
}

function filtrarArregloMenores(arreglo, fecha, futuro) {
    let nuevoArreglo = []
    for (let i = 0; i < arreglo.length; i++) {
        if (futuro == true) {
            if (arreglo[i].date < fecha) {
                nuevoArreglo.push(arreglo[i])
            }
        } else {
            if (arreglo[i].date > fecha) {
                nuevoArreglo.push(arreglo[i])
            }

        }
    }
    return nuevoArreglo
}

function filtrarPalabra(arregloEvento, palabraClave) {
    let palabraClaveMinusculas = palabraClave.toLowerCase();
    let arregloFiltrado = arregloEvento.filter(evento => evento.name.toLowerCase().includes(palabraClaveMinusculas) || evento.description.toLowerCase().includes(palabraClaveMinusculas));
    return arregloFiltrado
  }
  
  function pintarCheckbox(arregloCategory,divCheckbox) {
    for (let j = 0; j < arregloCategory.length; j++) {
        if (arregloCategory[j] != undefined) {
        let checkbox = document.createElement("div");
        checkbox.classList.add("form-check", "form-check-inline");
        checkbox.innerHTML = `
          
        <input class="form-check-input" type="checkbox" id="${arregloCategory[j]}" value="${arregloCategory[j]}">
          <label class="form-check-label" for="${arregloCategory[j]}">${arregloCategory[j]}</label>
          
          `;
          divCheckbox.appendChild(checkbox);
  
      }
  
    }
    
  }
  
  function filtrarCheckbox(arreglo, arreglochecked) {
    let arregloFinal = arreglo.filter(event => arreglochecked.includes(event.category));
    console.log(arregloFinal);
    return arregloFinal;
  }

});