$(function(){
	if(navigator.userAgent != undefined){
		$("#userAgent").text(navigator.userAgent);
		replaceStyle("#userAgent");
	}
	else{
		replaceStyleFalse("#userAgent");
		$("#userAgent").text("User Agent undefined");
	}	
	
	if(window.session.device.viewport.width != undefined && window.session.device.viewport.height != undefined){
		$("#windowSize").text( window.session.device.viewport.width + " x "+ window.session.device.viewport.height);
		replaceStyle("#windowSize");
	}
	else{
		$("#windowSize").text("Window size undefined");
		replaceStyleFalse("#windowSize");
	}
	
	if(window.session.device.screen.width != undefined && window.session.device.screen.height != undefined){
		$("#screenSize").text(window.session.device.screen.width + " x " + window.session.device.screen.height);
		replaceStyle("#screenSize");
	}
	else{
		$("#screenSize").text("Screen size undefined");
		replaceStyleFalse("#screenSize");
	}
	
	if(window.session.browser.os != undefined){
		$("#os").text(window.session.browser.os);
		replaceStyle("#os");
	}
	else{
		$("#os").text("os undefined");
		replaceStyleFalse("#os");
	}
	
	if(window.session.browser.browser != undefined && window.session.browser.version != undefined){//add weather it is suported or not 
		$("#browser").text(window.session.browser.browser + " Version: " + window.session.browser.version);
		replaceStyle("#browser");
	}
	else{
		$("#browser").text("Browser undefined");
		replaceStyleFalse("#browser");
	}
	
	if(window.session.plugins.flash == true && window.session.plugins.flash != undefined){
		$("#flashEnabled").text(window.session.plugins.flash);
		replaceStyle("#flashEnabled");
	}
	else{
		$("#flashEnabled").text("Flash Disabled");
		replaceStyleFalse("#flashEnabled");
	}
	
	if(Date() != undefined){
		$("#date").text(Date());
		replaceStyle("#date");
	}
	else{
		$("#date").text("Date undefined");
		replaceStyleFalse("#date");
	}
	
	if(control.datepicker_opts != undefined){
		replaceStyle("#script");
		$("#script").text("loaded");
	}
	else{
		replaceStyleFalse("#script");
		$( "#script" ).text( "Script failed to load" );
	}

	if($("#image1").width() == 181 && $("#image1").height() == 74){
		$("#picture").text("loaded");
		replaceStyle("#picture");
	}
	else{
		replaceStyleFalse("#picture");
		$("#picture").text("not loaded");
	}
});
function replaceStyle(domID)
{
	$(domID).parents(".alert").removeClass("grey").addClass("alert-success");
}
function replaceStyleFalse(domID)
{
	$(domID).parents(".alert").removeClass("grey").addClass("alert-error");
}