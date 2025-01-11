// Äèíàìè÷åñêîå ñîçäàíèå ñòðîê ìàòðèöû
document.addEventListener('DOMContentLoaded', () => {
  const matrixContainer = document.querySelector('.matrix');
  const loadingScreen = document.querySelector('.loading-screen');
  const businessCard = document.querySelector('.business-card');

  // Ãåíåðàöèÿ ñëó÷àéíîé ñòðîêè ñèìâîëîâ
  const generateMatrixString = () => {
    const chars = 'dGhlVVNTUg==';
    const length = Math.floor(Math.random() * 20) + 10; // äëèíà ñòðîêè ñëó÷àéíàÿ
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  // Ñîçäàíèå ëèíèè ìàòðèöû
  const createMatrixLine = () => {
    const matrixLine = document.createElement('div');
    matrixLine.classList.add('matrix-line');
    matrixLine.style.left = `${Math.random() * 100}vw`;
    matrixLine.style.animationDuration = `${Math.random() * 3 + 2}s`; // Âðåìÿ àíèìàöèè îò 2 äî 5 ñåê
    matrixLine.innerText = generateMatrixString();
    matrixContainer.appendChild(matrixLine);

    // Óäàëÿåì ëèíèþ ïîñëå çàâåðøåíèÿ àíèìàöèè
    matrixLine.addEventListener('animationend', () => {
      matrixContainer.removeChild(matrixLine);
    });
  };

  // Ñîçäàíèå íåñêîëüêèõ ëèíèé ìàòðèöû êàæäûå 100 ìñ
  setInterval(createMatrixLine, 100);

  // Îòêëþ÷åíèå çàãðóçî÷íîãî ýêðàíà ÷åðåç 5 ñåêóíä
  setTimeout(() => {
    loadingScreen.style.display = 'none';
  const businessCard = document.querySelector('.business-card');
  businessCard.classList.remove('hidden');
}, 5000);
});
