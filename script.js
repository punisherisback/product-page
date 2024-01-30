document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    const slideWidth = slides[0].clientWidth;
    let counter = 0;

    setInterval(() => {
        counter++;

        slider.style.transition = 'transform 0.5s ease-in-out';
        slider.style.transform = `translateX(${-counter * slideWidth}px)`;

        if (counter === slides.length - 1) {
            setTimeout(() => {
                slider.style.transition = 'none';
                slider.style.transform = `translateX(0)`;
                counter = 0;
            }, 500);
        }
    }, 3000); // Change slide every 3 seconds (adjust as needed)
});
