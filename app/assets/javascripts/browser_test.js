function googleAnalytics(){
	if (typeof _gat ===  'undefined') {
    	$("#googleA").text("not Loaded");
		replaceStyleFalse("#googleA");
		other_site = other_site + ', ' + "Google Analytics: Not Loaded"
		other_sites_display = other_sites_display + ', ' + "Google Analytics: Not Loaded"
    } else {
    	$("#googleA").text("Loaded");
		replaceStyle("#googleA");
		other_site = other_site + ', ' + "Google Analytics: Not Loaded"
    }
}
function liveChat() {
    if (typeof LC_API === 'undefined') {
    	$("#livechatapp").text("not Loaded");
		replaceStyleFalse("#livechatapp");
		other_site = other_site + ', ' + "LiveChat: Not Loaded"
		other_sites_display = other_sites_display + ', ' + "LiveChat: Not Loaded"
    } else {
        $("#livechatapp").text("Loaded");
		replaceStyle("#livechatapp");
		other_site = other_site + ', ' + "LiveChat: Loaded"
    }
}
function googleMaps(){
	if (typeof mapOptions === 'undefined') {
    	$("#googlemaps").text("not Loaded");
		replaceStyleFalse("#googlemaps");
		//other_site = other_site + ', ' + "Google Maps: Not Loaded"
		//other_sites_display = other_sites_display + ', ' + "Google Maps: Not Loaded"
    } else {
        $("#googlemaps").text("Loaded");
		replaceStyle("#googlemaps");
		//other_site = other_site + ', ' + "Google Maps: Loaded"
    }	
}
function googlejsapi(){
	if (typeof google.loader === 'undefined') {
    	$("#jsapi").text("not Loaded");
		replaceStyleFalse("#jsapi");
		other_site = other_site + ', ' + "jsapi: Not Loaded"
		other_sites_display = other_sites_display + ', ' + "jsapi: Not Loaded"
    } else {
        $("#jsapi").text("Loaded");
		replaceStyle("#jsapi");
		other_site = other_site + ', ' + "jsapi: Loaded"
    }	
}
function testWithImage(imageID, textID ,width, height, title){
	if($(imageID).width() == width && $(imageID).height() == height){
		$(textID).text("Loaded");
		replaceStyle(textID);
		other_site = other_site + ', ' + title + ": Loaded"
	}
	else{
		$(textID).text("error");
		replaceStyleFalse(textID);
		other_site = other_site + ', ' + title + ": Not Loaded"
		other_sites_display = other_sites_display + ', ' + title + ": Not Loaded"
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
//Google Analytics 
var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-31337942-1']);
    _gaq.push(['_trackPageview']);
// honey badger
//Honeybadger.configure({
 // api_key: 'your public api key'
//});

//try {
 // ...error producing code...
//} catch(e) {
  //Honeybadger.notify(e);
//}

var other_site = "";
var other_sites_display = "";
$(function(){
	//fades notices after appearing	
	$('#flash').fadeOut(4000);

	//changing btn to send data to continuity
	$('[name="commit"]').val("Send Data");
	$('[name="commit"]').addClass("btn");
	//loading data from client
	if(navigator.userAgent != undefined){
		$("#userAgent").text(navigator.userAgent);
		replaceStyle("#userAgent");
		$("#user_datum_user_agent_string").val(navigator.userAgent);
	}
	else{
		replaceStyleFalse("#userAgent");
		$("#userAgent").text("User Agent undefined");
		$("#user_datum_user_agent_string").val("User Agent undefined");
	}	
	
	if(window.session.device.viewport.width != undefined && window.session.device.viewport.height != undefined){
		$("#windowSize").text( window.session.device.viewport.width + " x "+ window.session.device.viewport.height);
		replaceStyle("#windowSize");
		$("#user_datum_window_size").val(window.session.device.viewport.width + " x "+ window.session.device.viewport.height);
	}
	else{
		$("#windowSize").text("Window size undefined");
		replaceStyleFalse("#windowSize");
		$("#user_datum_window_size").val("Window size undefined");
	}
	
	if(window.session.device.screen.width != undefined && window.session.device.screen.height != undefined){
		$("#screenSize").text(window.session.device.screen.width + " x " + window.session.device.screen.height);
		replaceStyle("#screenSize");
		$("#user_datum_screen_size").val(window.session.device.screen.width + " x " + window.session.device.screen.height);
	}
	else{
		$("#screenSize").text("Screen size undefined");
		replaceStyleFalse("#screenSize");
		$("#user_datum_screen_size").val("Screen size undefined");
	}
	
	if(window.session.browser.os != undefined){
		$("#os").text(window.session.browser.os);
		replaceStyle("#os");
		$("#user_datum_operating_system").val(window.session.browser.os);
	}
	else{
		$("#os").text("OS undefined");
		replaceStyleFalse("#os");
		$("#user_datum_operating_system").val("OS undefined");
	}
	
	if(window.session.browser.browser != undefined && window.session.browser.version != undefined){
		$("#browser").text(window.session.browser.browser + " Version: " + window.session.browser.version);
		replaceStyle("#browser");
		$("#user_datum_web_browser").val(window.session.browser.browser + " Version: " + window.session.browser.version);
	}
	else{
		$("#browser").text("Browser undefined");
		replaceStyleFalse("#browser");
		$("#user_datum_web_browser").val("Browser undefined");
	}
	
	if(window.session.plugins.flash == true && window.session.plugins.flash != undefined){
		$("#flashEnabled").text(window.session.plugins.flash);
		replaceStyle("#flashEnabled");
		$("#user_datum_flash_enabled").val(window.session.plugins.flash);
	}
	else{
		$("#flashEnabled").text("False");
		replaceStyleFalse("#flashEnabled");
		$("#user_datum_flash_enabled").val("False");
	}
	if(Date() != undefined){
		$("#date").text(Date());
		replaceStyle("#date");
		$("#user_datum_date").val(Date());
	}
	else{
		$("#date").text("Date undefined");
		replaceStyleFalse("#date");
		$("#user_datum_date").val("Date undefined");
	}
	//Load data from control site(Cloud Front) https://d2b75q7u5jtkag.cloudfront.net/assets/application.js

	if(control.datepicker_opts != undefined && $("#image1").width() == 181 && $("#image1").height() == 74){
		$("#continuity").text("Javascript: loaded  Picture: loaded");
		replaceStyle("#continuity");
		$("#user_datum_continuity_site").val("Continuity Site: Javascript: loaded  Picture: loaded");

	}
	else if($("#image1").width() == 181 && $("#image1").height() == 74 && control.datepicker_opts == undefined){
		$("#continuity").text("Javescript: failed  Picture: loaded");
		replaceStyleFalse("#continuity");
		$("#user_datum_continuity_site").val("Continuity Site: Javescript: failed  Picture: loaded");
	}
	else if($("#image1").width() != 181 && $("#image1").height() != 74 && control.datepicker_opts != undefined){
		$("#continuity").text("Javescript: loaded  Picture: failed");
		replaceStyleFalse("#continuity");
		$("#user_datum_continuity_site").val("Continuity Site: Javescript: loaded  Picture: failed");
	}
	else{
		$("#continuity").text("Javescript: failed  Picture: failed");
		replaceStyleFalse("#continuity");
		$("#user_datum_continuity_site").val("Continuity Site: Javescript: failed  Picture: failed");
	}


	//loading data from 3rd party sites 


   	//beacon-1.newrelic.com - JavaScript performance monitoring
   	if(typeof NREUMQ === 'undefined'){
		$("#newrelic").text(" not loaded");
		replaceStyleFalse("#newrelic");
		other_site = other_site + ', ' + "NewRelic: Not Loaded";
		other_sites_display = "NewRelic: Not Loaded";
	}else{
		$("#newrelic").text("loaded ");
		replaceStyle("#newrelic");
		other_site = other_site + ', ' + "NewRelic: Loaded"
	}
   	//d1ros97qkrwjf5.cloudfront.net - JavaScript performance monitoring
   	testWithImage("#imagecloudfront","#cloudfront",910, 44, "Cloud Front(d1)")
    //continuitycontrol.assistly.com - Customer Support

    //continuitycontrol.desk.com - Customer Support
    
    //control-production.s3-us-gov-west-1.amazonaws.com - GovCloud S3
    //*.livechatinc.com (include all subdomains) - Customer Support
    liveChat();
    //sendgrid.continuity.net - E-Mail and communication services
    
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
    testWithImage("#imagesealqualys","#sealqualys",89, 47, "Security Scan Seal");
    //seal.thawte.com - SSL verification seal
    /*
    $.ajax({

        url: 'https://seal.thawte.com/getthawteseal',
        type: 'GET',
        crossDomain: true,
        success: function() { },
        error: function() { },// add in correct erros 

    });
    */
    //d2b75q7u5jtkag.cloudfront.net - Continuity Control's Content CDN
    if(typeof control.datepicker_opts === 'undefined'){
		$("#cloudfrontd2").text("Javascript: d2 loaded ");
		replaceStyleFalse("#cloudfrontd2");
		other_site = other_site + ', ' + "d2b75q7u5jtkag.cloudfront.net: Not Loaded";
		other_sites_display = other_sites_display +', ' + "d2b75q7u5jtkag.cloudfront.net: Not Loaded";
	}else{
		$("#cloudfrontd2").text("Javascript: d2 loaded ");
		replaceStyle("#cloudfrontd2");
		other_site = other_site + ', ' + "d2b75q7u5jtkag.cloudfront.net: Loaded"
	}
    //s3.amazonaws.com/continuity-production - Content CDN and secure file downloads
    
    //continuity-production.s3.amazonaws.com - Content CDN and secure file downloads

    //Honey badger
    /*
    if(typeof Honeybadger === 'undefined'){
    	$("#honeyBadger").text("not loaded");
		replaceStyleFalse("#honeyBadger");
    } else {
    	$("#honeyBadger").text("Loaded");
		replaceStyle("#honeyBadger");
    }
	*/
	if(other_sites_display.length <= 0){
		$("#3rdparty").text("All Sites work");
		replaceStyle("#3rdparty");
	} else {
		$("#3rdparty").text(other_sites_display);
		replaceStyleFalse("#3rdparty");
	}
	$("#user_datum_other_sites").val(other_site);
});