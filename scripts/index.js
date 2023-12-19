$(document).ready(() => {
    const $activeMode = $('.activeMode');
    // hide active mode by default
    $activeMode.hide();
    $('#activateButton').on('click',() => {
        $activeMode.fadeToggle();
    })
    $('.activeMode').on('mouseleave', event => {
        var $share = $(event.currentTarget);
        $share.fadeOut();
    })
})
