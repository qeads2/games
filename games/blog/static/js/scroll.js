$(document).ready(function (){
	$("#search_title").keyup(function () {
		var keyword = $(this).val();
		console.log(keyword)
		if (keyword != '') {
			$.ajax({
				type : 'POST',
				url : '/ajax/search_title/',
				data : {'keyword' : keyword},
				dataType:'json',

				success : function (result) {
					if (result.length > 0) {
						$("#search_title").html("")
					} else {
						console.log(result);
					}
				},
				error : function(e) { console.log('error:'+e.status+"!?");}
			});
		} else { console.log("keyowrd else!")}

	});
});