//
// Define Variables ---
const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn-cont');
const menuToggle = document.getElementById('menuToggle');
const slides = document.querySelectorAll('.slide');
const btn01 = document.querySelector('.btn01');
const btn02 = document.querySelector('.btn02');
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
	btn01.classList.add('btn--dim');
}
btn01.addEventListener('click', () => {
	slideCount--;
	if (slideCount >= 0) {
		slides[slideCount + 1].classList.remove('slide--active');
		slides[slideCount].classList.add('slide--active');
	} else if (slideCount < 0) {
		slideCount++;
	}
	if (slideCount === 0) {
		btn01.classList.add('btn--dim');
	}
	if (slideCount < slides.length - 1) {
		btn02.classList.remove('btn--dim');
	}
});
btn02.addEventListener('click', () => {
	slideCount++;
	if (slideCount < slides.length) {
		slides[slideCount - 1].classList.remove('slide--active');
		slides[slideCount].classList.add('slide--active');
	} else if (slideCount === slides.length) {
		slideCount--;
	}
	if (slideCount === slides.length - 1) {
		btn02.classList.add('btn--dim');
	}
	if (slideCount > 0) {
		btn01.classList.remove('btn--dim');
	}
});
