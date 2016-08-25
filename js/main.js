$(document).ready(function() {
    $('.owl-carousel.loop').owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin: 10,
        responsive: {
            600: {
                items: 2
            }
        }
    });

});

function openNavList() {
    var navList = document.querySelector('.navList')
    navList.classList.toggle('collapse');
}
