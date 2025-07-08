// Toggle tema scuro/chiaro
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Messaggio di debug iniziale
const debugOutput = document.getElementById('debugOutput');
debugOutput.textContent = 'Editor pronto. Carica un modulo per iniziare.';

// Toggle finestra debug
document.getElementById('debugToggle').addEventListener('click', () => {
  const panel = document.getElementById('debugPanel');
  panel.classList.toggle('collapsed');
});
