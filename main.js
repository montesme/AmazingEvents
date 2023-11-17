const data = {

    events: [
        {
            "_id": 1,
            "image": "food_fair.jpg",
            "name": "Festival of the collectivities",
            "date": "2022-12-12",
            "description": "Enjoy your favorite dishes from different countries in a unique event for the whole family.",
            "category": "Food Fair",
            "place": "Room A",
            "capacity": 45000,
            "assistance": 42756,
            "price": 5
        },
        {
            "_id": 2,
            "image": "outing_to_the_museum.jpg",
            "name": "Art Exhibition",
            "date": "2022-11-02",
            "description": "Let's go to the art museum for an incredible tour to learn about the largest dinosaurs.",
            "category": "Museum",
            "place": "Field",
            "capacity": 82000,
            "assistance": 65892,
            "price": 15
        },
        {
            "_id": 3,
            "image": "costume_party.jpg",
            "name": "Halloween Night",
            "date": "2024-02-12",
            "description": "Come in your scariest costume character to win amazing prizes.",
            "category": "Costume Party",
            "place": "Room C",
            "capacity": 12000,
            "estimate": 9000,
            "price": 12
        },
        {
            "_id": 4,
            "image": "music_concert.jpg",
            "name": "Metallica in concert",
            "date": "2024-01-22",
            "description": "The only concert of the most emblematic band in the world",
            "category": "Music Concert",
            "place": "Room A",
            "capacity": 138000,
            "estimate": 138000,
            "price": 150
        },
        {
            "id": 5,
            "image": "marathon.jpg",
            "name": "10K for life",
            "date": "2022-03-01",
            "description": "Come and exercise, improve your health and lifestyle.",
            "category": "Race",
            "place": "Soccer Field",
            "capacity": 30000,
            "assistance": 25698,
            "price": 3
        },
        {
            "_id": 6,
            "image": "books.jpg",
            "name": "School Book Fair",
            "date": "2022-10-15",
            "description": "Bring your unused school book and bring the one you need.",
            "category": "Book Exchange",
            "place": "Room D1",
            "capacity": 150000,
            "assistance": 123286,
            "price": 1
        },
        {
            "_id": 7,
            "image": "cinema.jpg",
            "name": "Avengers",
            "date": "2023-10-15",
            "description": "Marvel's Avengers 3d premiere the start of an epic saga with your best superheroes",
            "category": "Let's go to the cinema",
            "place": "Room D1",
            "capacity": 9000,
            "estimate": 9000,
            "price": 250
        },
    ]
}

let carousel = document.getElementById("carouselPrincipal")


console.log(data.events[0]);

for (let i = 0; i < data.events.length; i++) {
    if (i < 4) {
        let contenedor = document.createElement("div")
        contenedor.classList.add("carousel-item", "active")
    }
    else {
        let contenedor = document.createElement("div")
        contenedor.classList.add("carousel-item")
    }
}

for (const events of data.events) {
    let card = document.createElement("div")
    card.classList.add("card", "tamañocard")
    card.innerHTML = `
    <div class="card tamañocard">
        <img src="${events.image}" alt="...">
        <div class="card-body">
            <h5 class="card-title">${events.name}</h5>
            <p class="card-text">${events.description}.</p>
         </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${events.category}</li>
            <li class="list-group-item">${events.place}</li>
            <li class="list-group-item">${events.capacity}</li>
            <li class="list-group-item">${events.assistance}</li>
            <li class="list-group-item">${events.price}</li>
        </ul>
        <div class="card-body">
        <a href="#" class="btn btn-primary">Details</a>
        <a href="#" class="btn btn-primary">Another link</a>
        </div>
        </div>`
    console.log(card)
    contenedor.appendChild(card);
    
    //carouselActivo.appendChild(card);
}

