//Header on scroll color change
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle("shadow", window.scrollY > 0);
});

console.log("hola");