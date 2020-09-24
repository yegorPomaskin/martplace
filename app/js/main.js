$(function(){

  $('.product-slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='../images/icons/arrow-left.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='../images/icons/arrow-right.png'>"
  });

  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true
  });


})