$(document).ready(function () {
	// Start
	$('.logo').click(function () {
		$('.login').fadeIn(1000);
	})
	$('#sing').click(function () {
		var user = ['', $('#user').val()];
		var pass = ['', $('#pass').val()];
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
		$('.container').append('<div class="info"><img class="ava" src="img/dimka.jpg" alt="" /><div class="inf"><span class="levo name">Dimka BanDit</span><span class="levo">Onlaine Forever</span></div></div><div class="stena"></div>');
		$('.stena').append('<div class="soc"><p class="levo font">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, optio in eaque sint dolorum distinctio illo sequi deleniti veritatis voluptatum! Fugit deserunt, explicabo eveniet, amet id tempora fuga repellat soluta?</p></div><div class="soc"><p class="levo font">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, optio in eaque sint dolorum distinctio illo sequi deleniti veritatis voluptatum! Fugit deserunt, explicabo eveniet, amet id tempora fuga repellat soluta?</p></div>');
	};
	function Photo(cl) {
		for (var i = 1; i < 11; i++) {
			$('.container').append('<div class="item"><img src="img/'+i+'.jpg" alt="" /></div>');
		};
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
		var poper = $('.container');
		poper.append('<div class="sosi"><iframe width="854" height="480" src="https://www.youtube.com/embed/zObfNvSTf7s" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>');
		poper.append('<div class="sosi"><iframe width="854" height="480" src="https://www.youtube.com/embed/kOCxHu_F5xo" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>');
		poper.append('<div class="sosi"><iframe width="854" height="480" src="https://www.youtube.com/embed/9Ebdpv0KOlM" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>');
		poper.append('<div class="sosi"><iframe width="854" height="480" src="https://www.youtube.com/embed/_ZMrhPrwmb4" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>');
		poper.append('<div class="sosi"><iframe width="854" height="480" src="https://www.youtube.com/embed/7Rn1NT5dlIc" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>');
		poper.append('<div class="sosi"><iframe width="854" height="480" src="https://www.youtube.com/embed/AMiZwXoWp_Y" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>');
		poper.append('<div class="sosi"><iframe width="854" height="480" src="https://www.youtube.com/embed/UMEChE0gn_w" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>');
		poper.append('<div class="sosi"><iframe width="854" height="480" src="https://www.youtube.com/embed/s-C84Sm9_YI" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>');
		poper.append('<div class="sosi"><iframe width="854" height="480" src="https://www.youtube.com/embed/UTbVpbxQOJw" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>');
	};
});