// Модальные окна
$(document).ready(function(){
$(".open_modal").click(function()
{
 $('#overflow').fadeIn(300);
 var iddiv = $(this).attr("iddiv");
 $('#'+iddiv).fadeIn(300);
 $('#overflow').attr('opendiv',iddiv);
 return false;
});
 
$('#overflow, .close_button').click(function()
{
 var iddiv = $("#overflow").attr('opendiv');
 $('#overflow').fadeOut(300);
 $('#'+iddiv).fadeOut(300);
});

});
