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

  $('.header__btn-menu').on('click', function(){
    $('.header__box').toggleClass('active');
  });

  $('.header-menu__btn').on('click', function(){
    $('.menu__list').slideToggle('active');
  });

  $('.product-one__tabs .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
      $('.product-one__tabs .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    });

  var mixer = mixitup('.products__inner-box');


})