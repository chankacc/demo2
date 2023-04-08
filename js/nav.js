$(document).ready(function(){
    $(".hide").hide();

    $(".open").click(function(){
        $(".hide").slideDown();
        $(".open").hide();
    });

    $(".close").click(function(){
        
        $(".hide").slideUp();
        $(".open").show();
    });

});