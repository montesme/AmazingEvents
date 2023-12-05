const data = {
    currentDate: "2023-01-01",
    events: [
        {
            _id: "639c723b992482e5f2834be9",
            name: "Collectivities Party",
            image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
            date: "2022-12-12",
            description:
                "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
            category: "Food Fair",
            place: "Room A",
            capacity: 45000,
            assistance: 42756,
            price: 5,
            __v: 0,
        },
        {
            _id: "639c723b992482e5f2834beb",
            name: "Korean style",
            image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
            date: "2023-08-12",
            description:
                "Enjoy the best Korean dishes, with international chefs and awesome events.",
            category: "Food Fair",
            place: "Room A",
            capacity: 45000,
            price: 10,
            __v: 0,
            estimate: 42756,
        },
        {
            _id: "639c723c992482e5f2834bed",
            name: "Jurassic Park",
            image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
            date: "2022-11-02",
            description:
                "Let's go meet the biggest dinosaurs in the paleontology museum.",
            category: "Museum",
            place: "Field",
            capacity: 82000,
            price: 15,
            __v: 0,
            assistance: 65892,
        },
        {
            _id: "639c723c992482e5f2834bef",
            name: "Parisian Museum",
            image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
            date: "2023-11-02",
            description:
                "A unique tour in the city of lights, get to know one of the most iconic places.",
            category: "Museum",
            place: "Paris",
            capacity: 8200,
            estimate: 8200,
            price: 3500,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf1",
            name: "Comicon",
            image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
            date: "2022-02-12",
            description:
                "For comic lovers, all your favourite characters gathered in one place.",
            category: "Costume Party",
            place: "Room C",
            capacity: 120000,
            assistance: 110000,
            price: 54,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf3",
            name: "Halloween Night",
            image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
            date: "2023-02-12",
            description: "Come with your scariest costume and win incredible prizes.",
            category: "Costume Party",
            place: "Room C",
            capacity: 12000,
            estimate: 9000,
            price: 12,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf5",
            name: "Metallica in concert",
            image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
            date: "2023-01-22",
            description: "The only concert of the most emblematic band in the world.",
            category: "Music Concert",
            place: "Room A",
            capacity: 138000,
            estimate: 138000,
            price: 150,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf7",
            name: "Electronic Fest",
            image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
            date: "2022-01-22",
            description:
                "The best national and international DJs gathered in one place.",
            category: "Music Concert",
            place: "Room A",
            capacity: 138000,
            assistance: 110300,
            price: 250,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834bf9",
            name: "10K for life",
            image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
            date: "2022-03-01",
            description: "Come and exercise, improve your health and lifestyle.",
            category: "Race",
            place: "Soccer field",
            capacity: 30000,
            assistance: 25698,
            price: 3,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834bfb",
            name: "15K NY",
            image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
            date: "2023-03-01",
            description:
                "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
            category: "Race",
            place: "New York",
            capacity: 3000000,
            price: 3,
            __v: 0,
            estimate: 2569800,
        },
        {
            _id: "639c723d992482e5f2834bfd",
            name: "School's book fair",
            image: "https://i.postimg.cc/Sst763n6/book1.jpg",
            date: "2023-10-15",
            description: "Bring your unused school book and take the one you need.",
            category: "Book Exchange",
            place: "Room D1",
            capacity: 150000,
            estimate: 123286,
            price: 1,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834bff",
            name: "Just for your kitchen",
            image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
            date: "2022-11-09",
            description:
                "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
            category: "Book Exchange",
            place: "Room D6",
            capacity: 130000,
            assistance: 90000,
            price: 100,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834c01",
            name: "Batman",
            image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
            date: "2022-3-11",
            description: "Come see Batman fight crime in Gotham City.",
            category: "Cinema",
            place: "Room D1",
            capacity: 11000,
            assistance: 9300,
            price: 225,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834c03",
            name: "Avengers",
            image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
            date: "2023-10-15",
            description:
                "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
            category: "Cinema",
            place: "Room D1",
            capacity: 9000,
            estimate: 9000,
            price: 250,
            __v: 0,
        },
    ],
};

let carousel = document.getElementById("carouselPrincipal");

let eventosFuturos = filtrarArregloMayores(data.events, data.currentDate)

let buscador = document.getElementById("inputBusqueda");
buscador.addEventListener("keyup", e => {
  let nuevoArreglo = filtrarPalabra(data.events, e.target.value);
  pintarTarjetas(nuevoArreglo, carousel)
})

let contenedorCheckbox = document.getElementById("checkboxContainer");


let arregloCategory = Array.from(new Set(data.events.map(evento => evento.category)))
 console.log(arregloCategory);

pintarCheckbox(arregloCategory, contenedorCheckbox);




contenedorCheckbox.addEventListener("change", e => {
    let checked = Array.from(document.querySelectorAll("input[type=checkbox]:checked")).map(checkbox => checkbox.value);
    
    if (checked.length === 0) {
      pintarTarjetas(data.events, carousel); // Mostrar todas las tarjetas originales
    } else {
      let nuevoArreglo = filtrarCheckbox(data.events, checked);
      pintarTarjetas(nuevoArreglo, carousel);
    }
  });
filtrarCheckbox(data,events, checked)

pintarTarjetas(eventosFuturos, carousel)

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
            </div>`;

            contenedorItem.appendChild(card);
        }
    
        contenedor.appendChild(contenedorItem);
        contenedorPrincipal.appendChild(contenedor);
    }
    
    divPrincipal.appendChild(contenedorPrincipal);
    }

function filtrarArregloMayores(arreglo, fecha, pasado) {
    let nuevoArreglo = []
    for (let i = 0; i < arreglo.length; i++) {
        if (pasado == true) {
            if (arreglo[i].date > fecha) {
                nuevoArreglo.push(arreglo[i]) 
        }
    } else {
        if (arreglo[i].date < fecha) {
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
  
  function pintarCheckbox(arregloCategory,contenedorCheckbox) {
    for (let j = 0; j < arregloCategory.length; j++) {
        if (arregloCategory[j] != undefined) {
        let checkbox = document.createElement("div");
        checkbox.classList.add("form-check", "form-check-inline");
        checkbox.innerHTML = `
          
        <input class="form-check-input" type="checkbox" id="${arregloCategory[j]}" value="${arregloCategory[j]}">
          <label class="form-check-label" for="${arregloCategory[j]}">${arregloCategory[j]}</label>
          
          `;
          contenedorCheckbox.appendChild(checkbox);
  
      }
  
    }
    
  }
  
  function filtrarCheckbox(arreglo, arreglochecked) {
    let arregloFinal = arreglo.filter(event => arreglochecked.includes(event.category));
    console.log(arregloFinal);
    return arregloFinal;
  }