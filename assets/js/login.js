const emailInput = document.getElementById("email-login");
const senhaInput = document.getElementById("senha-login");
const erroEmail = document.getElementById("erro-email");

emailInput.addEventListener("input", () => {
  const valor = emailInput.value;

  if (valor === "" || !valor.includes("@") || !valor.includes(".")) {
    erroEmail.textContent = "Por favor, insira um e-mail válido.";
    emailInput.classList.add("invalido");
  } else {
    erroEmail.textContent = "";
    emailInput.classList.remove("invalido");
  }
});

// Verifica a senha
senhaInput.addEventListener("input", () => {
  if (senhaInput.value.length < 6) {
    senhaInput.classList.add("invalido");
  } else {
    senhaInput.classList.remove("invalido");
  }
});
