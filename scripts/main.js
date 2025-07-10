document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const main = document.getElementById('main');
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebarToggle');
  const themeToggle = document.getElementById('themeToggle');
  const debugPanel = document.getElementById('debugPanel');
  const debugToggle = document.getElementById('debugToggle');
  const debugExpand = document.getElementById('debugExpand');
  const debugOutput = document.getElementById('debugOutput');

  // Tema
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
  });

  // Sidebar toggle
  sidebarToggle.addEventListener('click', () => {
    main.classList.toggle('sidebar-hidden');
  });

  // Swipe per sidebar
  let startX = 0;
  main.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });
  main.addEventListener('touchmove', (e) => {
    const dx = e.touches[0].clientX - startX;
    if (dx > 80) {
      main.classList.remove('sidebar-hidden');
    }
    if (dx < -80) {
      main.classList.add('sidebar-hidden');
    }
  });

  // Debug toggle
  debugToggle.addEventListener('click', () => {
    debugPanel.classList.toggle('expanded');
    debugToggle.textContent = debugPanel.classList.contains('expanded')
      ? '🔽 Nascondi Debug' : '🔼 Mostra Debug';
  });

  // Debug fullscreen
  debugExpand.addEventListener('click', () => {
    debugPanel.classList.toggle('fullscreen');
    debugPanel.style.height = debugPanel.classList.contains('fullscreen') ? '100vh' : '';
  });

  // Output iniziale
  debugOutput.textContent = 'Editor pronto. Carica un modulo per iniziare.';
});