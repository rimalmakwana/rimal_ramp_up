function setTheme(theme) {
  document.body.className = theme;

  // Save to localStorage
  localStorage.setItem("theme", theme);

  // Active button highlight
  document.querySelectorAll("button").forEach((btn) => {
    btn.classList.remove("active");
  });

  document.getElementById(theme + "Btn").classList.add("active");
}

// Load saved theme
window.onload = function () {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
};
