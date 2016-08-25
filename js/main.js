$(document).ready(function() {


    $(".owl-carousel.loop").owlCarousel({
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
    var owl = $(".owl-carousel.loop");
    owl.owlCarousel();
    // Custom Navigation Events
    $(".next").click(function() {
        owl.trigger('next.owl.carousel');
    })
    $(".prev").click(function() {
        owl.trigger('prev.owl.carousel');
    })

});

function openNavList() {
    var navList = document.querySelector('.navList')
    navList.classList.toggle('collapse');
}
