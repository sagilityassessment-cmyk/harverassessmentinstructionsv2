const level1Btn = document.getElementById('level1Btn');
const level2Btn = document.getElementById('level2Btn');
const pdfViewer = document.getElementById('pdfViewer');
const pdfContainer = document.getElementById('pdfContainer');

function showPDF(file) {
    pdfViewer.src = file + '#toolbar=0';
    pdfContainer.classList.remove('hidden');
    window.scrollTo({ top: pdfContainer.offsetTop, behavior: 'smooth' });
}

level1Btn.addEventListener('click', () => showPDF('Level1.pdf'));
level2Btn.addEventListener('click', () => showPDF('Level2.pdf'));
