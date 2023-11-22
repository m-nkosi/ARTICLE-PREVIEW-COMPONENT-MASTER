$(".activeMode").hide();

$("button").click(()=> {
        // if the active Mode is hidden
        if ($(".activeMode").is(":hidden"))
        {
            $(".activeMode").fadeIn();
            $("button").css("background-color", "hsl(217, 19%, 35%)")
        }else {
            $(".activeMode").fadeOut();
            $("button").css("background-color", "hsl(210, 46%, 95%");

        }
})
// making sure that if the you cle
