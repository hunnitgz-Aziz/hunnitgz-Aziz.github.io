var quotes = [
	"You can do anything but everything",
	"If you fail to plan, plan to fail - Benjamin Franklin",
	"Procastination is like a credit card, it's a lot of fun until you get the bill - Christopher Parker",
	"The only thing necessary for the triumph of evil is for good men to do nothing - Edmund Burke"
];

var block = $('#thoughts p');
var randomIndex = Math.floor(Math.random() * quotes.length); 
var randomElement = quotes[randomIndex];
block.append(randomElement);

$(document).ready(function(){
	$("#jquery_jplayer_1").jPlayer({
		ready: function (event) {
			$(this).jPlayer("setMedia", {
				mp3:"http://192.240.102.198:14293/;stream.mp3"
			});
		},
		swfPath: "js",
		supplied: "mp3",
		wmode: "window",
		smoothPlayBar: true,
		keyEnabled: true,
		volume: 0.45,
		cssSelectorAncestor: "",
    cssSelector: {
    	play: "#play",
    	pause: "#pause",
    	mute: ".jp-mute",
    	unmute: ".jp-unmute",
    	volumeMax: '.jp-volume-max',
    	volumeBar: ".jp-volume-bar",
    	volumeBarValue: ".jp-volume-bar-value"
    }
	});
});

$(window).scroll( function(){

/* Check the location of each desired element */
$('.feature-block').each( function(i){
  
  var bottom_of_object = $(this).offset().top;
  var bottom_of_window = $(window).scrollTop() + $(window).height();
  
  /* If the object is completely visible in the window, fade it it */
  if( bottom_of_window > bottom_of_object ){
      
      $(this).animate({'opacity':'1'},500);
          
  }
 });
});


$(document).ready(function(){
  $('.slider').slick({
  	dots: true,
	  infinite: true
  });
});


