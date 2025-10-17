const nome = document.getElementById("nome-cadastro");
const email = document.getElementById("email-cadastro");
const senha = document.getElementById("senha-cadastro");

const erroNome = document.getElementById("erro-nome");
const erroEmail = document.getElementById("erro-email");
const erroSenha = document.getElementById("erro-senha");

// Validação de nome
nome.addEventListener("input", () => {
  if (nome.value.trim().length < 3) {
    erroNome.textContent = "O nome deve ter pelo menos 3 caracteres.";
    nome.classList.add("invalido");
  } else {
    erroNome.textContent = "";
    nome.classList.remove("invalido");
  }
});

// Validação de email
email.addEventListener("input", () => {
  if (!email.value.includes("@")) {
    erroEmail.textContent = "Insira um e-mail válido.";
    email.classList.add("invalido");
  } else {
    erroEmail.textContent = "";
    email.classList.remove("invalido");
  }
});

// Validação de senha
senha.addEventListener("input", () => {
  if (senha.value.length < 6) {
    erroSenha.textContent = "A senha deve ter pelo menos 6 caracteres.";
    senha.classList.add("invalido");
  } else {
    erroSenha.textContent = "";
    senha.classList.remove("invalido");
    alert(`Bem Vindo ${nome.value}`);
  }
});
