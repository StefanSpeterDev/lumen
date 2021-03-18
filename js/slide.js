$(document).ready(function () {
  $(".wrapper-carousel").slick({
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    centerPadding: "60px",
    arrows: false,
    focusOnSelect: true,
    cssEase: "linear",
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
