$(document).ready(function() {
	// 탭 메뉴 클릭시 이동하도록 동작
	$('.nav a').click(function(e) {
		e.preventDefault();
		$(this).tab('show');
	})
});