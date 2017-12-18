$(document).ready(function () {
	// Start
	$('.logo').click(function () {
		$('.login').fadeIn(1000);
	})
	$('#sing').click(function () {
		var user = ['dimka', $('#user').val()];
		var pass = ['1488', $('#pass').val()];
		if (user[0] == user[1] && pass[0] == pass[1]) {
			$('.login').fadeOut(1000, function () {
			$('.head').animate({top: '0%'}, function () {
				$('.logo').attr('disabled', true).delay(1000).css({left: '0%', transform: 'rotate(-360deg)'}).animate({borderRadius: '10px'});
				$('.sub').fadeIn(1000);
				$('.footer').fadeIn(1000);
				$('.logotip').delay(1000).fadeIn(1000);
				});
			});
		} else {
			alert("Boy next door");
		}
	});
	// Menu
	$('.menu').on('click', '.butmenu', function () {
		if ($('.butmenu') != $(this)) {
			$('.butmenu').css({border: 'none', color: 'white', background: 'black'});
		}
		$(this).css({border: '1px solid black', color: 'black', background: 'white'});
		create($(this).attr('data-select'));
	});
	function create(kek) {
		$('.container').remove();
		$('.cont').append('<div class="container"><span class="header">'+kek+'</span></div>');
		if (kek == 'Home') { Home(kek); } if (kek == 'Photo') { Photo(kek); } if (kek == 'Messege') { Messege(kek); } if (kek == 'News') { News(kek); }if (kek == 'People') { People(kek); }if (kek == 'Video') { Video(kek); };
	};
	function Home(cl) {
		$('.container').append('<div class="info"></div>')
	};
	function Photo(cl) {
		$('.container').append('<span>'+cl+'</span>')
	};
	function Messege(cl) {
		$('.container').append('<span>'+cl+'</span>')
	};
	function News(cl) {
		$('.container').append('<span>'+cl+'</span>')
	};
	function People(cl) {
		$('.container').append('<span>'+cl+'</span>')
	};
	function Video(cl) {
		$('.container').append('<span>'+cl+'</span>')
	};
});