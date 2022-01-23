$(document).ready(function(){

    $("#HS").click(function () {
        $("#homer").fadeToggle(1000);
    });

    $("#MS").click(function () {
        $("#marge").slideToggle();
    });

    $("#BS").click(function () {
        $("#bart").toggle();
    });

    $("#LS").click(function () {
        $("#lisa").animate({ opacity: 'toggle', height: 'toggle' }, 3000);
    });

    $("#MSJ").click(function () {
        $("#maggie").slideToggle();
    });
    
});