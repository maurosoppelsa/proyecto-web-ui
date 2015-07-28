
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

  $(this).fadeOut(1000);

  move_your_feet()

});

function move_your_feet(){

    setTimeout(function () {

      $('#foot1').fadeIn();

    }, 2000);

    setTimeout(function () {

      $('#foot2').fadeIn();

    }, 3000);

    setTimeout(function () {

      $('#foot3').fadeIn();

    }, 4000);

    setTimeout(function () {

      $('#foot4').fadeIn();

    }, 5000);

    setTimeout(function () {

      $('#foot5').fadeIn();

    }, 6000);

    setTimeout(function () {

      $('#foot6').fadeIn();

    }, 7000);

    setTimeout(function () {

      $('#foot7').fadeIn();

    }, 8000);

    setTimeout(function () {

      $('#foot8').fadeIn();

    }, 9000);
}
