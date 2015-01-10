function fadeInteractive(start, total) {
	if (start < total) {
		$('#int'+start).stop().animate({
            opacity: 1
        }, 1500, function() {fadeInteractive(start+1, total);});
	}
}