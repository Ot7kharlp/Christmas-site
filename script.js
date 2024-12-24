function openGate() {
  // Slide gates to the sides while keeping them vertically centered
  document.getElementById('gate-left').style.transform = 'translateX(100%) translateY(-50%)';
  document.getElementById('gate-right').style.transform = 'translateX(-100%) translateY(-50%)';

  // Hide the "Open the Gate" button
  document.querySelector('.open-button').style.display = 'none';

  // Show the message after the gates disappear (wait 1 second for animation to finish)
  setTimeout(() => {
    const message = document.getElementById('message');
    message.classList.add('visible'); // Add the 'visible' class to trigger typing effect
  }, 1000); // Wait for gate animation to complete before showing the message
}
