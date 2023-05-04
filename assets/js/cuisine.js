$(() => {
  $('.image-thumbnails-list img').click(function () {
    const group = $(this).attr('group');
    $(`#${group} .image-thumbnails-list img`).removeClass('active');
    $(this).addClass('active');
    $(`#${group} .image-thumbnails-content`).attr('src', $(this).attr('src'));
  });
});