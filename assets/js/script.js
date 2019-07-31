$(function(){
	
	"use strict";
	
	var mySwiper = new Swiper('.swiper-container', {
    	speed: 400,
		slidesPerView: 1,
    	spaceBetween: 0,
		breakpointsInverse: true,
		breakpoints: {
			// when window width is >= 320px
			576: {
				slidesPerView: 2
			},
			// when window width is >= 480px
			768: {
				slidesPerView: 3
			},
			// when window width is >= 640px
			992: {
				slidesPerView: 4
			},
			// when window width is >= 1200px
			1200: {
				slidesPerView: 5
			}
  		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
});