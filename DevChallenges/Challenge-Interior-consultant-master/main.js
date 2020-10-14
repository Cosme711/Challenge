const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
	navLinks.classList.toggle("open");
	body.classList.toggle("open");
})