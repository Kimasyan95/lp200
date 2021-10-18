$(document).ready(function() {
  $('.js-youtube-play').click(function() {
    $(this).parent('.video').append(`<iframe src="https://www.youtube.com/embed/${$(this).data('id')}?autoplay=1&autohide=1&version=3&hl=ru_RU&rel=0" frameborder="0" style="width: 100%; height: 315px;"></iframe>`)

    $(this).parent('.video--small').append(`<iframe src="https://www.youtube.com/embed/${$(this).data('id')}?autoplay=1&autohide=1&version=3&hl=ru_RU&rel=0" frameborder="0" style="width: 100%; height: 240px;"></iframe>`)

    $(this).remove();
  });
  
  // $(".js-phone-field").inputmask("+7 (999) 999-9999", {
  //   placeholder: "_",
  //   clearMaskOnLostFocus: false,
  // });

  const menu = document.querySelector('.header__menu');
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('active');
  });

});

