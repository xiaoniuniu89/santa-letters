// open and close burger icon

$('.menu-toggle').on('click', function() {
    $('nav').toggleClass('site-nav--open', 500)
    $(this).toggleClass('menu-toggle--open');
})


// Countdown timer function
const xmas = new Date("Dec 24, 2021 23:59:59").getTime()

var x = setInterval(function () {

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
    document.getElementById("days").innerHTML = days + "d "
    + hours + "h " + minutes + "m " + seconds + "s "
    + " days to Christmas!";

    // If the count down is over, write some text 
    if (distance <= 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "It's Christmas!! Merry Christmas!";
    }
}, 1000);


//make snow
/* used snowflake
setInterval(createSnowFlake, 50);

function createSnowFlake() {
	const snow_flake = document.createElement('i');
	snow_flake.classList.add('fas');
	snow_flake.classList.add('fa-snowflake');
	snow_flake.style.left = Math.random() * window.innerWidth + 'px';
	snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 - 5 seconds
	snow_flake.style.opacity = Math.random();
	snow_flake.style.fontSize = Math.random() * 10 + 10 + 'px';
	
	document.body.append(snow_flake);
	
	setTimeout(() => {
		snow_flake.remove();
	}, 3000)
} */


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
	};

	function snowDrop(num, position) {
		if (num > 0) {
			var drop = '<div class="drop snow" id="drop_' + num + '"></div>';

			$('.cta').append(drop);
			$('#drop_' + num).css('right', position);
			num--;
			snowDrop(num, randomInt(0, innerWidth));
		}
	};

function randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};


/* // countdown timer 

const myDate = new Date(); 
const xmas = Date.parse("Dec 25, "+myDate.getFullYear()) 
const today = Date.parse(myDate) 

const daysToChristmas = Math.round((xmas-today)/(1000*60*60*24) + 1) 


if (daysToChristmas == 0) 
$('#days').text("It's Christmas!! Merry Christmas!");

if (daysToChristmas < 0) 
$('#days').text("Christmas was "+-1*(daysToChristmas)+" days ago.");

if (daysToChristmas > 0) 
$('#days').text(daysToChristmas+" sleeps to Christmas!"); */

