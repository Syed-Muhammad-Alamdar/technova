document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('review-track');
  const slides = Array.from(track.children);
  const prevBtn = document.getElementById('review-prev');
  const nextBtn = document.getElementById('review-next');
  const dotsContainer = document.getElementById('review-dots');
  const dots = Array.from(dotsContainer.children);

  let currentIndex = 1;

  function updateCarousel() {
    const total = slides.length;
    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;

    slides.forEach((slide) => {
      slide.style.display = 'none';
      slide.classList.remove('active-card', 'side-card');
    });

    slides[prevIndex].style.display = 'flex';
    slides[prevIndex].style.order = '1';
    slides[prevIndex].classList.add('side-card');

    slides[currentIndex].style.display = 'flex';
    slides[currentIndex].style.order = '2';
    slides[currentIndex].classList.add('active-card');

    slides[nextIndex].style.display = 'flex';
    slides[nextIndex].style.order = '3';
    slides[nextIndex].classList.add('side-card');

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      currentIndex = idx;
      updateCarousel();
    });
  });

  slides.forEach((slide, idx) => {
    slide.addEventListener('click', () => {
      if (idx !== currentIndex) {
        currentIndex = idx;
        updateCarousel();
      }
    });
  });

  updateCarousel();
});

const menuToggle = document.getElementById('menu-toggle');
const navLists = document.getElementById('lists');

menuToggle.addEventListener('click', () => {
    navLists.classList.toggle('open');
});