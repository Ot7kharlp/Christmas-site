function openGate() {
  // Slide gates to the sides
  document.getElementById('gate-left').style.transform = 'translateX(100%)';
  document.getElementById('gate-right').style.transform = 'translateX(-100%)';

  // Hide the "Open the Gate" button
  document.querySelector('.open-button').style.display = 'none';

  // Show the message after the gates disappear
  setTimeout(() => {
    document.getElementById('message').style.display = 'block';

    // Start the typing effect for the message
    typeWriter();
  }, 1000); // Wait for the gate animation to complete
}

let messageIndex = 0;
let headingText = document.getElementById('message-heading').innerText;
let paragraphText = document.getElementById('message-text').innerText;

function typeWriter() {
  // Type the heading
  if (messageIndex < headingText.length) {
    document.getElementById('message-heading').innerHTML += headingText.charAt(messageIndex);
    messageIndex++;
    setTimeout(typeWriter, 100);
  } else {
    // Show the paragraph text after the heading is fully typed
    setTimeout(() => {
      let paragraphIndex = 0;
      let p = document.getElementById('message-text');
      p.style.opacity = '1';
      p.style.visibility = 'visible';
      p.style.width = '100%';

      function typeParagraph() {
        if (paragraphIndex < paragraphText.length) {
          p.innerHTML += paragraphText.charAt(paragraphIndex);
          paragraphIndex++;
          setTimeout(typeParagraph, 50); // Typing speed for paragraph
        }
      }

      typeParagraph(); // Start typing the paragraph
    }, 500); // Delay paragraph typing slightly after heading
  }
}
