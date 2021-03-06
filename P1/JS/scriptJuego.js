window.onload = main;

var turnos = 0;
var gana = false
var jugador;
var jugador1;
var jugador2;
var modo;
var victoriasJ1;
var victoriasJ2;
var bRevancha;
var btnRevancha;
var marcador;

function main() {

    $("#tablero").fadeToggle(3000);

    btnRevancha = document.getElementById("revancha");
    btnRevancha.addEventListener("click", revancha);
    marcador = document.getElementById("marcador");

    var infoPartida = JSON.parse(sessionStorage.getItem("informacionPartida"));
    
    jugador1 = infoPartida[0];
    jugador2 = infoPartida[1];
    modo = infoPartida[2];
    victoriasJ1 = infoPartida[3];
    victoriasJ2 = infoPartida[4];
    bRevancha = infoPartida[5];
    
    if(bRevancha>0){

        marcador.innerHTML= jugador1 + " (" + victoriasJ1 + " - " + victoriasJ2 + ") " + jugador2;
        marcador.style.display="inline-block";

    }

    var tabla = document.getElementById("tabla");
    var filas = 3;
    var columnas = 3;
    document.getElementById("turno").innerHTML= "Turno de: "+jugador1 ;

    for (var i = 0; i < filas; i++) {

        var fila = tabla.insertRow();
        for (var j = 0; j < columnas; j++) {
            
            var celda = fila.insertCell();
            celda.id=i+''+j;
            celda.innerHTML="<img src='Resources/blanco.gif'>";
            celda.className="vacio";
            celda.addEventListener('click', compruebaOcupada);
            
        }
    }

}

function compruebaOcupada(){
    if(gana==false && turnos<9){
        ocupada = this.className;
        if(ocupada !="vacio"){
            alert("Esa celda ya esta ocupada");
        }else{
            turno(this.id);
            
        }
    }else{
        if(gana==false){
            alert("Ya se acabo el juego, ha habido un empate");
        }else{
            alert("Ya se acabo el juego, ha ganado: "+ jugador);
        }
    }
}

function turno(id){
    
    var celdaSeleccionada = document.getElementById(id);
    
    if(turnos%2==0){
        
        document.getElementById("turno").innerHTML= "Turno de: " + jugador2;

        if (modo=="clasico") {
            celdaSeleccionada.innerHTML="<img src='Resources/equis.jpg' style='display:none'>";
            $("#"+id+" img").fadeIn(1000)
        }else if(modo=="informatica"){
            celdaSeleccionada.innerHTML="<img src='Resources/mouse.png' style='display:none'>";
            $("#"+id+" img").fadeIn(1000)        
        }
        
        celdaSeleccionada.className=jugador1;

    }else{
        document.getElementById("turno").innerHTML= "Turno de: " +jugador1;
        if (modo=="clasico") {
            celdaSeleccionada.innerHTML="<img src='Resources/circulo.jpg' style='display:none'>";
            $("#"+id+" img").fadeIn(1000)        
        }else if(modo=="informatica"){
            celdaSeleccionada.innerHTML="<img src='Resources/keyboard.png' style='display:none'>";
            $("#"+id+" img").fadeIn(1000)        
        }
        celdaSeleccionada.className=jugador2;
        
    }

    compruebaGana();
    
    
}

function compruebaGana(){

    var celda00 = document.getElementById("00");
    var celda01 = document.getElementById("01"); 
    var celda02 = document.getElementById("02");

    var celda10 = document.getElementById("10");
    var celda11 = document.getElementById("11");
    var celda12 = document.getElementById("12");

    var celda20 = document.getElementById("20");
    var celda21 = document.getElementById("21");
    var celda22 = document.getElementById("22");

    if(celda00.className!="vacio" && celda00.className == celda01.className && celda00.className == celda02.className){
        
        ganado();

    }else if(celda10.className!="vacio" && celda10.className == celda11.className && celda10.className == celda12.className){
        
        ganado();

    }else if(celda20.className!="vacio" && celda20.className == celda21.className && celda20.className == celda22.className){

        ganado();

    }else if(celda00.className!="vacio" && celda00.className == celda10.className && celda00.className == celda20.className){

        ganado();

    }else if(celda01.className!="vacio" && celda01.className == celda11.className && celda01.className == celda21.className){

        ganado();

    }else if(celda02.className!="vacio" && celda02.className == celda12.className && celda02.className == celda22.className){

        ganado();

    }else if(celda00.className!="vacio" && celda00.className == celda11.className && celda00.className == celda22.className){

        ganado();

    }else if(celda02.className!="vacio" && celda02.className == celda11.className && celda02.className == celda20.className){

        ganado();

    }else{
        turnos+=1;

        if (turnos>=9) {

            $("#tablero").animate({ opacity: 'toggle', height: 'toggle' }, 1000);

            document.getElementById("turno").innerHTML="Ha habido un empate";

            btnRevancha.style.display="inline-block";
        }
    }
    
}

function ganado() {

    gana = true;
    quienGana();

}

function quienGana(){

    if(turnos%2==0){
        
        jugador=jugador1;

    }else{
        
        jugador=jugador2;
        
    }

    $("#tablero").animate({ opacity: 'toggle', height: 'toggle' }, 1000);

    document.getElementById("turno").innerHTML="Ha ganado: "+ jugador;

    btnRevancha.style.display="inline-block";

}

function revancha() {

    btnRevancha.style.display="none";
    bRevancha++;
    gana = false;
    turnos = 0;

    if(jugador==jugador1){
        victoriasJ1++;
    }else if(jugador==jugador2){
        victoriasJ2++;
    }

    var infoPartidaR = [
        jugador1,
        jugador2,
        modo,
        victoriasJ1,
        victoriasJ2,
        bRevancha
    ]

    jugador="";

    document.getElementById("tabla").innerHTML="";
    sessionStorage.setItem("informacionPartida", JSON.stringify(infoPartidaR));
    main();

}