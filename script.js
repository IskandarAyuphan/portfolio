// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Projects carousel (simple left/right)
const cards = document.querySelector('.project-cards');
let offset = 0;

document.getElementById('prevProj').addEventListener('click', () => {
    offset += 300;
    if (offset > 0) offset = -900; 
    cards.style.transform = `translateX(${offset}px)`;
});

document.getElementById('nextProj').addEventListener('click', () => {
    offset -= 300;
    if (offset < -900) offset = 0;
    cards.style.transform = `translateX(${offset}px)`;
});

// Scroll reveal
ScrollReveal().reveal('.section', {
    distance: '50px',
    duration: 800,
    delay: 200,
    reset: false,
    origin: 'bottom'
});
