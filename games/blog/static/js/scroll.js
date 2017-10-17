$(document).ready(function (){
	$("#search_title").keyup(function () {
		var keyword = $(this).val();
		console.log(keyword)
		if (keyword != '') {
			$.ajax({
				type : 'POST',
				url : '/ajax/search_title/',
				data : {'keyword' : keyword},
				dataType:'html',

				success : function (result) {
					$(".newsfeed").append(result)

				},
				error : function(e) { console.log('error:'+e.status+"!?");
				}
			});
		} else { console.log("keyowrd else!")}

	});
});