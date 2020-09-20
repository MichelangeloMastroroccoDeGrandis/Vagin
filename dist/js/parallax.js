// add background url to section and add data-type and data-speed to any section you want

$(function () {
  //cache the window object
  var $window = $(window);

  // Parallax Backgrond
  $('section[data-type="background"]').each(function () {
    var $bgobj = $(this);

    $(window).scroll(function () {
      var yPos = -($window.scrollTop() / $bgobj.data("speed"));

      var coords = "50% " + yPos + "px";

      $bgobj.css({ backgroundPosition: coords });
    });
  });
});
