$(document).ready(function () {

    $("#imagen").fadeIn(1000)
    
})


function cambiaImagen(imagen) {

    $("#imagen").fadeOut(1000, function () {
        $("#imagen").attr("src", imagen.src);
    }).fadeIn(1000);

}