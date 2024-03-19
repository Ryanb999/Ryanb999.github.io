document.addEventListener('DOMContentLoaded', function () {
    // Rotate Squares
    window.addEventListener('scroll', function() {
        let scrolled = window.scrollY;

        document.querySelector('.left-square')?.setAttribute('style', `transform: rotate(${20 - (scrolled / 10)}deg)`);
        document.querySelector('.right-square')?.setAttribute('style', `transform: rotate(${-20 + (scrolled / 10)}deg)`);
    });
});