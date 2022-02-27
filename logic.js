//
// Define Variables ---
const slides = document.querySelectorAll('.slide');
const btn01 = document.querySelector('.btn01');
const btn02 = document.querySelector('.btn02');
//
// Portfolio Slide Btns ---
var slideCount = 0;
btn01.addEventListener('click', () => {
	slideCount--;
	if (slideCount >= 0) {
		slides[slideCount + 1].classList.remove('slide--active');
		slides[slideCount].classList.add('slide--active');
		btn02.classList.remove('btn--dim');
	} else if (slideCount < 0) {
		slideCount++;
		btn01.classList.add('btn--dim');
	}
});
btn02.addEventListener('click', () => {
	slideCount++;
	if (slideCount < slides.length) {
		slides[slideCount - 1].classList.remove('slide--active');
		slides[slideCount].classList.add('slide--active');
		btn01.classList.remove('btn--dim');
	} else if (slideCount === slides.length) {
		btn02.classList.add('btn--dim');
		slideCount--;
	}
});
