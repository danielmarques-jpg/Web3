/*Seções: 1) Sidebar  2) Login  3) Formulário */


/* SIDEBAR  */

const ITENS_MENU = [
  { id: 'presenca',      href: 'presenca.html',      icone: 'images/presenca.png',   alt: 'Presença' },
  { id: 'documentos',    href: 'documentos.html',    icone: 'images/documentos.png', alt: 'Documentos' },
  { id: 'alunos',        href: 'alunos.html',        icone: 'images/alunos.png',     alt: 'Alunos' },
  { id: 'formulario',    href: 'formulario.html',    icone: 'images/formulario.png', alt: 'Formulário' },
  { id: 'configuracoes', href: 'configuracoes.html', icone: 'images/config.png',     alt: 'Configurações' }
];

function renderizarSidebar() {
  const alvo = document.getElementById('sidebar');
  if (!alvo) return;

  const paginaAtual = document.body.dataset.pagina;

  const links = ITENS_MENU.map(item => `
        <li>
          <a href="${item.href}" class="${item.id === paginaAtual ? 'ativo' : ''}">
            <img src="${item.icone}" class="icones" alt="${item.alt}">
          </a>
        </li>`).join('');

  alvo.outerHTML = `
    <aside class="sidebar">
      <a href="index.html"><img src="images/logo.png" width="280" alt="Logo"></a>
      <ul class="nav-links">${links}
      </ul>

      <div class="sidebar-footer">
        <div class="perfil-usuario">
          <div class="avatar-placeholder"></div>
          <div class="info-usuario">
            <span class="nome-usuario">Nome</span>
            <span class="plano-usuario">Plano</span>
          </div>
        </div>
        <a href="login.html" class="btn-sair">
          <img src="images/logout.png" alt="Sair" class="icone-sair">
          <span>Sair</span>
        </a>
      </div>
    </aside>`;
}

renderizarSidebar();


/* LOGIN: alterna entre "Entrar" e "Criar Conta" */

function alternarAba(aba) {
  const btnEntrar = document.getElementById('btn-tab-entrar');
  const btnCriar = document.getElementById('btn-tab-criar');
  const campoNome = document.getElementById('campo-nome');
  const inputNome = document.getElementById('nome');
  const btnSubmit = document.getElementById('btn-submit');

  if (aba === 'criar') {
    btnCriar.classList.add('ativo');
    btnEntrar.classList.remove('ativo');

    campoNome.style.display = 'block';
    inputNome.required = true;
    btnSubmit.innerText = 'Criar Conta';
  } else {
    btnEntrar.classList.add('ativo');
    btnCriar.classList.remove('ativo');

    campoNome.style.display = 'none';
    inputNome.required = false;
    btnSubmit.innerText = 'Entrar';
  }
}


/* 3) FORMULÁRIO: botão "Enviar" Por enquanto só leva para a tela de relatórios; quando houver backend,
   é aqui que os dados do formulário devem ser enviados. */

function mostrarRelatorio() {
  window.location.href = 'relatorios.html';
}
