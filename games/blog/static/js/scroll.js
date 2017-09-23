$(document).ready(function (){
	$(window).resize(function() {
		if($(this).height() > $(".main_page").height()){ /*윈도우의 높이가 이미지의 높이보다 클 경우*/

			console.log($(this).height()," | ",$(".main_page").height())

			$(".main_page").css({  /*이미지의 배율을 확대*/
				transform:"scale("+($(this).height()*1.5)/$(".main_page").height()+")",
				transition:"0.3s"
			});
		}
		else { /*이미지의 높이가 윈도우의 높이보다 커지면 원래 배율로 복원*/
			$(".main_page").css({transform:"scale(1.0)",transition:"0.1s"});
		}
	});
	$(window).scroll(function () {
		
	});
});