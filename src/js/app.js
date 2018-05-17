import sayHello from './lib/sayHello.js';
import svg4everybody from 'svg4everybody';
import slickCarousel from 'slick-carousel';

sayHello();

svg4everybody()

$('.js-slider').slick({
	infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $(".slider-btns .slick-next-btn"),
  nextArrow: $(".slider-btns .slick-prev-btn"),
})