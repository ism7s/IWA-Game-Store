document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector("input[type='text']");
    const gameCards = document.querySelectorAll(".game-card");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();

        gameCards.forEach((card) => {
            const gameTitle = card.querySelector("h2").textContent.toLowerCase();

            if (gameTitle.includes(searchTerm)) {
                card.style.display = "block"; 
            } else {
                card.style.display = "none"; 
            }
        });
    });
});

