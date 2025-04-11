const faders = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      entry.target.style.animationDelay = "0s";
    }
  });
}, { threshold: 1.1 });

faders.forEach(el => observer.observe(el));