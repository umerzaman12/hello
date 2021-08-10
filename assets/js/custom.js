setTimeout(function(){
	$('.loader_bg').fadeToggle();
  }, 500);
  
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("mynavbar");
function myFunction() {
  if (window.pageYOffset >= 100) {
	navbar.classList.add("sticky")
  } else {
	navbar.classList.remove("sticky");
  }
}

$(document).ready(function() {
	$('select').niceSelect();
  });


(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Get the forms we want to add validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

 // Client Area Owl Carousel
$("#owl-client").owlCarousel({
	pagination : false,
	center: true,
	loop:true,
	dots:false,
	margin:0,
	nav:false,
	autoplay:true,
	smartSpeed:1000,
	autoplayTimeout:2000,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:3
		},
		1000:{
			items:5
		}
	}
  });
  
 $("#testimonial-slider").owlCarousel({      
	pagination : false,
	loop:true,
	 dots:false,
	 margin:20,
	 nav:false,
	autoplay:true,
	autoplayTimeout:3000,
	autoplayHoverPause:true,
	responsive:{
		0:{
			items:1
		},
		767:{
			items:1
		},
		1000:{
			items:1
		}
	}
  });

  $("#screenshots-carousel").owlCarousel({      
	pagination : false,
	loop:true,
	 dots:false,
	 margin:30,
	 nav:false,
	 center:true,
	autoplay:true,
	autoplayTimeout:3000,
	autoplayHoverPause:true,
	responsive:{
		0:{
			items:2
		},
		500:{
			items:3
		},
		1000:{
			items:4
		}
	}
  });



  // Popup Video
$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	disableOn: 100,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	fixedContentPos: false
});



  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox({
        'share': false
      });
    });
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

