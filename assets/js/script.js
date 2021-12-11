$('.menu-toggle').on('click', function() {
    $('nav').toggleClass('site-nav--open', 500)
    $(this).toggleClass('menu-toggle--open');
})
