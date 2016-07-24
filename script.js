
$(function() {

	$(".submit-button").click(function() {
		var statusText= $('form.status input[name=statuswindow]').val();
		$('.newsfeed').append("<li>" + statusText + "</li>");
	});

	var template = function(status) {
		return "<li>" + 
				"<span class=\"author\">" + status.author + "</span>" +
				"<span class=\"text\">" + status.text + "</span>" +
			"</li>";
	};

	
	$.get("data.json", function(data) {
		console.log ("got data");
		for (var i in data) {
			var formattedPost = template(data[i]);
	 		$(".newsfeed").append(formattedPost);
		};
	});

	$.post("microblog.html", function(data) {
		$(".newsfeed").html(data);
	});
});