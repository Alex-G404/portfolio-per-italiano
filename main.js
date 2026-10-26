// Open Modal function
function openEssay(essayId) {
    if (essayId === 'orwell') {
        document.getElementById('essayModal').style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

// Close Modal function
function closeEssay() {
    document.getElementById('essayModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore background scrolling
}

// Close Modal when clicking outside the paper content
window.onclick = function(event) {
    const modal = document.getElementById('essayModal');
    if (event.target === modal) {
        closeEssay();
    }
}

// Toggle Teacher Notes visibility
function toggleTeacherNotes() {
    const checkbox = document.getElementById('toggleNotes');
    const modalContent = document.querySelector('.modal-content');
    
    if (checkbox.checked) {
        modalContent.classList.remove('hide-notes');
    } else {
        modalContent.classList.add('hide-notes');
    }
}

// Category Filter Buttons logic
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});