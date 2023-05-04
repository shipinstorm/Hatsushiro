$(() => {
  $('.header-menu').click(() => {
    $('.header-menu-content').toggleClass('hide');
  });
  
  $('.header-menu-content .close-button').click(() => {
    $('.header-menu-content').toggleClass('hide');
  })
});