$(document).ready(function(){
    $('#nav-icon').click(function(){
      $(this).toggleClass('animate-icon');
      $('.collapse').fadeToggle();
    });
  });