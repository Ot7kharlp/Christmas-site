function openGate() {
  // Slide gates to the sides horizontally (no vertical movement)
  document.getElementById('gate-left').style.transform = 'translateX(-100%)'; // Move left gate to the left
  document.getElementById('gate-right').style.transform = 'translateX(100%)'; // Move right gate to the right

  // Hide the "Open the Gate" button
  document.querySelector('.open-button').style.display = 'none';

  // Hide the gates after they finish moving
  setTimeout(() => {
    document.getElementById('gate-left').style.display = 'none'; // Hide left gate
    document.getElementById('gate-right').style.display = 'none'; // Hide right gate
  }, 1000); // After the gate animation completes

  // Show the message after the gates disappear
  setTimeout(() => {
    document.getElementById('message').style.display = 'flex'; // Use flex to center the message
  }, 1000); // Wait for the gate animation to complete (1s)
}
