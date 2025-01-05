let lampOn = false;

function toggleLamp() {
    lampOn = !lampOn;  // ������ ��������� �����
    const lampImage = document.getElementById('lamp');
    const body = document.body;  // �������� ������� body
    
    // �������� �������� ����������� � ����������� �� ��������� �����
    if (lampOn) {
        lampImage.src = 'lampikus/lamp_on.png';  // ����������� ���������� �����
        body.style.backgroundImage = 'url(lampikus/f1d8fd5ab39abe4e63620cb64417cf32.jpg)';
    } else {
        lampImage.src = 'lampikus/lamp_off.png'; // ����������� ����������� �����
        body.style.backgroundImage = 'url(lampikus/night.jpg)'; // ������ ��� �� night.jpg
    }
}