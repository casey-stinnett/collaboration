$(function(){
  $(document).on('click', '.delete', function(){
    $(this).closest('.image').remove();
  });

  $(document).on('click', '.image-to-add', function(){
    let image_src = $(this).attr('src');
    $('#grid-container').append(`
      <div class="image">
        <button class="delete">
          <span>X</span>
        </button>
        <img src="${image_src}">
      </div>
    `);
  });

});