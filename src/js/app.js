$(document).ready(() => {
  $('.header-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    asNavFor: '.slider-dots',
    fade: true,
  });

  $('.slider-dots').slick({
    dots: true,
    dotsClass: 'slider-dots__dot',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.header-slider',
  });

});
