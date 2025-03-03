document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('thank-you-message').style.display = 'block';
    this.reset();
});

window.addEventListener('scroll', handleScrollAnimation);

function handleScrollAnimation() {
    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (position < screenPosition) {
            element.classList.add('visible');
        }
    });
}