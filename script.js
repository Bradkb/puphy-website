document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thanks for reaching out!');
});

document.querySelector('.nav-toggle').addEventListener('click', function () {
  document.querySelector('.nav-links').classList.toggle('nav-open');
});