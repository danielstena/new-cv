$("document").ready(function(){
    $(".hiddendivhtml").hide();
    $(".hiddendivcss").hide();
    $(".hiddendivjs").hide();

    $(".css").click(function(){
        $(".hiddendivcss").toggle();
        $(".hiddendivhtml").hide();
        $(".hiddendivjs").hide();
    });

    $(".html").click(function(){
        $(".hiddendivcss").hide();
        $(".hiddendivhtml").toggle();
        $(".hiddendivjs").hide();
    });

    $(".js").click(function(){
        $(".hiddendivcss").hide();
        $(".hiddendivhtml").hide();
        $(".hiddendivjs").toggle();
    });
    
});