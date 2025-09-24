document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.cards-container .card');
    const cardsPerPage = 3;
    let currentStart = 0;

    function showCards(start) {
        cards.forEach((card, i) => {
            card.style.display = (i >= start && i < start + cardsPerPage) ? 'block' : 'none';
        });

        const from = start + 1;
        const to = Math.min(start + cardsPerPage, cards.length);
        document.getElementById('cards-count').textContent = `${from}-${to} de ${cards.length}`;
    }

    document.getElementById('prev').addEventListener('click', function() {
        currentStart = Math.max(0, currentStart - cardsPerPage);
        showCards(currentStart);
    });

    document.getElementById('next').addEventListener('click', function() {
        if (currentStart + cardsPerPage < cards.length) {
            currentStart += cardsPerPage;
        }
        showCards(currentStart);
    });

    showCards(currentStart);
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function(e) {
        if (card.style.display === 'none') return;
        const modal = document.getElementById('card-modal');
        const modalContent = document.getElementById('modal-card-content');
        modalContent.innerHTML = card.innerHTML;
        modal.style.display = 'flex';
    });
});

document.getElementById('card-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});