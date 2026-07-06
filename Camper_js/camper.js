
$(document).ready(function () {
  $(".priorities-slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: true,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
const swiper1 = new Swiper(".community-swiper", {
  effect: "coverflow",
  grabCursor: true,

  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  loop: true,
  slideToClickedSlide: true,
  speed: 1500,


  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});

$(".community-swiper").on("mouseenter", function (e) {
  swiper1.autoplay.stop();
});
$(".community-swiper").on("mouseleave", function (e) {
  swiper1.autoplay.start();
});

const swiper2 = new Swiper(".advantages-swiper", {
  effect: "cards",
  grabCursor: true,
  autoplay: true,
  infinite: true,
  autoplaySpeed: 3000,
  slideToClickedSlide: true,
  speed: 2500,
});

$(".advantages-swiper").on("mouseenter", function (e) {
  swiper2.autoplay.stop();
});
$(".advantages-swiper").on("mouseleave", function (e) {
  swiper2.autoplay.start();
});

let $btnTop = $(".btn-top");
$(window).on("scroll", function () {
  if ($(window).scrollTop() >= 80) {
    $btnTop.fadeIn(); 
  } else {
    $btnTop.fadeOut(); 
  }
});
$btnTop.on("click", function () {
  $("html,body").animate({ scrollTop: 0 }, 1500);
});

$(".menu__block").click(function (event) {
  $(".overlay,.menu__block").toggleClass("active");
  $("body").toggleClass("lock");
});
$(".close-btn").click(function (event) {
  $(".overlay,.menu__block").toggleClass("active");
  $("body").toggleClass("lock");
});
