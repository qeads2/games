$(document).ready(function (){
	console.log("hello");
	$(".search-query").keyup(function () {
		var title = $(this).val();
		console.log(title)
		$.ajax({
			url:'/ajax/search_title',
			data: {
				'title':title
			},
			dataType:'json',
			success: function(data) {
				if(result) {
					alert(result);
				}
			}

		});
	});
});