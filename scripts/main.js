document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('main');
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebarToggle');
  const themeToggle = document.getElementById('themeToggle');
  const debugPanel = document.getElementById('debugPanel');
  const debugToggle = document.getElementById('debugToggle');
  const debugExpand = document.getElementById('debugExpand');
  const fileItems = document.querySelectorAll('.file');
  const codeEditor = document.getElementById('codeEditor');

  // Toggle sidebar
  sidebarToggle.addEventListener('click', () => {
    main.classList.toggle('sidebar-hidden');
    sidebarToggle.textContent = main.classList.contains('sidebar-hidden') ? '➡️' : '🧭';
  });

  // Swipe gesture
  let touchStartX = 0;
  sidebar.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
  });
  sidebar.addEventListener('touchmove', e => {
    const dx = e.touches[0].clientX - touchStartX;
    if (dx < -50) {
      main.classList.add('sidebar-hidden');
      sidebarToggle.textContent = '➡️';
    }
  });
  main.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
  main.addEventListener('touchmove', e => {
    const dx = e.touches[0].clientX - touchStartX;
    if (dx > 50) {
      main.classList.remove('sidebar-hidden');
      sidebarToggle.textContent = '🧭';
    }
  });

  // Theme toggle
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? '🌞' : '🌙';
  });

  // Debug toggle
  debugToggle.addEventListener('click', () => {
    debugPanel.classList.toggle('expanded');
    debugToggle.textContent = debugPanel.classList.contains('expanded')
      ? '🔽 Nascondi Debug' : '🔼 Mostra Debug';
  });

  // Debug expand full
  debugExpand.addEventListener('click', () => {
    if (!debugPanel.classList.contains('expanded')) {
      debugPanel.classList.add('expanded');
    }
    debugPanel.style.height = debugPanel.style.height === '100%' ? '' 
      : 'calc(100vh - 52px)';
  });

  // Load file on click
  fileItems.forEach(item => {
    item.addEventListener('click', () => {
      fileItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      codeEditor.value = `\' Codice: ${item.textContent}\nSub Main()\n  MsgBox "Hello"\nEnd Sub`;
    });
  });

  // Initial debug text
  debugToggle.textContent = '🔼 Mostra Debug';
});