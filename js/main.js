$(document).ready(function() {
  $('.js-youtube-play').click(function() {
    $(this).parent('.video').append(`<iframe src="https://www.youtube.com/embed/${$(this).data('id')}?autoplay=1&autohide=1&version=3&hl=ru_RU&rel=0" frameborder="0" style="width: 100%; height: 315px;"></iframe>`)

    $(this).parent('.video--small').append(`<iframe src="https://www.youtube.com/embed/${$(this).data('id')}?autoplay=1&autohide=1&version=3&hl=ru_RU&rel=0" frameborder="0" style="width: 100%; height: 240px;"></iframe>`)

    $(this).remove();
  });

  $('.hamburger').on('click', () => {
    $('.hamburger').toggleClass('hamburger_active');
    $('.header__menu').toggleClass('active');
  });


  $("#up").on("click", function (event) {
    event.preventDefault(); 
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
  });

});

