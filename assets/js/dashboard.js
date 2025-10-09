// === dashboard.js ===
// Carrega, exibe, conclui e exclui tarefas com o mesmo layout do HTML original

document.addEventListener("DOMContentLoaded", () => {
  const listaTarefas = document.getElementById("listaTarefas");

  function carregarTarefas() {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

    listaTarefas.innerHTML = "";

    if (tarefas.length === 0) {
      listaTarefas.innerHTML = `<p class="sem-tarefas">Nenhuma tarefa cadastrada ainda.</p>`;
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
