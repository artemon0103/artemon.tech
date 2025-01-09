// ������������ �������� ����� �������
document.addEventListener('DOMContentLoaded', () => {
  const matrixContainer = document.querySelector('.matrix');
  const loadingScreen = document.querySelector('.loading-screen');
  const businessCard = document.querySelector('.business-card');

  // ��������� ��������� ������ ��������
  const generateMatrixString = () => {
    const chars = '01abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    const length = Math.floor(Math.random() * 20) + 10; // ����� ������ ���������
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  // �������� ����� �������
  const createMatrixLine = () => {
    const matrixLine = document.createElement('div');
    matrixLine.classList.add('matrix-line');
    matrixLine.style.left = `${Math.random() * 100}vw`;
    matrixLine.style.animationDuration = `${Math.random() * 3 + 2}s`; // ����� �������� �� 2 �� 5 ���
    matrixLine.innerText = generateMatrixString();
    matrixContainer.appendChild(matrixLine);

    // ������� ����� ����� ���������� ��������
    matrixLine.addEventListener('animationend', () => {
      matrixContainer.removeChild(matrixLine);
    });
  };

  // �������� ���������� ����� ������� ������ 100 ��
  setInterval(createMatrixLine, 100);

  // ���������� ������������ ������ ����� 5 ������
  setTimeout(() => {
    loadingScreen.style.display = 'none';
  const businessCard = document.querySelector('.business-card');
  businessCard.classList.remove('hidden');
}, 5000);
});