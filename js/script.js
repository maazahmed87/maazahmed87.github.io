if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document
      .getElementById('my-work-section')
      .scrollIntoView({ behavior: 'smooth' });
  });
}

window.addEventListener('load', function () {
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
});

window.addEventListener('load', function () {
  document.body.classList.add('loaded');
});