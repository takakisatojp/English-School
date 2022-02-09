$(function() {
  $('.hamburger').on('click', function() {

    hamburger();
  });

  $('.inview-slide-left').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      // 要素が表示されたらslide-leftクラスを追加
      $(this).stop().addClass('slide-left');
    }
  });
  // BBBが選ばれる理由（スライド右）
  $('.inview-slide-right').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      // 要素が表示されたらslide-rightクラスを追加
      $(this).stop().addClass('slide-right');
    }
  });

});

function hamburger() {
  $('.hamburger').toggleClass('active');

  if ($('.hamburger').hasClass('active')) {
    $('#navi').addClass('active');
  } else {
    $('#navi').removeClass('active');
  }
}