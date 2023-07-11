$(function(){
    var swiper3 = new Swiper('.swiper3', {
        slidesPerView: 3,
        direction: getDirection(),
        navigation: {
          nextEl: '.slide3_next',
          prevEl: '.slide3_prev',
        },
      });

      var swiper2 = new Swiper('.swiper2', {
        spaceBetween: 24,
        slidesPerView: 2,
        direction: getDirection(),
        navigation: {
          nextEl: '.slide2_next',
          prevEl: '.slide2_prev',
        },
      });

      function getDirection() {
        var windowWidth = window.innerWidth;
        var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
  
        return direction;
      }

      var swiper1_1 = new Swiper(".swiper1_1", {
        parallax: true,
        loop:true,
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
      });

      var swiper1_2 = new Swiper(".swiper1_2", {
        effect: "fade",
        loop:true,
      });

      swiper1_1.controller.control = swiper1_2;
})