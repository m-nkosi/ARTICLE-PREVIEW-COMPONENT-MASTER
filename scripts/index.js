$(".activeMode").hide();

// active the active mode when the button is clicked
$("#activateButton").click(() => {
    // if the active tab is hidden show it
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
})