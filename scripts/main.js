document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('main');
  const sidebarToggle = document.getElementById('sidebarToggle');
  const themeToggle = document.getElementById('themeToggle');
  const debugPanel = document.getElementById('debugPanel');
  const debugToggle = document.getElementById('debugToggle');
  const debugExpand = document.getElementById('debugExpand');
  const fileItems = document.querySelectorAll('.file');
  const codeEditor = document.getElementById('codeEditor');

  // Toggle barra laterale
  sidebarToggle.addEventListener('click', () => {
    main.classList.toggle('sidebar-hidden');
    sidebarToggle.textContent = main.classList.contains('sidebar-hidden') ? '➡️' : '🧭';
  });

  // Toggle tema
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? '🌞' : '🌙';
  });

  // Toggle panel debug
  debugToggle.addEventListener('click', () => {
    debugPanel.classList.toggle('expanded');
    debugToggle.textContent = debugPanel.classList.contains('expanded') ? '🔽 Nascondi Debug' : '🔼 Mostra Debug';
  });

  // Espandi debug a schermo intero
  debugExpand.addEventListener('click', () => {
    debugPanel.classList.toggle('expanded');
    debugPanel.style.height = debugPanel.classList.contains('expanded') ? 'calc(100vh - 52px)' : '';
  });

  // Cambio file simulato
  fileItems.forEach(item => {
    item.addEventListener('click', () => {
      fileItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      codeEditor.value = `\' Codice: ${item.textContent}\nSub Main()\n  MsgBox "Hello"\nEnd Sub`;
    });
  });
});