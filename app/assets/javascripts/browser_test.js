function googleAnalytics(){
	if (typeof _gat ===  'undefined') { //TODO undefined
    	$("#googleA").text("not Loaded");
		replaceStyleFalse("#googleA");
    } else {
    	$("#googleA").text("Loaded");
		replaceStyle("#googleA");
    }
}
function liveChat() {
    if (typeof LC_API === 'undefined') {
    	$("#livechatapp").text("not Loaded");
		replaceStyleFalse("#livechatapp");
    } else {
        $("#livechatapp").text("Loaded");
		replaceStyle("#livechatapp");
    }
}
function googleMaps(){
	if (typeof mapOptions === 'undefined') {
    	$("#googlemaps").text("not Loaded");
		replaceStyleFalse("#googlemaps");
    } else {
        $("#googlemaps").text("Loaded");
		replaceStyle("#googlemaps");
    }	
}
function googlejsapi(){
	if (typeof google.loader === 'undefined') {
    	$("#jsapi").text("not Loaded");
		replaceStyleFalse("#jsapi");
    } else {
        $("#jsapi").text("Loaded");
		replaceStyle("#jsapi");
    }	
}
function testWithImage(arguments){
	if($(arguments[0]).width() == arguments[2] && $(arguments[0]).height() == arguments[3]){
		$(arguments[1]).text("Loaded");
		replaceStyle(arguments[1]);
	}
	else{
		$(arguments[1]).text("error");
		replaceStyleFalse(arguments[1]);
	}
}
function replaceStyle(domID)
{
	$(domID).parents(".alert").removeClass("grey").removeClass('alert-error').addClass("alert-success");
}
function replaceStyleFalse(domID)
{
	$(domID).parents(".alert").removeClass("grey").addClass("alert-error");
}
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
var __lc = {};
    __lc.license = 1089691;
var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-31337942-1']);
    _gaq.push(['_trackPageview']);
$(function(){
	//loading data from client
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
	
	if(window.session.browser.browser != undefined && window.session.browser.version != undefined){
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
	
	// loading data from continuity site

	if(control.datepicker_opts != undefined && $("#image1").width() == 181 && $("#image1").height() == 74){
		$("#continuity").text("Javascript: loaded  Picture: loaded");
		replaceStyle("#continuity");
	}
	else if($("#image1").width() == 181 && $("#image1").height() == 74 && control.datepicker_opts == undefined){
		$("#continuity").text("Javescript: failed  Picture: loaded");
		replaceStyleFalse("#continuity");
	}
	else if($("#image1").width() != 181 && $("#image1").height() != 74 && control.datepicker_opts != undefined){
		$("#continuity").text("Javescript: loaded  Picture: failed");
		replaceStyleFalse("#continuity");
	}
	else{
		$("#continuity").text("Javescript: failed  Picture: failed");
		replaceStyleFalse("#continuity");
	}


	//loading data from 3rd party sites 
	if(control.datepicker_opts === undefined){
		$("#cloudfrontd2").text("Javascript: d2 loaded ");
		replaceStyleFalse("#cloudfrontd2");
	}else{
		$("#cloudfrontd2").text("Javascript: d2 loaded ");
		replaceStyle("#cloudfrontd2");
	}

	testWithImage(["#imagecloudfront","#cloudfront",910, 44])
	testWithImage(["#imagenewrelic", "#newrelic", 348, 92]);
	testWithImage(["#imagesendgrid", "#sendgrid", 160, 45]);
	
	/*
	var doc = document.documentElement.outerHTML();
	if(doc.getElementsByTagName("flash") == undefined){
		$("#continuity.desk").text("Loaded");
		replaceStyle("#continuity.desk");
	}
	else{
		$("#continuity.desk").text("error");
		replaceStyleFalse("#continuity.desk");
	}
	*/
	
	liveChat();
	googleAnalytics();
	googleMaps();
	googlejsapi();
});