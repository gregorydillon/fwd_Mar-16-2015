

// $("document").ready(function(){

//     // $(.intro).css("background-color":"red");
//     $("p").css("background-color","green");
// })


// $('textarea').on('keypress', function () {
//   console.log('yay');
// });

$('textarea').on('keyup', function () {
  var remaining = 140 - $(this).val().length;

  $('.tweet-counter').text(remaining);

    $('input').prop('disabled', remaining < 0);

  // if (remaining <0){

  // }

});
