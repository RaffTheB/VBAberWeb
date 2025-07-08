// Toggle tema scuro/chiaro
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Messaggio di benvenuto nel debug
const debugOutput = document.getElementById('debugOutput');
debugOutput.textContent = 'Editor pronto. Carica un modulo per iniziare.';
