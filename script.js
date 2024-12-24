function openGate() {
  // Slide gates to the sides
  document.getElementById('gate-left').style.transform = 'translateX(100%)'; // Move left gate off-screen
  document.getElementById('gate-right').style.transform = 'translateX(-100%)'; // Move right gate off-screen

  // Hide the "Open the Gate" button
  document.querySelector('.open-button').style.display = 'none';

  // Show the message after the gates disappear
  setTimeout(() => {
    document.getElementById('message').style.display = 'flex'; // Use flex to center the message
  }, 1000); // Wait for the gate animation to complete (1s)
}
