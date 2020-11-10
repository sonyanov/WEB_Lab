var info = document.getElementById('info'),
	open = document.getElementById('open'),
	close = document.querySelector('.close')

open.onclick = function() {
	info.style.display = "block"
}

close.onclick = function() {
	info.style.display = "none"
}

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);

function nextSlide() {
 slides[currentSlide].className = 'slide';
 currentSlide = (currentSlide+1)%slides.length;
 slides[currentSlide].className = 'slide showing';
}