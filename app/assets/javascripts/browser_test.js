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
	
	//Load data from control site(Cloud Front) https://d2b75q7u5jtkag.cloudfront.net/assets/application.js

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


   	//beacon-1.newrelic.com - JavaScript performance monitoring
   	if(typeof NREUMQ === 'undefined'){
		$("#newrelic").text(" not loaded");
		replaceStyleFalse("#newrelic");
	}else{
		$("#newrelic").text("loaded ");
		replaceStyle("#newrelic");
	}
   	//d1ros97qkrwjf5.cloudfront.net - JavaScript performance monitoring
   	testWithImage(["#imagecloudfront","#cloudfront",910, 44])
    //continuitycontrol.assistly.com - Customer Support

    //continuitycontrol.desk.com - Customer Support
    //control-production.s3-us-gov-west-1.amazonaws.com - GovCloud S3
    //*.livechatinc.com (include all subdomains) - Customer Support
    liveChat();
    //sendgrid.continuity.net - E-Mail and communication services
    testWithImage(["#imagesendgrid", "#sendgrid", 160, 45]);
    //maps-api-ssl.google.com - Google Maps
    googleMaps();
    //continuity.app4.hubspot.com - Site-usage analytics

    //google.com/jsapi - Google for CDN of JS libraries
    googlejsapi();
    //ssl.google-analytics.com - Site-usage analytics
    googleAnalytics();
    //maps.googleapis.com - Google APIs
    //maps.gstatic.com - Google APIs
    //mts0.googleapis.com - Google APIs
    //mts1.googleapis.com - Google APIs
    //seal.qualys.com - Security scan seal
    testWithImage(["#imagesealqualys","#sealqualys",89, 47]);
    //seal.thawte.com - SSL verification seal

    //d2b75q7u5jtkag.cloudfront.net - Continuity Control's Content CDN
    if(control.datepicker_opts === undefined){
		$("#cloudfrontd2").text("Javascript: d2 loaded ");
		replaceStyleFalse("#cloudfrontd2");
	}else{
		$("#cloudfrontd2").text("Javascript: d2 loaded ");
		replaceStyle("#cloudfrontd2");
	}
    //s3.amazonaws.com/continuity-production - Content CDN and secure file downloads
    //continuity-production.s3.amazonaws.com - Content CDN and secure file downloads
    //code.google.com/p/swfobject/ - In-page Flash media support
	
});