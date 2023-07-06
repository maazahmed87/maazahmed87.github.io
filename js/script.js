if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document
      .getElementById('my-work-section')
      .scrollIntoView({ behavior: 'smooth' });
  });
}

const headerImage = document.querySelector('#portfolio-header-image-container');

headerImage.style.transform = 'scale(0)';
headerImage.style.opacity = 0;

anime({
  targets: headerImage,
  opacity: 1,
  scale: 1,
  duration: 2000,
  easing: 'easeOutElastic(1, .5)',
  delay: 500
});

window.addEventListener('load', function () {
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
});