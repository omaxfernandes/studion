$(document).ready(() => {
    const slickOptions = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>',
        nextArrow:'<button type="button" class="slick-next slider__next-arrow">Previous</button>',
    };
  $('.slider').slick(slickOptions);

  $('.footer__form-button').on('click', () => {
    const email = $('#email').val();
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : email,
    Subject : "Please add me to the newsletter",
    Body : `Hello, 
    
    I would like to be added to the site's newsletter.
    My email is ${email}.
    
    Thanks!`
}).then(
  message => alert(message)
);
  });
});