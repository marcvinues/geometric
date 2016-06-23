$(document).ready(function() {

	var Box = function() {
		this.fill = "<div class='box-container'><div class='circle'></div></div>";
	}

	Box.prototype.diamond = function() {
		var count = 1;
		var html = '';
		while (count < 6) {
			html = '';
			for (i = 1; i <= count; i++){
				html = html + this.fill;
			}
			$('.contd').append("<div class='line'>" + html + "</div>");
			count++;
		}
		while (count > 2) {
			html = '';
			for (i = count; i > 2; i--){
				html = html + this.fill;
			}
			$('.contd').append("<div class='line'>" + html + "</div>");
			count--;
		}
	}

	var box = new Box();
	box.diamond();

	var container = $('.cont');
	var rows = 5;
	var cols = 5;
	var cells = [];
	for(var i = 0; i < 5; i++){
	  for(var j = 0; j < 5; j++) {
	    var cell = $('<div style="opacity:0">').addClass('cell');
			var a = $('.cell').animate({'opacity':'1'}, "slow");
	    cells.push(cell);
	    container.append(cell);
	  }
	}
	var q = $('#q');
	var p = $('.contd');
	q.hide();
	p.hide();

	$('#square').click(function(){
		$('#q, .shapes').toggle();
		$('.shapes').text("Square").toggle();
	});
	$('#diamond').click(function(){
		$('.contd, .shapes').toggle();
		$(".shapes").text("Diamond").toggle();
	});
});
