document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById("playButton");
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function() {
            const url = this.getAttribute("data-url");
            playButton.style.display = "block";
            playButton.onclick = function() {
                window.location.href = url;
            };
        });
    });
});
