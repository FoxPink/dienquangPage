$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".main-header").addClass("header-fixed");
  } else {
    $(".main-header").removeClass("header-fixed");
  }
});
$(".btn-mobile, .close-navbar-mobile").on("click", function (e) {
  e.preventDefault();
  $("body").toggleClass("show-nav");
});
$(".construction-lighting-slide").slick({
  centerPadding: "60px",
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerPadding: "40px",
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});
