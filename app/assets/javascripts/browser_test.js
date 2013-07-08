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
  $('#image1')
	.load('https://d2b75q7u5jtkag.cloudfront.net/assets/cc_logos/CC_logo_white-230aa004e30cf403e251042f65d3a798.png',function(){
		$('#picture').text('Loaded');	
		replaceStyle("#picture");
	})
	.error(function(){
		$('#picture').text('Unable to load');
	});


});
function replaceStyle(domID)
{
	$(domID).parents(".alert").removeClass("alert-error").addClass("alert-success");
}