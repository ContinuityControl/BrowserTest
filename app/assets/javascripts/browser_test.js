$(function(){
	$("#userAgent").text(navigator.userAgent);
	replaceStyle("#userAgent");
	$("#windowSize").text( window.session.device.viewport.width + " x "+ window.session.device.viewport.height);
	replaceStyle("#windowSize");
	$("#screenSize").text(window.session.device.screen.width + " x " + window.session.device.screen.height);
	replaceStyle("#screenSize");
	$("#os").text(window.session.browser.os);
	replaceStyle("#os");
	$("#browser").text(window.session.browser.browser + " Version: " + window.session.browser.version);
	replaceStyle("#browser");
	$("#flashEnabled").text(window.session.plugins.flash);
	replaceStyle("#flashEnabled");
	$("#date").text(Date());
	replaceStyle("#date");

	if(control.datepicker_opts != undefined){
		replaceStyle("#script");
		$("#script").text("loaded");
	}
	else{
		$( "#script" ).text( "Script failed to load" );
	}

	if($("#image1").width() == 181 && $("#image1").height() == 74){
		$("#picture").text("loaded");
		replaceStyle("#picture");
	}
	else{
		$("#picture").text("not loaded");
	}
});
function replaceStyle(domID)
{
	$(domID).parents(".alert").removeClass("alert-error").addClass("alert-success");
}