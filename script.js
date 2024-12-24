function openGate() {
  // Slide gates to the opposite directions (left gate to the left, right gate to the right)
  document.getElementById('gate-left').style.transform = 'translateX(-100%)'; // Move left gate to the left
  document.getElementById('gate-right').style.transform = 'translateX(100%)'; // Move right gate to the right

  // Hide the "Open the Gate" button
  document.querySelector('.open-button').style.display = 'none';

  // Show the message after the gates disappear
  setTimeout(() => {
    document.getElementById('message').style.display = 'block';
  }, 1000); // Wait for the gate animation to complete
}
