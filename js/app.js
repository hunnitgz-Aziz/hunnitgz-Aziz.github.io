document.addEventListener("DOMContentLoaded", function(event) {
	setTimeout(function(){ 
		$('#preloader').fadeOut('fast');
		
		}, 1000);
});

function fadeOutLinks(){

	$("a[target!='_blank']").on("click", function (e) {
		e.preventDefault();
		newLocation = this.href;

		$('#preloader').fadeIn('fast', newpage);

		function newpage() {
			window.location = newLocation;
		}
	});
}	

fadeOutLinks();



