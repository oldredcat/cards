$(function(){
	
	"use strict";
	
	var initCardCount		= 10;
	
	var loadedItem 			= 0;
	
	var initSliderCount   	= 6;
	
	var totalCount   		= 0;
	
	var imagePath			= '';
	
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
		on: {
			slideChange: function(){
				
				if(mySwiper.activeIndex < mySwiper.slides.length -1){
					return;
				}else{
					loadedItem = mySwiper.slides.length;
				}
				
				if(loadedItem < totalCount - 1){
					
					loadedItem++;
					
					$.ajax({
						url: 'json/' + loadedItem + '.json',
						dataType: 'JSON',
						success: function(json){

							var html  = '<div class="swiper-slide item"><div class="item-container"><div class="item-image">';
								html += '<a class="item-link" href="' + json.link + '">';
								html += '<img src="' + imagePath + json.image + '" alt="">';

							if(parseInt(json.life) > 0){
								html += '<i class="life"></i>';
							}

							if(parseInt(json.waranty) > 0){
								html += '<i class="waranty"></i>';
							}

								html += '<div><span>' + json.title + '</span></div></a></div>';
								html += '<div class="item-intro">' + json.text.substr(0, 80) + '...</div>';
								html += '<div class="item-info bordered">';
								html += '<span class="item-author"><i class="fas fa-circle"></i>' + json.user + '</span>';

							if(parseFloat(json.star) > 0){
								html += '<span class="item-vote">';
							}else{
								html += '<span class="item-vote default">';
							}
								html += '<i class="fas fa-star"></i>' + json.star +' <span>(' + json.votes + ')</span></span>';
								html += '</div><div class="item-info"><a class="item-love"><i class="fas fa-heart"></i></a>';
								html += '<span class="item-price">от ' + json.price + '<i class="fas fa-ruble-sign"></i></span></div></div></div>';

							mySwiper.appendSlide(html);
						}
					});
					
				}
			}
		}
	});
	
	initCards();
	
	initSlider();

	function initCards(){
		$.ajax({
			url: 'json/main.json',
			dataType: 'JSON',
			success: function(json){
				if(undefined !== json.total){
					totalCount = parseInt(json.total);
					console.log('Total items: ' + totalCount);
				}
				if(undefined !== json.images){
					imagePath = json.images;
					console.log('Total items: ' + imagePath);
				}

				if(totalCount && imagePath){
					loadCards();
				}
			}
		});
	}

	function loadCards(){
		for(var i = 0; i < initCardCount; i++){

			$.ajax({
				url: 'json/' + i + '.json',
				dataType: 'JSON',
				success: function(json){

					var html  = '<div class="item"><div class="item-container"><div class="item-image">';
						html += '<a class="item-link" href="' + json.link + '">';
						html += '<img src="' + imagePath + json.image + '" alt="">';
					
					if(parseInt(json.life) > 0){
						html += '<i class="life"></i>';
					}
					
					if(parseInt(json.waranty) > 0){
						html += '<i class="waranty"></i>';
					}

						html += '<div><span>' + json.title + '</span></div></a></div>';
						html += '<div class="item-intro">' + json.text.substr(0, 80) + '...</div>';
						html += '<div class="item-info bordered">';
						html += '<span class="item-author"><i class="fas fa-circle"></i>' + json.user + '</span>';
					
					if(parseFloat(json.star) > 0){
						html += '<span class="item-vote">';
					}else{
						html += '<span class="item-vote default">';
					}
					
						html += '<i class="fas fa-star"></i>' + json.star +' <span>(' + json.votes + ')</span></span>';
						html += '</div><div class="item-info"><a class="item-love"><i class="fas fa-heart"></i></a>';
						html += '<span class="item-price">от ' + json.price + '<i class="fas fa-ruble-sign"></i></span></div></div></div>';

					$('#items').append(html);
				}
			});
		}
		$('#items').removeClass('loading');
	}
	
	function initSlider(){
		for(var i = 0; i < initSliderCount; i++){

			$.ajax({
				url: 'json/' + i + '.json',
				dataType: 'JSON',
				success: function(json){

					var html  = '<div class="swiper-slide item"><div class="item-container"><div class="item-image">';
						html += '<a class="item-link" href="' + json.link + '">';
						html += '<img src="' + imagePath + json.image + '" alt="">';
					
					if(parseInt(json.life) > 0){
						html += '<i class="life"></i>';
					}
					
					if(parseInt(json.waranty) > 0){
						html += '<i class="waranty"></i>';
					}

						html += '<div><span>' + json.title + '</span></div></a></div>';
						html += '<div class="item-intro">' + json.text.substr(0, 80) + '...</div>';
						html += '<div class="item-info bordered">';
						html += '<span class="item-author"><i class="fas fa-circle"></i>' + json.user + '</span>';
					
					if(parseFloat(json.star) > 0){
						html += '<span class="item-vote">';
					}else{
						html += '<span class="item-vote default">';
					}
						html += '<i class="fas fa-star"></i>' + json.star +' <span>(' + json.votes + ')</span></span>';
						html += '</div><div class="item-info"><a class="item-love"><i class="fas fa-heart"></i></a>';
						html += '<span class="item-price">от ' + json.price + '<i class="fas fa-ruble-sign"></i></span></div></div></div>';

					mySwiper.appendSlide(html);
				}
			});

		}
		$('#slides').removeClass('loading');
	}
	
});

