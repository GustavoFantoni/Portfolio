const flags = document.querySelectorAll('.flag');
const icons = document.querySelectorAll('.item-nav');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const idVisivel = entry.target.id;

      icons.forEach(icon => {
        if (icon.dataset.flag === idVisivel) {
          icon.classList.add('active');
        } else {
          icon.classList.remove('active');
        }
      });
    }
  });
}, {
  threshold: 0.1
});

flags.forEach(flag => observer.observe(flag));