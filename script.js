function togglePassword(id, eyeIcon) {
  const input = document.getElementById(id);
  const isHidden = input.type === "password";

  input.type = isHidden ? "text" : "password";
  eyeIcon.src = isHidden ? "icons/eye-open.png" : "icons/eye-closed.png";
}

function register() {
  const name = document.getElementById("regName").value.trim();
  const pass = document.getElementById("regPass").value.trim();
  const confirm = document.getElementById("regConfirm").value.trim();

  if (!name || !pass || !confirm) {
    alert("Заполните все поля!");
    return;
  }

  if (name.length < 6) {
    alert("Имя должно содержать минимум 6 символов!");
    return;
  }

  if (pass.length < 12) {
    alert("Пароль должен содержать минимум 12 символов!");
    return;
  }

  if (pass !== confirm) {
    alert("Пароли не совпадают!");
    return;
  }

  localStorage.setItem("userName", name);
  localStorage.setItem("userPass", pass);

  alert("Регистрация успешна!");
  window.location.href = "index.html";
}

function login() {
  const name = document.getElementById("loginName").value.trim();
  const pass = document.getElementById("loginPass").value.trim();

  const savedName = localStorage.getItem("userName");
  const savedPass = localStorage.getItem("userPass");

  if (name === savedName && pass === savedPass) {
    alert("Вход выполнен успешно!");
  } else {
    alert("Неверное имя или пароль!");
  }
}

