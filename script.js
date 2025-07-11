document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for contacting Puphy. We will get back to you soon!');
  this.reset();
});
