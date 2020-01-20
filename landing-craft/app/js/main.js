$(function(){
	
	$('.main__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:true
});
// 	$('.feature__slider').slick({
//   dots: true,
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows:true
// });
	$('.menu__btn').on('click',function(){
		$('.header__menu .header__ul').slideToggle();
	});

	
});



new WOW().init();

// function initials(name='dima',sirname='Kranin'){
// 	return `Ваше имя:${name}   Ваша фамилия ${sirname}`;
// }
// console.log(initials());

	console.log('1');
	setTimeout(function(){
		console.log('2');
	},3000)
	console.log('3');