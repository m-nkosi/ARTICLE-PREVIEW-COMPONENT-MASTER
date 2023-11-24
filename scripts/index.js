$(".activeMode").hide();

var view_width = $(window).width();
var initialState;

if (view_width > 620)
{
    initialState = "mobile";
}else {
    initialState = "desktop";
}
// active the active mode when the button is clicked

$("#activateButton").click(() => {
    // if the active tab is hidden show it
    if($(window).width() > 650){
        // for desktop
        if ($(".activeMode").is(":hidden"))
        {
            // switching on active mode
            $(".activeMode").fadeIn();
            // change the background color of the button to match it
            $("#activateButton").css("background-color", "hsl(217, 19%, 35%)");
        }else {
            // switching off active mode
            $(".activeMode").fadeOut();
            // change the background color back
            $("#activateButton").css("background-color", "hsl(210, 46%, 95%)");
    
        }
    }else {
        //for mobile
        if (!$("#lower").is(":hidden")){
            // when is not in active state but switching it on
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
            // when in active state and swithing it off
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
// transition for active modes
$(window).resize(() => {
    // when resizing the screen
    if ($(window).width() > 620 && ($(".activeModeMobile").length === 1) && initialState != "desktop")
    {
        // transition into desktop while in active mode
        // first switch of the active mode
        $("#lower").show();
        $(".main").removeClass("activeMainMobile");
        $(".activeMobile").css("display", "none");
        $("#lower").append($(".share"));
        $(".share").append($(".activeMode"));
        $("#arrowHead").show();
        $(".activeMode").removeClass("activeModeMobile");
        $(".activeMode").hide();
        // switch it on as desktop
        $(".activeMode").fadeIn();
        // change the background color of the button to match it
        $("#activateButton").css("background-color", "hsl(217, 19%, 35%)");
        initialState = "desktop";
    }else if ($(window).width() <= 620 && !$(".activeMode").is(":hidden") && initialState != "mobile")
    {
        // switching from desktop active mode to mobile active mode
        // switch of the desktop active mode
        $(".activeMode").fadeOut();
        // change the background color back
        $("#activateButton").css("background-color", "hsl(210, 46%, 95%)");
        // switch on the mobile active mode
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
        initialState = "mobile";
        
    } 
})