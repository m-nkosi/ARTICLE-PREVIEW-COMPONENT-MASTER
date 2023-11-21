$(".activeMode").hide();

$("button").click(()=> {
        // if the active Mode is hidden
        if ($(".activeMode").is(":hidden"))
        {
            $(".activeMode").fadeIn();
        }else {
            $(".activeMode").fadeOut();
        }
})
// making sure that if the you cle
