// === criar-tarefa.js ===
// Este script valida o formulário e salva a tarefa no LocalStorage

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formTarefa");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // impede o recarregamento da página

    // Obtendo os campos
    const titulo = document.getElementById("titulo").value.trim();
    const descricao = document.getElementById("descricao").value.trim();

    // === Validação básica ===
    if (titulo === "" || descricao === "") {
      alert("Por favor, preencha o título e a descrição da tarefa.");
      return;
    }

    // === Cria o objeto da tarefa ===
    const novaTarefa = {
      id: Date.now(), // gera um ID único
      titulo: titulo,
      descricao: descricao,
      status: "Pendente",
    };

    // === Recupera as tarefas existentes ===
    const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];

    // === Adiciona a nova tarefa ===
    tarefasSalvas.push(novaTarefa);

    // === Salva novamente no LocalStorage ===
    localStorage.setItem("tarefas", JSON.stringify(tarefasSalvas));

    // Mensagem e redirecionamento
    alert("✅ Tarefa criada com sucesso!");
    window.location.href = "./dashboard.html";
  });
});

// === Menu Responsivo ===
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
