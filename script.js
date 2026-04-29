// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.onclick = function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  };
});

// Counter animation
document.querySelectorAll('.counter').forEach(counter => {
  const update = () => {
    const target = +counter.dataset.target;
    const count = +counter.innerText;
    const inc = target / 100;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(update, 20);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

// Mobile menu
document.getElementById("hamburger").onclick = () => {
  document.getElementById("navLinks").classList.toggle("active");
};

// 🌙 DARK MODE WITH FADE
const toggleBtn = document.getElementById("darkToggle");

// Load saved preference
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

// Toggle
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("darkMode", "disabled");
    toggleBtn.textContent = "🌙";
  }
});