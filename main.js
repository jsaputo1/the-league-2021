$(function () {

  $('.fixtures-menu').on('click', function() {
    console.log("fixtures clicked")
    $('.fixtures-menu').attr('id', 'active');
    $('.groups-menu').attr('id', '');
    $('.fixtures').css('display', 'block')
    $('.standings').css('display', 'none')
  });

  $('.groups-menu').on('click', function() {
    console.log("groups clicked")
    $('.groups-menu').attr('id', 'active');
    $('.fixtures-menu').attr('id', '');
    $('.fixtures').hide();
    $('.standings').css('display', 'block');
  });


});