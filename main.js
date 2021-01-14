$(function () {

  $('.fixtures-menu').on('click', function() {
    $('.fixtures-menu').attr('id', 'active');
    $('.groups-menu').attr('id', '');
    $('.playoffs-menu').attr('id', '');
    $('.fixtures').css('display', 'block')
    $('.standings').css('display', 'none')
    $('.playoffs').css('display', 'none')
  });

  $('.groups-menu').on('click', function() {
    $('.groups-menu').attr('id', 'active');
    $('.fixtures-menu').attr('id', '');
    $('.playoffs-menu').attr('id', '');
    $('.standings').css('display', 'block');
    $('.fixtures').css('display', 'none')
    $('.playoffs').css('display', 'none')
  });

  $('.playoffs-menu').on('click', function() {
    $('.playoffs-menu').attr('id', 'active');
    $('.fixtures-menu').attr('id', '');
    $('.groups-menu').attr('id', '');
    $('.playoffs').css('display', 'block');
    $('.fixtures').css('display', 'none')
    $('.standings').css('display', 'none')
  });


});