$(() => {
  $('.header-menu').click(() => {
    $('.header-menu-content').toggleClass('hide');
  });
  
  $('.header-menu-content .close-button').click(() => {
    $('.header-menu-content').toggleClass('hide');
  });

  $('.menu-xs .close-button').click(() => {
    $('.menu-xs').toggleClass('menu-xs-show');
  });

  $('.header-xs .menu').click(() => {
    $('.menu-xs').toggleClass('menu-xs-show');
  });
});