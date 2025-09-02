# Sistema de Gerenciamento de Tarefas - Modo Escuro/Claro

## 🌙 Sistema de Temas Implementado

Este projeto agora conta com um sistema completo de alternância entre tema escuro e claro, aplicado em todas as páginas do sistema.

### ✨ Funcionalidades

- **Alternância de Tema**: Botão flutuante no canto superior direito do dashboard para alternar entre modo escuro e claro
- **Persistência**: O tema escolhido é salvo no localStorage do navegador e mantido entre sessões
- **Aplicação Global**: O tema é aplicado automaticamente em todas as páginas do projeto
- **Transições Suaves**: Animações CSS para uma experiência visual agradável
- **Design Responsivo**: O sistema de temas funciona em dispositivos desktop e mobile

### 🎨 Temas Disponíveis

#### Tema Escuro (Padrão)
- Fundo principal: `#0f0f1a`
- Sidebar: `#161624`
- Cartões: `#1e1e2f`
- Texto principal: `#f5f5f5`
- Texto secundário: `#9ca3af`

#### Tema Claro
- Fundo principal: `#f8fafc`
- Sidebar: `#ffffff`
- Cartões: `#ffffff`
- Texto principal: `#1f2937`
- Texto secundário: `#6b7280`

### 🔧 Arquivos Modificados

1. **style.css**: Reorganizado com sistema de variáveis CSS para suporte a temas
2. **dashboard.html**: Adicionado botão de alternância e script JavaScript
3. **theme.js**: Script global para gerenciamento de temas
4. **Todas as páginas HTML**: Incluído o script de tema

### 🚀 Como Usar

1. Acesse qualquer página do sistema
2. No dashboard, clique no botão de alternância no canto superior direito
3. O tema será alterado imediatamente e salvo automaticamente
4. A preferência será mantida ao navegar entre páginas e em futuras visitas

### 🔄 Funcionamento Técnico

- **CSS Variables**: Utiliza variáveis CSS customizadas para cores e estilos
- **Data Attributes**: Usa `data-theme="light"` no elemento body para alternar temas
- **LocalStorage**: Armazena a preferência do usuário localmente
- **JavaScript Vanilla**: Implementação leve sem dependências externas

### 📱 Responsividade

O sistema de temas mantém total compatibilidade com o design responsivo existente, funcionando perfeitamente em:
- Desktop
- Tablet
- Mobile

### 🎯 Benefícios

- **Experiência do Usuário**: Permite personalização visual conforme preferência
- **Acessibilidade**: Oferece opção de contraste adequado para diferentes necessidades
- **Performance**: Implementação otimizada sem impacto na velocidade
- **Manutenibilidade**: Código organizado e fácil de manter

---

**Desenvolvido com foco na experiência do usuário e boas práticas de desenvolvimento web.**

