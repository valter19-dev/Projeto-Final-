// === dashboard.js ===
// Carrega, exibe, conclui e exclui tarefas com o mesmo layout do HTML original

document.addEventListener("DOMContentLoaded", () => {
  const listaTarefas = document.getElementById("listaTarefas");

  function carregarTarefas() {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

    listaTarefas.innerHTML = "";

    if (tarefas.length === 0) {
      listaTarefas.innerHTML = `
    <div class="sem-tarefas-container">
      <p class="sem-tarefas">Nenhuma tarefa cadastrada ainda.</p>
      <a href="./criar-tarefa.html" class="botao-nova-tarefa">Nova Tarefa</a>
    </div>
  `;
      return;
    }

    tarefas.forEach((tarefa, index) => {
      const card = document.createElement("div");
      card.classList.add("cartao-tarefa");

      card.innerHTML = `
        <div class="cabecalho-cartao">
          <h3>${tarefa.titulo}</h3>
          <a href="./detalhes-tarefa.html" class="icone-olho" title="Ver detalhes da tarefa">
            <i class="bi bi-eye olho normal"></i>
            <i class="bi bi-eye-fill olho cheio"></i>
          </a>
        </div>

        <p>Descrição: ${tarefa.descricao}</p>

        <div class="acoes-tarefa">
          <a href="./editar-tarefa.html" class="botao-editar">Editar</a>
          <button class="botao-concluir" onclick="concluirTarefa(${
            tarefa.id
          })">Concluir</button>
          <button class="botao-excluir" onclick="excluirTarefa(${
            tarefa.id
          })">Excluir</button>
        </div>

        <p><strong>Status:</strong> ${tarefa.status || "🕓 Pendente"}</p>
      `;

      listaTarefas.appendChild(card);
    });
  }

  // ✅ Concluir tarefa
  window.concluirTarefa = function (id) {
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefas = tarefas.map((t) =>
      t.id === id ? { ...t, status: "✅ Concluída" } : t
    );
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    carregarTarefas();
  };

  // 🗑️ Excluir tarefa
  window.excluirTarefa = function (id) {
    if (confirm("Tem certeza que deseja excluir esta tarefa?")) {
      let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
      tarefas = tarefas.filter((t) => t.id !== id);
      localStorage.setItem("tarefas", JSON.stringify(tarefas));
      carregarTarefas();
    }
  };

  carregarTarefas();
});

// === dashboard.js (Novo Arquivo) ===

document.addEventListener("DOMContentLoaded", () => {
  // 1. Pega os dados de notificação do localStorage
  const mensagem = localStorage.getItem("notificacao_dashboard");
  const tipo = localStorage.getItem("notificacao_tipo"); // 'sucesso', 'erro', etc.

  const elementoNotificacao = document.getElementById("notificacao-dashboard");

  // 2. Verifica se há uma mensagem para exibir e se o elemento existe
  if (mensagem && elementoNotificacao) {
    // Exibe a notificação
    elementoNotificacao.textContent = mensagem;
    // 1. ANIMAÇÃO DE ENTRADA: Adiciona as classes para exibir e estilizar.
    // O navegador aplicará a transição de opacity: 0 para 1.
    elementoNotificacao.className = `notificacao ${tipo} ativo`;

    // 3. Remove a notificação (e os dados do localStorage) após 3 segundos
    setTimeout(() => {
      elementoNotificacao.className = "notificacao-inicial"; // Ou apenas remove as classes de estilo

      // 4. Limpa o localStorage para que a notificação não apareça em um recarregamento futuro
      localStorage.removeItem("notificacao_dashboard");
      localStorage.removeItem("notificacao_tipo");
    }, 3000);
  }

  // ********** O RESTO DO CÓDIGO DO SEU DASHBOARD VAI AQUI **********
  // Ex: função para carregar as tarefas, menu, etc.
});

// === Menu Responsivo ===
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
