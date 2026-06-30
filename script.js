// Get elements
const level1Btn = document.getElementById('level1Btn');
const level2Btn = document.getElementById('level2Btn');
const pdfViewer = document.getElementById('pdfViewer');
const pdfContainer = document.getElementById('pdfContainer');

// Function to show PDF
function showPDF(file) {
    pdfViewer.src = file + '#toolbar=0';
    pdfContainer.classList.remove('hidden');

    // Scroll smoothly to viewer
    window.scrollTo({
        top: pdfContainer.offsetTop,
        behavior: 'smooth'
    });
}

// Button actions
level1Btn.addEventListener('click', () => showPDF('level1.pdf'));
level2Btn.addEventListener('click', () => showPDF('level2.pdf'));
