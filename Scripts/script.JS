window.addEventListener("scroll", function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (window.scrollY > window.innerHeight / 2) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener('load', function () {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');

    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.display = 'block';
    }

    images.forEach(image => {
        image.style.display = 'none';
        image.addEventListener('load', function() {
            this.style.display = 'block';
        });
    });

    images[currentIndex].style.display = 'block';

    setInterval(showNextImage, 5000);
});
