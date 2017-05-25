$(function(){
  $(document).on('click', '.delete', function(){
    $(this).closest('.image').remove();
  });
});