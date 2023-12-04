const slickOptions = {
  autoplay: true,
  dots: false,
  // pauseOnHover: false,
  prevArrow:
    '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
  nextArrow:
    '<button type="button" class="slick-next slider__next-arrow">Previous</button>;',
};

$(".testimonials__slider").slick(slickOptions);

const counterOptions = {
  delay: 10,
  time: 1000,
};
