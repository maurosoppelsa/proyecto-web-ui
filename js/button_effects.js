
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

  move_your_feet();
  horizon();
  sound_track();


});

function move_your_feet(){

    setTimeout(function () {

      $('#foot1').fadeIn("fast");

    }, 2000);

    setTimeout(function () {

      $('#foot2').fadeIn("fast");

    }, 3000);

    setTimeout(function () {

      $('#foot3').fadeIn("fast");

    }, 4000);

    setTimeout(function () {

      $('#foot4').fadeIn("fast");

    }, 5000);

    setTimeout(function () {

      $('#foot5').fadeIn("fast");

    }, 6000);

    setTimeout(function () {

      $('#foot6').fadeIn("fast");

    }, 7000);

    setTimeout(function () {

      $('#foot7').fadeIn("fast");

    }, 8000);

    setTimeout(function () {

      $('#foot8').fadeIn("fast");

    }, 9000);
}

function horizon(){

setTimeout(function () {

  $('#horizon_line').addClass('horizon');

}, 9000);

}

function sound_track(){

setTimeout(function () {

$('#the_audio').append('<audio id="audio_song" controls autoplay><source src="sounds/Faust.mp3" type="audio/mpeg"></audio>');

}, 1000);

}
