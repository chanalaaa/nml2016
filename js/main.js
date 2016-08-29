$(document).ready(function() {

/*

    $(".owl-carousel.loop").owlCarousel({
        stagePadding: 40,
        center: true,
        items: 1,
        loop: true,
        margin: 10,
        video: 1,
        smartSpeed:500,
        responsive: {
            600: {
                items: 2
            }
        }
    });

    $(".owl-carousel.loop").each(function() {
        var $this = $(this);
        // Custom Navigation Events
        $this.parent().find(".next").click(function() {
            $this.trigger('next.owl.carousel');
        });
        $this.parent().find(".prev").click(function() {
            $this.trigger('prev.owl.carousel');
        });
    });

*/

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 2.13,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 10,
        nextButton: '.next',
        prevButton: '.prev',
        loop: 1,
        loopAdditionalSlides:1,
        grabCursor: true,
         breakpoints: {
            600: {
                slidesPerView: 1.16,
            },
              490: {
                slidesPerView: 1.22,
            }
        }
    });

});

function openNavList() {
    var navList = document.querySelector('.navList')
    navList.classList.toggle('collapse');
}
