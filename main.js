document.addEventListener('DOMContentLoaded', () => {
    const accButtons = document.querySelectorAll('.name-toggle-btn1');

    accButtons.forEach(button => {
        button.addEventListener('click', () => {
            const panel = button.nextElementSibling;
            button.classList.toggle('active');
            
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    });
});