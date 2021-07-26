$(document).ready(function () {
  $(".slider").owlCarousel({
    items: 1,
    lazyLoad: true,
    loop: true,
  });
  var owl = $(".slider");
  // Go to the next item
  $(".next").click(function () {
    owl.trigger("next.owl.carousel");
  });
  // Go to the previous item
  $(".prev").click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger("prev.owl.carousel", [300]);
  });

  // toggle sidebar 
  $(".toggle-btn").click(function(){
    $(".aside").toggleClass("active");
  });
});
