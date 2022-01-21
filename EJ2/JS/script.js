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

            $("table").append("<tr id=fila"+ filas +"><td id= "+ imagenes +">Hola</td></tr>");
            
            imagenes++;
        }else{
            $("#fila"+filas).append("<td id= "+ imagenes +">Hola</td>");
            imagenes++;
        }
    })

    /*$(".eliminar").click(function () {

        if(imagenes%7==0 && imagenes>=0){

            filas--;
            imagenes--;
            $("table").remove("#"+ imagenes);
            $("table").remove("#fila"+ filas);
            
        }else{
            imagenes--;
            $("#fila"+filas).remove("#"+ imagenes);

        }
    })*/

});