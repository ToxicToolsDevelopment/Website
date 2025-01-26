document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");

    // Slower glowing effect for ASCII text
    const asciiText = document.querySelector(".ascii");
    let glowIntensity = 50;
    let direction = 1;

    function applyGlowEffect() {
        glowIntensity += direction * 0.5; // Slower transition
        if (glowIntensity >= 100 || glowIntensity <= 30) {
            direction *= -1;
        }

        asciiText.style.textShadow = `0 0 ${glowIntensity / 4}px rgb(0, 255, 0)`;

        setTimeout(applyGlowEffect, 50); // Increased interval for smoother transition
    }

    applyGlowEffect();
});
