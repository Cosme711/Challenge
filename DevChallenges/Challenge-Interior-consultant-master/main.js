const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const body = document.querySelector('body');
const line = document.querySelector('.line__hamburger');
const main = document.querySelector('.main');
const footer = document.querySelector('footer');

hamburger.addEventListener('click', () => {
	navLinks.classList.toggle("open");
	body.classList.toggle("open");
	line.classList.toggle("open");
	main.classList.toggle("open");
	footer.classList.toggle("open");
})