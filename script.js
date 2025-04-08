function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('show');
}

// Simulated login state management
let isLoggedIn = localStorage.getItem("loggedIn") === "true";
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("loginLink").style.display = isLoggedIn ? "none" : "block";
  document.getElementById("registerLink").style.display = isLoggedIn ? "none" : "block";
  document.getElementById("logoutLink").style.display = isLoggedIn ? "block" : "none";

  document.getElementById("logoutLink").addEventListener("click", () => {
    localStorage.setItem("loggedIn", "false");
    window.location.href = "index.html";
  });
});
