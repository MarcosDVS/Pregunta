const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");

// Crea un elemento de audio
const audio = new Audio("music.mp3");

noButton.addEventListener("click", () => {
    const randomX = Math.floor(Math.random() * 80);
    const randomY = Math.floor(Math.random() * 80);
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}%`;
    noButton.style.top = `${randomY}%`;
});

yesButton.addEventListener("click", () => {
    audio.play(); // Reproduce la música cuando se hace clic en "Sí"
    alert("Sabía que dirías que sí.");
});
