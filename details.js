
document.getElementById("title").innerHTML = dataNueva[0].name
document.getElementById("date").innerHTML = dataNueva[0].date
document.getElementById("description").innerHTML = dataNueva[0].description
document.getElementById("category").innerHTML = dataNueva[0].category
document.getElementById("place").innerHTML = dataNueva[0].place
document.getElementById("capacity").innerHTML = dataNueva[0].capacity
document.getElementById("price").innerHTML = dataNueva[0].price
document.getElementById("imagen").src=dataNueva[0].image

if (dataEstimate.length !=0) {
    document.getElementById("assistanceEstimate").innerHTML = `
    <h5 class="card-title d-inline">Estimate:</h5>
    <p id="assistance" class="card-text d-inline"> ${dataEstimate[0].estimate}</p> <br>`
}
if (dataAssistance.length !=0){
    document.getElementById("assistanceEstimate").innerHTML = `
    <h5 class="card-title d-inline">Assistance:</h5>
    <p id="assistance" class="card-text d-inline"> ${dataNueva[0].assistance}</p> <br>`
    
}

document.getElementById("priceRP").innerHTML = dataNueva[0].price
document.getElementById("imagenRP").src=dataNueva[0].image

