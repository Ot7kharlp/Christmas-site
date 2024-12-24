function openGate() {
  // Slide gates to the sides
  document.getElementById('gate-left').style.transform = 'translateX(100%)';
  document.getElementById('gate-right').style.transform = 'translateX(-100%)';

  // Hide the "Open the Gate" button
  document.querySelector('.open-button').style.display = 'none';

  // Show the message after the gates disappear
  setTimeout(() => {
    document.getElementById('message').style.display = 'block';
  }, 1000); // Wait for the gate animation to complete

  // Play the background music when the button is clicked
  var audio = document.getElementById('background-audio');
  audio.play().catch((error) => {
    console.log("Audio play error: " + error);
  });
}

// Stop the audio when the user exits the website
window.addEventListener('beforeunload', function() {
  var audio = document.getElementById('background-audio');
  audio.pause(); // Pause the audio
  audio.currentTime = 0; // Reset audio to the start
});
