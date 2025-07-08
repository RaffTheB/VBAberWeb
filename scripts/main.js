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

// Drag verticale per debug panel
let startY, isDraggingDebug = false;
const debugPanel = document.getElementById('debugPanel');

debugPanel.addEventListener('mousedown', (e) => {
  if (e.target.id === 'debugToggle') return;
  isDraggingDebug = true;
  startY = e.clientY;
  document.body.style.cursor = 'ns-resize';
});

document.addEventListener('mousemove', (e) => {
  if (!isDraggingDebug) return;
  const dy = startY - e.clientY;
  let newHeight = debugPanel.offsetHeight + dy;
  newHeight = Math.max(30, Math.min(newHeight, 300));
  debugPanel.style.height = newHeight + 'px';
  startY = e.clientY;
});

document.addEventListener('mouseup', () => {
  isDraggingDebug = false;
  document.body.style.cursor = 'default';
});
