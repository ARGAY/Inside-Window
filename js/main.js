//------------ menu remove class active ----------//
$('nav a').click(function() {
  $('nav a').removeClass('active');
});
//-----------------------------------------------//

//----------------- slider banner -------------- //
$('.slide-one').owlCarousel({
  loop: true,
  nav: true,
  autoplay: true,
  autoplayHoverPause:true,
  navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>"
  ],
  margin: 0,
  items: 1
});
//----------------------------------------------//

//--------------- slider portfolio  ------------//
var owlTwo = $('.slide-two').owlCarousel({
  loop: true,
  nav: true,
  dots:false,
  margin: 30,
  items: 4,
  responsive:{
    1400:{
      items: 4
    }
  },
  navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>"
  ]
});
owlTwo.on('mousewheel', '.owl-stage', function (e) {
  if (e.deltaY > 0) {
    owlTwo.trigger('next.owl');
  } else {
    owlTwo.trigger('prev.owl');
  }
  e.preventDefault();
});
//----------------------------------------------//

//----------- video scroll box -----------------//
var slideScrollWidth = $('#slide-scroll').css({left: 0}).width();
var scrollBoxWidth = $('.scroll-items').width();

function checkPosition(){
  var position = $('#green').slider('value');
  $('#slide-scroll').css({
    left: '-'+ position +'px'
  })
}
$('#green').slider({
  orientation: 'horizontal',
  range: 'min',
  max: slideScrollWidth - scrollBoxWidth,
  value: 0,
  slide: checkPosition,
  change: checkPosition
});
$('.ui-slider-handle').append(
  "<div class='fa-buttons'>" +
  "<i class='fa fa-chevron-left'></i>" +
  "<i class='fa fa-chevron-right'></i>" +
  "</div>"
  );
//----------------------------------------------//

//------------ slider popular goods ------------//
$('.slide-three').owlCarousel({
  loop: true,
  nav: true,
  dots:false,
  margin: 14,
  items: 3,
  navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>"
  ]
});
//----------------------------------------------//