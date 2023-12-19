$(document).ready(() => {
    const $activeMode = $('.activeMode');
    const $profile = $('#profile');
    const $main = $('.main');
    const $shareMobile = $('.share');
    // hide active mode by default
    $activeMode.hide();
    $('#activateButton').on('click',() => {
        $activeMode.toggle();
        // profile
        if (screen.width <= 620)
        {
            // only for mobile
            // hide profile
            $profile.toggle();
            console.log('mpbile');
            // when the profile is hidden
            if ($profile.is(':hidden'))
            {
                // activate the mobile version
                $activeMode.addClass('activeModeMobile');
                $main.addClass('mainMobile');
                $shareMobile.addClass('shareMobile');
            }else{
                // when the profile is present, deactive the mobile mode
                console.log('deactivating');
                $activeMode.removeClass('activeModeMobile');
                $main.removeClass('mainMobile');
                $shareMobile.removeClass('shareMobile');
            }
            
        }
    })
    $('.activeMode').on('mouseleave', event => {
        var $share = $(event.currentTarget);
        $share.fadeOut();
    })
})
