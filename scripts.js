document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form').onsubmit = (event) => {
      event.preventDefault(); // Prevent form submission

      // Get form values
      const fullName = document.querySelector('#name').value;
      const email = document.querySelector('#email').value;
      const message = document.querySelector('#message').value;
      const phone = document.querySelector('#phone').value;
      const countryCode = document.querySelector('#countryCode').value; // Correct element ID

      // Store data in localStorage
      localStorage.setItem('fullName', fullName);
      localStorage.setItem('email', email);
      localStorage.setItem('message', message);
      localStorage.setItem('phone', phone);
      localStorage.setItem('countryCode', countryCode); // Store countryCode in localStorage

      // Update the result div
      document.querySelector('#result').innerHTML = `Thanks for contacting City Lion, ${fullName},<br>We'll get back to you as soon as we can!`;

      // Construct the mailto URL
      const mailtoLink = `mailto:codehub65@gmail.com?subject=Contact%20Form%20Submission&body=Full%20Name:%20${encodeURIComponent(fullName)}%0AEmail:%20${encodeURIComponent(email)}%0APhone:%20${encodeURIComponent(countryCode)}%20${encodeURIComponent(phone)}%0AMessage:%20${encodeURIComponent(message)}`;

      // Open the email client
      window.location.href = mailtoLink;

      // Reset the form
      document.querySelector('form').reset();

      // Clear the result div after 10 seconds
      setTimeout(() => {
          document.querySelector('#result').innerHTML = '';
      }, 10000);

      return false;
  };
});


  
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('burger-toggle');
  });
  
  const myCarouselElement = document.querySelector('#myCarousel')
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    wrap: false
  })
  
  
  const imgBox = document.querySelector('#largeImage').style.display = "none";
  
