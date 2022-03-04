//
// Define Variables ---
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const slides = document.querySelectorAll('.slide');
const btn01 = document.querySelector('.btn01');
const btn02 = document.querySelector('.btn02');
//
// Menu Toggle ---
menuBtn.addEventListener('click', () => {
	menu.classList.toggle('menu-mob');
});
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
