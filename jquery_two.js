$(function() {
  $('.button').on('click',  function(event) {
     $('.modal_window').toggleClass('modal_window_active');
     $('.modal_window').load("sog.html");
  });
  $('form').submit(function(event) {
    event.preventDefault();
    var namee = $('.po').val();
    $.$.ajax({
      url: 'ob.php',
      type: 'GET',
      dataType: 'html',
      data: {name: namee},
    })
    .done(function() {
      console.log("success");
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
    
  });
});