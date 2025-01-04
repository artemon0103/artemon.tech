let lampOn = false;

function toggleLamp() {
    lampOn = !lampOn;  // ������ ��������� �����
    const lampImage = document.getElementById('lamp');
    const body = document.body;  // �������� ������� body
    
    // �������� �������� ����������� � ����������� �� ��������� �����
    if (lampOn) {
        lampImage.src = 'lamp_on.png';  // ����������� ���������� �����
        body.style.backgroundImage = 'url(f1d8fd5ab39abe4e63620cb64417cf32.jpg)';
    } else {
        lampImage.src = 'lamp_off.png'; // ����������� ����������� �����
        body.style.backgroundImage = 'url(night.jpg)'; // ������ ��� �� night.jpg
    }
}