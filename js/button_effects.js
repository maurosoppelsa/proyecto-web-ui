
$('#main_BT').hover(function(){

$('#main_BT span').slideUp();

$('#main_BT img').slideDown();

}).mouseleave(function(){

  $('#main_BT span').slideDown();

  $('#main_BT img').slideUp();

});

$('#main_BT').click(function(){

  $('body').addClass('body_snow');

  $('#arrow-img').fadeOut(1000);

});
