$(document).ready(function(){
	imageSlider("#thumbnail_slider",2);
});

function imageSlider(selector,  index){

	var $imageSlider = null;
	var $imageContainer = null;
	var imageWidth = 0;
	var currentIndex = 0;
	var imageLength =0;
	// 요소 초기화
	function init(){
		$imageSlider = $(selector);
		$imageContainer = $imageSlider.find(".image-container");
		imageWidth = $imageSlider.find(".thumbnail-list").innerWidth();
		imageSize = $imageSlider.find(".image-list .image-container img").innerWidth();
		imageLength = $imageSlider.find(".thumbnail-list .thumbnail-container .thumbnail").length;
		currentIndex = index;

		$indexItems = $imageSlider.find(".index-nav li a");
	}

	// index번째 이미지 보이기
	function showImageAt(index, direction){
	// 인덱스 값 구하기
		if(index<0)
			index = imageLength-1;

		if(index>=imageLength)
			index = 0;

		console.log( index, currentIndex, "imageLength "+imageLength);
		var pos= -(index*imageSize); // slider안의 img 크기에 맞게 이동되도록 설정


		if(direction=="prev" || direction=="next") {
			$imageContainer.stop().animate({
				left:pos,
			},500,"easeOutQuint");
		}
		else {
			$imageContainer.css("left", pos);
		}

		// n번째 인덱스 아이템 선택
		selectIndexAt(index);

		// 현재 이미지 인덱스값 업데이트
		currentIndex = index;
	}

	function initEvent(){

		$imageSlider.find(".slider-btn-next").on("click", function(){
			nextImage();
		})

		$imageSlider.find(".slider-btn-prev").on("click", function(){
			prevImage();
		})

		$indexItems.on("mouseenter", function(){
			var index = $indexItems.index(this);
			// 기존 선택과 현재 선택을 비교 방향 알아내기
			if(currentIndex>index)
				showImageAt(index,"prev");
			else 
				showImageAt(index,"next");
		})
	}

	function nextImage(){
		console.log("nenxt ", currentIndex);
		showImageAt(currentIndex+1,"next");
	}

	function prevImage(){
		showImageAt(currentIndex-1,"prev");
	}

	//n번째 인덱스 아이템 선택
	function selectIndexAt(index){

		if(currentIndex!=-1)
			$indexItems.eq(currentIndex).removeClass("select");

		$indexItems.eq(index).addClass("select");
	}

	init();
	initEvent();
	showImageAt(1);
}