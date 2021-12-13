// open and close burger icon

$('.menu-toggle').on('click', function() {
    $('nav').toggleClass('site-nav--open', 500);
    $(this).toggleClass('menu-toggle--open');
});


// countdown timer and snow effect
// Countdown timer function
function Countdown(){
const xmas = new Date("Dec 24, 2021 23:59:59").getTime()


// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = xmas - now;


// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);


// Output the result in an element with id="days"
document.getElementById("days").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds +"s until Christmas!"

	 //Recursive call after 1 second using setTimeout
    setTimeout(Countdown, 1000);
}

Countdown()

//make snow
snowDrop(200, randomInt(1035, innerWidth));
snow(150, 150);

function snow(num, speed) {
		if (num > 0) {
			setTimeout(function () {
				$('#drop_' + randomInt(1, 150)).addClass('animate');
				num--;
				snow(num, speed);
			}, speed);
		}
	}
    
// Generate snow and place them in targered class
	function snowDrop(num, position) {
		if (num > 0) {
			var drop = '<div class="drop snow" id="drop_' + num + '"></div>';

			$('.cta').append(drop);
			$('#drop_' + num).css('right', position);
			num--;
			snowDrop(num, randomInt(0, innerWidth));
		}
	}

function randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
