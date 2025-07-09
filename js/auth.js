function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveToken(email) {
  const token = Math.random().toString(36).substring(2);
  localStorage.setItem("token", token);
  localStorage.setItem("userEmail", email);
}

function getCurrentUser() {
  const email = localStorage.getItem("userEmail");
  return getUsers().find(u => u.email === email);
}

function isLoggedIn() {
  return localStorage.getItem("token") !== null;
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userEmail");
}
