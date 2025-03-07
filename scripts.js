
const btn = document.getElementById('button');
const userReply = document.querySelector('.userReply');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_7xdyasn';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
      setTimeout(() => {
        userReply.innerHTML = 'Thank you for contacting us!';
      }, 1000);

      setTimeout(() => {
        userReply.innerHTML = '';
      }, 5000);
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
document.getElementById('form').reset();
    
});

  
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('burger-toggle');
  });
  
  const myCarouselElement = document.querySelector('#myCarousel')
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 1000,
    wrap: false
  })
  
  
  const imgBox = document.querySelector('#largeImage').style.display = "none";
  
