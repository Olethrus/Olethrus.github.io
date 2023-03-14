$(document).ready(function() {
  $('nav li').click(function(e) {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $('nav li').removeClass('active');
      $(this).addClass('active');
    }
    e.stopPropagation();
  });

  $(document).click(function() {
    $('nav li').removeClass('active');
  });
});