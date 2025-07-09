document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  const terms = document.getElementById("terms").checked;
  const errorMsg = document.getElementById("errorMsg");

  const users = getUsers();

  if (users.find(u => u.email === email)) {
    return errorMsg.textContent = "Este correo ya está registrado.";
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!passwordRegex.test(password)) {
    return errorMsg.textContent = "Contraseña insegura (mínimo 8 caracteres con mayúscula, número y símbolo).";
  }

  if (password !== confirmPassword) {
    return errorMsg.textContent = "Las contraseñas no coinciden.";
  }

  if (!terms) {
    return errorMsg.textContent = "Debes aceptar los términos.";
  }

  users.push({ name, email, password, role: "usuario" });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registro exitoso.");
  window.location.href = "index.html";
});
