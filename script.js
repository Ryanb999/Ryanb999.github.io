document.addEventListener('DOMContentLoaded', function() {
    // Fade in animation for sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('fade-in');
        }
    });

    // Check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Add scroll event listener
    window.addEventListener('scroll', function() {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('fade-in');
            }
        });
    });
});