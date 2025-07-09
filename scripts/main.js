document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const main = document.getElementById('main');
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebarToggle');
  const themeToggle = document.getElementById('themeToggle');
  const debugPanel = document.getElementById('debugPanel');
  const debugToggle = document.getElementById('debugToggle');
  const debugExpand = document.getElementById('debugExpand');

  // Toggle tema scuro/chiaro
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
  });

  // Toggle sidebar (mostra/nascondi)
  sidebarToggle.addEventListener('click', () => {
    main.classList.toggle('sidebar-hidden');
  });

  // Toggle pannello debug (espandi/riduci)
  debugToggle.addEventListener('click', () => {
    debugPanel.classList.toggle('expanded');
    debugToggle.textContent = debugPanel.classList.contains('expanded')
      ? '🔽 Nascondi Debug'
      : '🔼 Mostra Debug';
  });

  // Espandi debug a tutto schermo
  debugExpand.addEventListener('click', () => {
    debugPanel.classList.toggle('fullscreen');
    if (debugPanel.classList.contains('fullscreen')) {
      debugPanel.style.height = '100vh';
      debugPanel.style.top = '0';
    } else {
      debugPanel.style.height = '';
      debugPanel.style.top = '';
    }
  });

  // Scroll e padding sicuro su iOS
  window.addEventListener('resize', () => {
    document.body.style.paddingBottom = debugPanel.classList.contains('expanded') ? '200px' : '0';
  });

  // Output iniziale
  const debugOutput = document.getElementById('debugOutput');
  debugOutput.textContent = 'Editor pronto. Carica un modulo per iniziare.';
});
