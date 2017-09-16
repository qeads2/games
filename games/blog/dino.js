
$(document).ready(function (){

	$(window).scroll(function () {
		var value = $(this).scrollTop();
		var header = $("header")
		var headerTop = header.offset().top;
		var imgTitle = $(".img1 h3")
		var imgTitleTop = imgTitle.offset().top;
		var img1 = $(".img1")
		var img1Top = img1.offset().top;
		var img2 = $(".img2")
		var img2Top = img2.offset().top;
		// header.css({display:""});
		header.css({"top":value} );
		img1.css('background-position-y',value);
		imgTitle.css('background-position-y',value);

		if(value>img2Top) {
			img2.css('background-position-y',value-img2Top);
		} else {
			img2.css('background-position-y','0');
		}

	});

});