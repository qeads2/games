$(document).ready(function() {
	// 탭 메뉴 클릭시 이동하도록 동작!
	$('.nav a').click(function(e) {
		e.preventDefault();
		$(this).tab('show');
	})
	$('#myModal').on('shown.bs.modal', function () {
  		$('#myInput').focus()
	})
/*	$('.new_newsfeed').hover(function() {
		$('.new_newsfeed .plus').fadeOut();
		$(this).append('<h6 style=\"display:none;\">NEW POST</h6>')
		$('.new_newsfeed h6').fadeIn();
	})*/
});