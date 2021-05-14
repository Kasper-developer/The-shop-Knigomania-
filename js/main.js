$(document).ready(function () {
	$('.navbar-burger').on('click', function () {
		console.log('Клик по кнопке');
		$('.navbar-burger, .menu__list').toggleClass('active')
		$('body').toggleClass('lock')
	});
  AOS.init()
})
