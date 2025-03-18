const overlay = document.getElementById('overlay');
const clickHere = document.getElementById('click-here');
const video = document.getElementById('rickroll-video');

// Show "Click Here" after 2 seconds
setTimeout(() => {
    clickHere.classList.add('visible');
}, 2000);

// Handle the click
clickHere.addEventListener('click', () => {
    // Hide the overlay
    overlay.classList.add('hidden');

    // Play the video
    video.classList.add('playing');
    video.play();
     // Remove the overlay element after the transition finishes
     setTimeout(() => {
      overlay.style.display = 'none';
    }, 500); // 500ms matches the CSS transition time
});
