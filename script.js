// Array of arrow image paths and their corresponding labels
const arrows = [
    { path: 'img/forward.svg', label: 'Forward' },
    { path: 'img/right.svg', label: 'Right' },
    { path: 'img/left.svg', label: 'Left' },
  ];
  
  // DOM Elements
  const header = document.getElementById('header');
  const arrowContainer = document.getElementById('arrow-container');
  const directionLabel = document.createElement('h2'); // Create the label element
  directionLabel.id = 'direction-label';
  arrowContainer.after(directionLabel); // Insert the label below the arrow container
  const generateBtn = document.getElementById('generate-btn');
  
  // Function to generate a random arrow
  function generateRandomArrow() {
    const randomIndex = Math.floor(Math.random() * arrows.length);
    return arrows[randomIndex];
  }
  
  // Function to apply fade-out and fade-in effect
  function fadeArrow() {
    // Fade out the current arrow and label
    arrowContainer.style.opacity = '0';
    directionLabel.style.opacity = '0';
  
    // Wait for the fade-out to complete, then update the arrow and label, and fade them in
    setTimeout(() => {
      const randomArrow = generateRandomArrow();
      arrowContainer.innerHTML = `<img src="${randomArrow.path}" alt="Direction Arrow">`;
      directionLabel.textContent = randomArrow.label; // Update the label text
      arrowContainer.style.opacity = '1'; // Fade in the new arrow
      directionLabel.style.opacity = '1'; // Fade in the new label
    }, 200); // Match this duration with the CSS transition duration
  }
  
  // Event listener for the button
  generateBtn.addEventListener('click', () => {
    // Hide the header
    header.style.display = 'none';
  
    // Apply the fade effect and generate a new arrow and label
    fadeArrow();
  });