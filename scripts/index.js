$(document).ready(() => {
    $('#activateButton').on('click',() => {
        $('.activeMode').fadeToggle();
    })
    $('.activeMode').on('mouseleave', event => {
        var $share = $(event.currentTarget);
        $share.fadeOut();
    })
})
