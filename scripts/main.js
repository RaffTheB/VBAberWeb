// Tema scuro/chiaro
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Debug iniziale
const debugOutput = document.getElementById('debugOutput');
debugOutput.textContent = 'Editor pronto. Carica un modulo per iniziare.';

// Toggle debug
document.getElementById('debugToggle').addEventListener('click', () => {
  const panel = document.getElementById('debugPanel');
  panel.classList.toggle('collapsed');
});

// Toggle sidebar
document.getElementById('sidebarToggle').addEventListener('click', () => {
  document.getElementById('main').classList.toggle('sidebar-hidden');
});

// Drag laterale per sidebar
let startX, isDraggingSidebar = false;
const main = document.getElementById('main');
const sidebar = document.getElementById('sidebar');

sidebar.addEventListener('mousedown', (e) => {
  if (e.offsetX > sidebar.offsetWidth - 10) {
    isDraggingSidebar = true;
    startX = e.clientX;
    document.body.style.cursor = 'ew-resize';
  }
});

document.addEventListener('mousemove', (e) => {
  if (!isDraggingSidebar) return;
  const dx = e.clientX - startX;
  let newWidth = sidebar.offsetWidth + dx;
  newWidth = Math.max(100, Math.min(newWidth, 400));
  sidebar.style.width = newWidth + 'px';
  startX = e.clientX;
});

document.addEventListener('mouseup', () => {
  isDraggingSidebar = false;
  document.body.style.cursor = 'default';
});

const debugPanel = document.getElementById('debugPanel');
const debugToggle = document.getElementById('debugToggle');

debugToggle.addEventListener('click', () => {
  debugPanel.classList.toggle('expanded');
  if (debugPanel.classList.contains('expanded')) {
    debugToggle.textContent = '🔽 Nascondi Debug';
  } else {
    debugToggle.textContent = '🔼 Mostra Debug';
  }
});
