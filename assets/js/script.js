// open and close burger icon

$('.menu-toggle').on('click', function() {
    $('nav').toggleClass('site-nav--open', 500)
    $(this).toggleClass('menu-toggle--open');
})


// countdown timer 

const myDate = new Date(); 
const xmas = Date.parse("Dec 25, "+myDate.getFullYear()) 
const today = Date.parse(myDate) 

const daysToChristmas = Math.round((xmas-today)/(1000*60*60*24) + 1) 


if (daysToChristmas == 0) 
$('#days').text("It's Christmas!! Merry Christmas!");

if (daysToChristmas < 0) 
$('#days').text("Christmas was "+-1*(daysToChristmas)+" days ago.");

if (daysToChristmas > 0) 
$('#days').text(daysToChristmas+" sleeps to Christmas!");
