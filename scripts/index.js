$(".activeMode").hide();

// active the active mode when the button is clicked

$("#activateButton").click(() => {
    // if the active tab is hidden show it
    if($(window).width() > 650){
        // for desktop
        if ($(".activeMode").is(":hidden"))
        {
            $(".activeMode").fadeIn();
            // change the background color of the button to match it
            $("#activateButton").css("background-color", "hsl(217, 19%, 35%)");
        }else {
            // if the active tab is  not hidden hide it
            $(".activeMode").fadeOut();
            // change the background color back
            $("#activateButton").css("background-color", "hsl(210, 46%, 95%)");
    
        }
    }else {
        //for mobile
        if (!$("#lower").is(":hidden")){
            // when is not in active state
            $("#lower").hide();
            $(".main").addClass("activeMainMobile");
            $(".activeMobile").css("display", "flex");
            $(".activeMobile").append($(".share"));
            $(".share > button").css("background-color", "hsl(210, 46%, 95%)");
            // adding the socials
            $(".activeMobile").prepend($(".activeMode"));
            $(".activeMode").addClass("activeModeMobile");
            $(".activeMode").css("height", "100%");
            $("#arrowHead").hide();
            $(".activeMode").fadeIn();
        }else {
            // when in active state
            $("#lower").show();
            $(".main").removeClass("activeMainMobile");
            $(".activeMobile").css("display", "none");
            $("#lower").append($(".share"));
            $(".share").append($(".activeMode"));
            $("#arrowHead").show();
            $(".activeMode").removeClass("activeModeMobile");
            $(".activeMode").hide();
        }
    }
   
})