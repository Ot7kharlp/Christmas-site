function openGate() {
  document.getElementById('gate-left').style.transform = 'translateX(-100%)';
  document.getElementById('gate-right').style.transform = 'translateX(100%)';
  document.getElementById('message').classList.remove('hidden');
}