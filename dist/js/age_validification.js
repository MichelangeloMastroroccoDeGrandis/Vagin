onload = function() {
    $('section').addClass('blur');
    $('header').addClass('blur');
    $('footer').addClass('blur');    
}

$('#age-confirmed').bind('click', function() {
    setTimeout(function(){
        $('section').removeClass('blur');
        $('header').removeClass('blur');
        $('footer').removeClass('blur');
        $('#age_validification').remove();
    }, 1000);
    });