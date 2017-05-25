$(function(){
  $(document).on('click', '.delete', function(){
    $(this).closest('.image').remove();
  });

  $(document).on('click', '.image-to-add', function(){
    let image_src = $(this).attr('src');
    $('.images').append(`<img src="${image_src}">`);
  });

});