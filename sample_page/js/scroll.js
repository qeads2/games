$(document).ready(function (){
	$(window).resize(function() {
		// 높이를 창크기에 맞췄을 때 사진 비율의 가로길이 값이 창의 가로길이 값보다 작을 때
		/*
		if( $(".main_page .background-image").innerHeight() * 1920 / 1080 < $(".main_page .background-image").innerWidth() ) {
			$(".main_page img .background-image").css({
				width: "100%",
				height: $(".main_page .background-image").innerWidth() * 1080 / 1920//(height를 비율에 맞게 잘라서 창크기에 맞춤)
			});
		}

		else {
			$(".main_page img .background-image").css({
				width: $(".main_page .background-image").innerHeight() * 1920 / 1080,//(width를 비율에 맞게 잘라서 창크기에 맞춤)
				height: "100%"
			});
		}
		*/
	});
	$(window).scroll(function () {
		
	});
});