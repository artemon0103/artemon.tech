// Динамическое создание строк матрицы
document.addEventListener('DOMContentLoaded', () => {
  const matrixContainer = document.querySelector('.matrix');
  const loadingScreen = document.querySelector('.loading-screen');
  const businessCard = document.querySelector('.business-card');

  // Генерация случайной строки символов
  const generateMatrixString = () => {
    const chars = '01abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    const length = Math.floor(Math.random() * 20) + 10; // длина строки случайная
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  // Создание линии матрицы
  const createMatrixLine = () => {
    const matrixLine = document.createElement('div');
    matrixLine.classList.add('matrix-line');
    matrixLine.style.left = `${Math.random() * 100}vw`;
    matrixLine.style.animationDuration = `${Math.random() * 3 + 2}s`; // Время анимации от 2 до 5 сек
    matrixLine.innerText = generateMatrixString();
    matrixContainer.appendChild(matrixLine);

    // Удаляем линию после завершения анимации
    matrixLine.addEventListener('animationend', () => {
      matrixContainer.removeChild(matrixLine);
    });
  };

  // Создание нескольких линий матрицы каждые 100 мс
  setInterval(createMatrixLine, 100);

  // Отключение загрузочного экрана через 5 секунд
  setTimeout(() => {
    loadingScreen.style.display = 'none';
  const businessCard = document.querySelector('.business-card');
  businessCard.classList.remove('hidden');
}, 5000);
});