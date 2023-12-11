export function pintarTarjetas(arregloproductos, divPrincipal) {
    divPrincipal.innerHTML = "";
    if (arregloproductos.length == 0) {
      divPrincipal.innerHTML = `
        <div class="carousel-item active tamañoCard d-flex justify-content-center align-items-center "> 
          <div class= "bg-white text-blue rounded-3 p-2 ps-2 pe-2 m-2 opacity-bg">
            <h2 class="display-5 fw-bold fst-italic text-center">No hay eventos disponibles para su busqueda</h2>
          </div>
        </div>`;
    }
  
    for (let i = 0; i < arregloproductos.length; i += 4) {
      let contenedor;
      if (i < 4) {
        contenedor = document.createElement("div");
        contenedor.classList.add("carousel-item", "active");
      } else {
        contenedor = document.createElement("div");
        contenedor.classList.add("carousel-item");
      }
  
      let contenedorItem = document.createElement("div");
      contenedorItem.classList.add("d-flex", "justify-content-center");
  
      for (let j = i; j < i + 4; j++) {
        const event = arregloproductos[j];
        if (arregloproductos[j] != undefined) {
          let card = document.createElement("div");
          card.classList.add("card", "tamañocard", "mx-3");
          let imagen = document.createElement("img");
          imagen.classList.add("img");
  
          card.innerHTML = `
            <img  class="img" src="${arregloproductos[j].image}" alt="...">
            <div class="card-body">
              <h5 class="card-title">${arregloproductos[j].name}</h5>
              <p class="card-text">${arregloproductos[j].description}</p>
            </div>
            <div class="card-body d-flex justify-content-center align-items-center">
              <div class="mr-3">Price ${arregloproductos[j].price}</div>
              <a href="./details.html?id=${arregloproductos[j]._id}" class="btn btn-primary">Details</a>
            </div>`;
          contenedorItem.appendChild(card);
        }
      }
      contenedor.appendChild(contenedorItem);
      divPrincipal.appendChild(contenedor);
    }
  }
  
  export function pintarCheckbox(arregloCategory, contenedorCheckbox) {
    for (let j = 0; j < arregloCategory.length; j++) {
      if (arregloCategory[j] != undefined) {
        let checkbox = document.createElement("div");
        checkbox.classList.add("form-check", "form-check-inline");
        checkbox.innerHTML = `
          <input class="form-check-input" type="checkbox" id="${arregloCategory[j]}" value="${arregloCategory[j]}">
          <label class="form-check-label" for="${arregloCategory[j]}">${arregloCategory[j]}</label>`;
        contenedorCheckbox.appendChild(checkbox);
      }
    }
  }
  
  export function filtrarCheckbox(arreglo, arreglochecked) {
    let arregloFinal = arreglo.filter(event => arreglochecked.includes(event.category.toLowerCase));
    console.log(arregloFinal);
    return arregloFinal;
  }


  
  export function filtrarFechas(array, dates, future) {
    let nuevoArreglo = [];
    for (let i = 0; i < array.length; i++) {
      if (future == true) {
        if (array[i].date > dates) {
          nuevoArreglo.push(array[i]);
        }
      } else {
        if (array[i].date < dates) {
          nuevoArreglo.push(array[i]);
        }
      }
    }
    return nuevoArreglo;
  }
  
  export function FitlerText(array, search) {
    let newArray = array.filter(evento => evento.name.toLowerCase().includes(search) || evento.description.toLowerCase().includes(search));
    return newArray;
  }