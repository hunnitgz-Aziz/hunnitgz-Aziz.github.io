$(document).ready(function() {
	$(".more-down").click(function () {
		$('html, body').animate({ scrollTop: $("#about").offset().top }, "fast");
	})
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(window).scroll(function () {
    $('.box').each(function () {
        if (($(this).offset().top - $(window).scrollTop()) < 130) {
            $(this).stop().fadeTo(100, 0);
        } else {
            $(this).stop().fadeTo(1, 1);
        }
    });
});