// Get references to HTML elements
const music = document.getElementById("morningMusic");
const revealButton = document.getElementById("revealButton");
const surpriseMessages = document.getElementById("surpriseMessages");

// Event listener for the "Click Me for a Surprise" button
revealButton.addEventListener("click", function() {
    // Toggle the visibility of the surprise messages
    surpriseMessages.classList.toggle("hidden");
    surpriseMessages.classList.toggle("visible");

    // Play music when the button is clicked (after user interaction)
    if (music.paused) {
        music.currentTime = 0; // Start the audio from the beginning
        music.play().then(() => {
            console.log("Music is playing!");
        }).catch(error => {
            console.error("Error playing audio:", error);
        });
    } else {
        music.pause();
        console.log("Music paused.");
    }
});
