const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const body = document.querySelector('body');
const line = document.querySelector('.line__hamburger')

hamburger.addEventListener('click', () => {
	navLinks.classList.toggle("open");
	body.classList.toggle("open");
	line.classList.toggle("open");
})