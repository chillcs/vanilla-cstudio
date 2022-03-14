//
// Define Variables ---
const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn-cont');
const menuToggle = document.getElementById('menuToggle');
const slides = document.querySelectorAll('.slide');
const btnSL = document.getElementById('btnSL');
const btnSR = document.getElementById('btnSR');
//
// Menu Toggle ---
menuBtn.addEventListener('click', () => {
	menu.classList.toggle('menu-mob');
	body.classList.toggle('overflow');
});
//
// Menu Toggle Reset on Screen Change ---
function mediaIncrease(x) {
	if (x.matches) {
		menu.classList.remove('menu-mob');
		body.classList.remove('overflow');
		menuToggle.checked = false;
	}
}
const x = window.matchMedia('(min-width: 650px)');
mediaIncrease(x);
x.addListener(mediaIncrease);
//
// Portfolio Slide Buttons ---
var slideCount = 0;
if (slideCount === 0) {
	btnSL.classList.add('btn--dim');
}
btnSL.addEventListener('click', () => {
	slideCount--;
	if (slideCount >= 0) {
		slides[slideCount + 1].classList.remove('slide--active');
		slides[slideCount].classList.add('slide--active');
	} else if (slideCount < 0) {
		slideCount++;
	}
	if (slideCount === 0) {
		btnSL.classList.add('btn--dim');
	}
	if (slideCount < slides.length - 1) {
		btnSR.classList.remove('btn--dim');
	}
});
btnSR.addEventListener('click', () => {
	slideCount++;
	if (slideCount < slides.length) {
		slides[slideCount - 1].classList.remove('slide--active');
		slides[slideCount].classList.add('slide--active');
	} else if (slideCount === slides.length) {
		slideCount--;
	}
	if (slideCount === slides.length - 1) {
		btnSR.classList.add('btn--dim');
	}
	if (slideCount > 0) {
		btnSL.classList.remove('btn--dim');
	}
});
