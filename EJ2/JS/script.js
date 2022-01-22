var filas;

$(document).ready(function(){

    $("body").append("<button class='añadir'>Añadir</button>");
    $("body").append("<button class='eliminar' style = 'margin-left : 10px'>Eliminar</button>");

    $("body").append("<table>");

    filas = 0;
    var imagenes = 0;

    $(".añadir").click(function () {

        if(imagenes%7==0){
            filas++;

            $("table").append("<tr id=fila"+ filas +"><td id= "+ imagenes +"><img src='https://loremflickr.com/200/200'></td></tr>");
            
            imagenes++;
        }else{
            $("#fila"+filas).append("<td id= "+ imagenes +"><img src='https://loremflickr.com/200/200'></td>");
            imagenes++;
        }
    })

    $(".eliminar").click(function () {

        if (imagenes>=0) {
            
            imagenes--;
            $("#"+imagenes).remove();

            if(imagenes%7==0){

                $("#fila"+ filas).remove();
                filas--;

            }

        }
        
    })

});