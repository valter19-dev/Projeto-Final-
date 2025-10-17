// === login.js ===

document.addEventListener("DOMContentLoaded", () => {
  // 1. Elementos do DOM
  const formLogin = document.getElementById("form-login"); // NOVO: Captura o formulário
  const emailInput = document.getElementById("email-login");
  const senhaInput = document.getElementById("senha-login");
  const erroEmail = document.getElementById("erro-email");

  // ==========================================================
  // FUNÇÃO DE VALIDAÇÃO REUTILIZÁVEL
  // ==========================================================
  // Esta função será usada tanto no 'input' quanto no 'submit'.
  function validarCampos() {
    let formValido = true;

    // Validação de Email
    const emailValor = emailInput.value.trim();
    if (
      emailValor === "" ||
      !emailValor.includes("@") ||
      !emailValor.includes(".")
    ) {
      erroEmail.textContent = "Por favor, insira um e-mail válido.";
      emailInput.classList.add("invalido");
      formValido = false;
    } else {
      erroEmail.textContent = "";
      emailInput.classList.remove("invalido");
    }

    // Validação de Senha
    if (senhaInput.value.length < 6) {
      senhaInput.classList.add("invalido");
      // Se você tivesse um span para erro de senha, colocaria a mensagem aqui
      formValido = false;
    } else {
      senhaInput.classList.remove("invalido");
    }

    return formValido;
  }

  // ==========================================================
  // EVENTOS DE VALIDAÇÃO EM TEMPO REAL (Seu código original)
  // ==========================================================
  // Mantemos os ouvintes de 'input' para feedback visual imediato.
  emailInput.addEventListener("input", validarCampos);
  senhaInput.addEventListener("input", validarCampos);

  // ==========================================================
  // EVENTO PRINCIPAL: SUBMISSÃO DO FORMULÁRIO (Login/Sessão)
  // ==========================================================
  formLogin.addEventListener("submit", (e) => {
    e.preventDefault(); // Impede o envio padrão

    // 1. Revalida todos os campos antes de prosseguir
    if (!validarCampos()) {
      // Se a validação falhar, para a execução e as classes 'invalido' já estão ativas
      alert("Por favor, corrija os erros no formulário antes de continuar.");
      return;
    }

    // --- SIMULAÇÃO DE LOGIN BEM-SUCEDIDO ---
    // Aqui você faria a checagem no banco de dados ou API.
    const email = emailInput.value.trim();

    // 2. Extrai o nome do usuário a partir do e-mail
    // Ex: "joao.silva@exemplo.com" -> "Joao"
    // PELA VERSÃO CORRIGIDA E MAIS CLARA:
    // 1. Extrai a parte inicial do email (antes do @)
    let parteInicialEmail = email.split("@")[0]; // Ex: "valterrodrygues90" ou "ana.silva"

    // 2. Define os possíveis separadores de nome de usuário
    const separadores = [".", "_", "-"];

    // 3. Itera pelos separadores para encontrar a primeira ocorrência
    let primeiroNome = parteInicialEmail;

    for (const separador of separadores) {
      // Verifica se o separador existe na string
      if (parteInicialEmail.includes(separador)) {
        // Se encontrar, pega apenas o que está antes do separador
        primeiroNome = parteInicialEmail.split(separador)[0];
        break; // Interrompe o loop assim que encontrar o primeiro separador
      }
    }

    // Opcional: Remove números se eles estiverem no final do nome (ex: valter90)
    // Regex: Checa se termina com um ou mais dígitos (\d+) e remove
    primeiroNome = primeiroNome.replace(/\d+$/, "");

    // 4. Formata e Capitaliza
    if (primeiroNome) {
      nomeUsuario =
        primeiroNome.charAt(0).toUpperCase() + primeiroNome.slice(1);
    } else {
      nomeUsuario = "Usuário";
    }

    // 5. SALVA O NOME NO LOCALSTORAGE
    localStorage.setItem("nome_usuario_logado", nomeUsuario);

    // 4. Configura a notificação de boas-vindas para o dashboard
    localStorage.setItem(
      "notificacao_dashboard",
      `Bem-vindo(a) de volta, ${nomeUsuario}!`
    );
    localStorage.setItem("notificacao_tipo", "sucesso");

    // 5. Redireciona para o dashboard
    window.location.href = "./dashboard.html";
  });
});
