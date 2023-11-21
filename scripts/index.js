// activating the mode for mobile
$("#activateButton").on("click", () => {
    // hide the lower part of share (unactivated)
    $("#lower").hide();
    // show the activated one
    $("#activeLowerMobile").css("display", "flex");
    // remove the lower level padding
    $(".main").addClass("activatedMain");
})
// deactivating the mode mobile for mobile
$("#deactivateActiveMode").on("click", ()=> {
    $("#activeLowerMobile").css("display" ,"none");
    // show the normal
    $("#lower").show();
    // add the padding
    $(".main").removeClass("activatedMain");
})
