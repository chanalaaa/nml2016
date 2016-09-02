$(document).ready(function() {
    $(".owl-carousel.loop").owlCarousel({
        stagePadding: 40,
        center: true,
        items: 1,
        loop: true,
        margin: 10,
        video: 1,
        //smartSpeed:500,
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


    /*
        var swiper = new Swiper('.swiper-container.we', {
            //slidesPerView: 2.13,
            slidesPerView: 1.15,
            //centeredSlides: true,
            paginationClickable: true,
            //spaceBetween: 10,
            nextButton: '.next',
            prevButton: '.prev',
            //loop: 1,
            //loopAdditionalSlides:1,
            freeMode:true,
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
        */

    var controller = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onEnter", duration: "200%" } });
    new ScrollMagic.Scene({ triggerElement: "#bgTypoM" })
        .setTween(".bgTypo.m", { y: "60%", ease: Linear.easeNone })
        .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: "#bgTypoE" })
        .setTween(".bgTypo.e", { y: "-30%", ease: Linear.easeNone })
        .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: "#bgTypoUi" })
        .setTween(".bgTypo.ui", { y: "45%", ease: Linear.easeNone })
        .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: "#bgTypoN" })
        .setTween(".bgTypo.n", { y: "35%", ease: Linear.easeNone })
        .addTo(controller);


});

function openNavList() {
    var hamburger = document.querySelector('.hamburger')
    hamburger.classList.toggle('active');
    var navList = document.querySelector('.navList')
    navList.classList.toggle('active');
}
