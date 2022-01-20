$(document).ready(function(){
    for (let i = 0; i < 8; i++) {
        $("#li"+i).mouseenter(function(){
            $("#li"+i).css('margin-left','15px');
            $("#p"+i).show();
        });
      }
    for (let i = 0; i < 8; i++) {
    $("#li"+i).mouseleave(function(){
        $("#li"+i).css('margin-left','0px');
        $("#p"+i).hide();
    });
    }
    
});
    