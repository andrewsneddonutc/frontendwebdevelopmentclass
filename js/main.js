var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
  showDivs(slideIndex += n);
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("carousel_image");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
var modal = document.getElementById('modal_section');
var btn = document.getElementById('reservation_button');
$('.brunch_button').on('click', function(event) {
  event.preventDefault();
  $('.brunch').fadeIn('slow');
  $('.dinner').hide();
  $('.drinks').hide();
});
$('.dinner_button').on('click', function(event) {
  event.preventDefault();
  $('.dinner').fadeIn('slow');
  $('.brunch').hide();
  $('.drinks').hide();
});
$('.drinks_button').on('click', function(event) {
  event.preventDefault();
  $('.drinks').fadeIn('slow');
  $('.brunch').hide();
  $('.dinner').hide();
});
$('#reservation_button').on('click', function(event) {
  event.preventDefault();
  $('.modal_section').fadeIn('slow');
});
$('#close_button').on('click', function(event) {
  event.preventDefault();
  $('.modal_section').fadeOut('slow');
});
let nameBlah = () => {
  $('.dinner').hide();
  $('.drinks').hide();
};
nameBlah();
