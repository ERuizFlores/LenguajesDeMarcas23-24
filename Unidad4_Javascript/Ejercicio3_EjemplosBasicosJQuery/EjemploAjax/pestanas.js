$(document).ready(function(){

    $(".tab").click(function(){
        console.log("Has hecho click en una tab");
        $(".tab-content").hide();


        let idPestana = $(this).data("tab");
        console.log("Has pulsado en la tab: "+idPestana);

        if(idPestana == "tab1"){
            console.log("petición http");
            cargarDatosAnimales();
        }

        $("#"+idPestana).show();
    });

});

// De momento los datos se añaden en vez de sustituir los anteriores
function cargarDatosAnimales(){
    $.ajax({
        url: "https://www.zaragoza.es/sede/servicio/mascotas/1006",
        method: "GET",
        dataType: "json",
        success: function(data){
            let gallo = data;
            console.log("datos recibidos: "+gallo.raza);
            let ruta = "https:"+gallo.foto;
            $("#tab1").prepend("<p>"+gallo.raza+"</p>");
            $('#theDiv').prepend('<img id="theImg" alt="foto de Gallo" src="'+ruta+'" />')
            
        },
        error: function(error){
            console.error("Error: "+error);
            $("#tab1").text("Animal no encontrado");
        }
    });
}