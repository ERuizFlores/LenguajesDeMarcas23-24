$(document).ready(function(){
    loadAnimals();
});


function loadAnimals(){
    $.ajax({
        url: "https://www.zaragoza.es/sede/servicio/mascotas?rf=html&start=0&rows=50",
        dataType: "json",
        success: function(data){
            $.each(data.result, function(index, animal){
                let especie = animal.especie;
                if(especie.toLowerCase() == 'felina'){
                    peticionDetalle(animal.id);
                }
            });
        },
        error: function(error){
            console.error("error: "+error);
        }

    });
}

function peticionDetalle(idAnimal){
    $.ajax({
        url: `https://www.zaragoza.es/sede/servicio/mascotas/${idAnimal}?rf=html`,
        dataType: "json",
        success: function(datosAnimal){
            crearTarjetaAnimal(datosAnimal);
        },
        error: function(error){
            console.error(error);
        }
    });
}

function crearTarjetaAnimal(animalInfo){
    
    let animalCard = $('<div>').addClass('animal-card');
    let urlFoto = "https:"+animalInfo.foto;
    let animalImagen = $("<div>").addClass("animal-image");
    animalImagen.html(`<img class='animal-image' src='${urlFoto}' alt='${animalInfo.nombre}'>`);
    let animalDetail = $("<div>").addClass('animal-info');
    animalDetail.html(`
        <h3>${animalInfo.nombre}</h3>
        <p>Raza: ${animalInfo.raza}</p>
        <p>Peso: ${animalInfo.peso}</p>
        <p>Fnac: ${animalInfo.fechaNac}</p>
    `);

    animalCard.append(animalImagen);
    animalCard.append(animalDetail);
    $("#animalContainer").append(animalCard);

}