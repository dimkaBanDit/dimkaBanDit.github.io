$('.vp').click(function() {
	$(this).hide();
	$('.bor').animate({height: '400px', marginTop: '20%'}, 1000, function() {
		$(this).append('<label class="lab lol">Username</label><input type="text" id="username" class="form-control" value""><br><label class="lab">Pssword</label><input type="password" id="password" class="form-control">')
		$(this).append('<button class="log">LogIn</button>')
		$('.log').click(function() {
			var user = 'dimka';
			var pss = 1488;
			if ($('#username').val() == user && $('#password').val() == pss) {
				$('.lab').hide();
				$('#password').hide();
				$('.log').hide();
				$('#username').hide();
				$('.bor').animate({height: '100px', marginTop: '30%'}, 1000, function() {
					$('.vp').show(0, start);
				});
				
			}
		})
	});
});




function start() {
	$('#head').after("<div id='he' class='container'></div>");
	$('#he').append("<div id='he1' class='row justify-content-md-center'></div>");
	$('#he').animate({height: '80vh'}, 1000);
	$(this).attr('disabled', true);
	$('.bor').animate({'margin-top': '5px'}, 1000, function() {
		$('.vp').css({transform: "rotate(-360deg)",marginLeft: '-5px'}).animate({ borderRadius: '10px'}, 1000);
		$('#he1').append("<div id='menu' class='col-lg-3 fon animated zoomInRight'></div>");
		$('#he1').append("<div id='content' class='col-lg-7 fon animated zoomInLeft'></div>");
	});};