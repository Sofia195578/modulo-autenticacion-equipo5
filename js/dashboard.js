if (!isLoggedIn()) {
  window.location.href = "login.html";
}

const user = getCurrentUser();
if (user) {
  document.getElementById("userName").textContent = user.name;
  document.getElementById("emailData").textContent = user.email;
  document.getElementById("userRole").textContent = user.role;
} else {
  logout();
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userEmail");
  window.location.href = "login.html";
}