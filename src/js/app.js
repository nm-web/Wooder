$(document).ready(() => {
    $('.header-slider')
      .slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        asNavFor: '.slider-dots',
        fade: true,
      });

    $('.slider-dots')
      .slick({
        dots: true,
        dotsClass: 'slider-dots__dot',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.header-slider',
      });

      let select = () => {
        let selectCurrent = document.querySelectorAll('.select__header'),
          selectItem = document.querySelectorAll('.select__item');
        selectCurrent.forEach((item) => {
          item.addEventListener('click', (e) => {
            e.currentTarget.parentElement.classList.toggle('is-open');
          });
        });
        selectItem.forEach((item) => {
          item.addEventListener('click', (e) => {
            e.currentTarget.closest('.select')
              .querySelector('.select__current').innerHTML = e.currentTarget.innerHTML;
            e.currentTarget.closest('.select')
              .classList
              .remove('is-open');
          });
        });
      };

  $('.header-menu__left').on('click', function () {
     $('.mobile-menu').toggleClass('is-active');
    $('.header-menu__center .nav-menu').toggleClass('mobile');
  });

  select();

});



