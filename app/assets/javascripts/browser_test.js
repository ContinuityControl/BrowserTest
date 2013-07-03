$(function() {
  $("#userAgent").text(navigator.userAgent);
  $("#windowSize").text( window.session.device.viewport.width + " x "+ window.session.device.viewport.height);
  $("#screenSize").text(window.session.device.screen.width + " x " + window.session.device.screen.height);
  $("#os").text(window.session.browser.os);
  $("#browser").text(window.session.browser.browser + " Version: " + window.session.browser.version);
  $("#flashEnabled").text(window.session.plugins.flash);
  $("#date").text(Date());
 });