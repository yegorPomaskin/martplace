$(function(){

  $('.product-slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='../images/icons/arrow-left.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='../images/icons/arrow-right.png'>"
  });

  $('.features__slider-inner').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='../images/icons/arrow-left.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='../images/icons/arrow-right.png'>"
  })

  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true
  });

  $(".products__item-rate").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 330,
    from: 30,
    to: 300,
    prefix: "$",
  });

  $(".page-list").on('click', function(){
    $(".products__item").addClass('list');
    $(".product-page__items").addClass('wrap');
  });
  $(".grid").on('click', function(){
    $(".products__item").removeClass('list');
    $(".product-page__items").removeClass('wrap');
  });

  var mixer = mixitup('.products__inner-box');


})