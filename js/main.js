$(document).ready(function() {


    $(".owl-carousel.loop").owlCarousel({
        stagePadding: 40,
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


});

function openNavList() {
    var navList = document.querySelector('.navList')
    navList.classList.toggle('collapse');
}
