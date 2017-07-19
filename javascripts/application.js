// Difference to footer height
var heightDifference = 20;

// Function fix the link "topo"
$(window).scroll(function() {

  var screenPosition = $(window).scrollTop() + $(window).height();  
  var footerSize = $(document).height() - $("footer").height();

  if(screenPosition > footerSize + heightDifference) 
     $("a").addClass("fixed");
  else
    $("a").removeClass("fixed");

});