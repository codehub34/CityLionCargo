document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form').onsubmit = (event) => {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    // Store data in localStorage
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);

    // Update the result div
    document.querySelector('#result').innerHTML = `Thanks for contacting City Lion, ${firstName} ${lastName},<br>We'll get back to you as soon as we can!`;

    // Construct the mailto URL
    const mailtoLink = `mailto:codehub65@gmail.com?subject=Contact%20Form%20Submission&body=First%20Name:%20${encodeURIComponent(firstName)}%0ALast%20Name:%20${encodeURIComponent(lastName)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;

    // Open the email client
    window.location.href = mailtoLink;

    // Reset the form
    document.querySelector('form').reset();

    // Clear the result div after 5 seconds
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
  
