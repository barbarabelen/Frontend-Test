const slides = document.querySelectorAll('.slide');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

/* function that gets the current class, removes it and
 * looks up for the next one to add current to the start
 */
const nextSlide = () => {
	const current = document.querySelector('.current');
	current.classList.remove('current');
	if (current.nextElementSibling) {
		current.nextElementSibling.classList.add('current');
	} else {
		slides[0].classList.add('current');
	}
	setTimeout(() => current.classList.remove('current'));
};

/* function that gets the current class, removes it and
 * looks up for the previous one to add current to the last
 */
const prevSlide = () => {
	const current = document.querySelector('.current');
	current.classList.remove('current');
	if (current.previousElementSibling) {
		current.previousElementSibling.classList.add('current');
	} else {
		slides[slides.length - 1].classList.add('current');
	}
	setTimeout(() => current.classList.remove('current'));
};

next.addEventListener('click', e => {
	nextSlide();
});

prev.addEventListener('click', e => {
	prevSlide();
});
