/*
 * Placeholder fix init
 */

$(document).on('ready', function(){
    $('.no-placeholder input[placeholder], .no-placeholder textarea[placeholder]').placeholder();
});


/*
 * Fancybox
 */

$(document).on('ready', function(){

    $('.gallery__item__link').fancybox();

});

$(document).on('ready', function(){

    setInterval(function(){
        $('.billboard__slider :first-child').fadeOut()
            .next('.billboard__slider__item').fadeIn()
            .end().appendTo('.billboard__slider');},
    5000);
});
