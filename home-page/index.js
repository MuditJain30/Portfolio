document.addEventListener('DOMContentLoaded', function () {
    var prevBtn = document.querySelector('.prev');
    var nextBtn = document.querySelector('.next');
    var carouselInner = document.querySelector('.carousel-inner');
    var currentIndex = 0;

    prevBtn.addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : 2;
        carouselInner.style.transform = 'translateX(-' + currentIndex * 100 + '%)';
    });

    nextBtn.addEventListener('click', function () {
        currentIndex = (currentIndex < 2) ? currentIndex + 1 : 0;
        carouselInner.style.transform = 'translateX(-' + currentIndex * 100 + '%)';
    });
});