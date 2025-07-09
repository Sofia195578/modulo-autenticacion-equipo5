document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  const users = getUsers();
  const user = users.find(u => u.email === email);

  // Intentos fallidos
  const key = `login_attempts_${email}`;
  let attempts = parseInt(localStorage.getItem(key)) || 0;

  if (attempts >= 3) {
    errorMsg.textContent = "Cuenta bloqueada. Intenta más tarde.";
    return;
  }

  if (!user || user.password !== password) {
    attempts++;
    localStorage.setItem(key, attempts);
    errorMsg.textContent = "Correo o contraseña incorrectos.";
    return;
  }

  // Éxito
  localStorage.removeItem(key);
  saveToken(email, user.name); // 🔐 Guardamos también el nombre del usuario
  window.location.href = "dashboard.html";
});

// 🔐 Función modificada para guardar el nombre también
function saveToken(email, name) {
  const token = Math.random().toString(36).substring(2);
  localStorage.setItem("token", token);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userName", name); // 👈 Guardamos el nombre
}
