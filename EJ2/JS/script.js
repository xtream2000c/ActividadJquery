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

            $("table").append("<tr id=fila"+ filas +"><td id= "+ imagenes +" style='display:none'><img src='https://loremflickr.com/200/200?timestamp=" + new Date().getTime()+"'></td></tr>");
          
            
            $("#"+imagenes).fadeIn(1000);

            imagenes++;


        }else{
            $("#fila"+filas).append("<td id= '"+ imagenes +"' style='display:none'><img src='https://loremflickr.com/200/200?timestamp=" + new Date().getTime()+"'></td>");
        
            $("#"+imagenes).fadeIn(1000);
            
            imagenes++;

        }
    })

    $(".eliminar").click(function () {

        if (imagenes>=0) {
            
            imagenes--;
            $("#"+imagenes).fadeOut(1000, function () {
                $(this).remove();
            });

            if(imagenes%7==0){

                $("#fila"+ filas).fadeOut(1000, function () {
                    $(this).remove();
                });
                filas--;

            }

        }
        
    })

});