$(function () {

  $('.fixtures-menu').on('click', function() {
    $('.fixtures-menu').attr('id', 'active');
    $('.groups-menu').attr('id', '');
    $('.fixtures').css('display', 'block')
    $('.standings').css('display', 'none')
  });

  $('.groups-menu').on('click', function() {
    $('.groups-menu').attr('id', 'active');
    $('.fixtures-menu').attr('id', '');
    $('.fixtures').hide();
    $('.standings').css('display', 'block');
  });


});