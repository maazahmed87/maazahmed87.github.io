if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document
      .getElementById('my-work-section')
      .scrollIntoView({ behavior: 'smooth' });
  });
}

// Define the target element
const headerImage = document.querySelector('#portfolio-header-image-container');

// Set the initial scale and opacity to 0
headerImage.style.transform = 'scale(0)';
headerImage.style.opacity = 0;

// Define the animation properties
anime({
  targets: headerImage,
  opacity: 1,
  scale: 1,
  duration: 2000,
  easing: 'easeOutElastic(1, .5)',
  delay: 500
});
