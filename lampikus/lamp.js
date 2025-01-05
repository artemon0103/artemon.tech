let lampOn = false;

function toggleLamp() {
    lampOn = !lampOn;  // Меняем состояние лампы
    const lampImage = document.getElementById('lamp');
    const body = document.body;  // Получаем элемент body
    
    // Изменяем источник изображения в зависимости от состояния лампы
    if (lampOn) {
        lampImage.src = 'lampikus/lamp_on.png';  // Изображение включенной лампы
        body.style.backgroundImage = 'url(lampikus/f1d8fd5ab39abe4e63620cb64417cf32.jpg)';
    } else {
        lampImage.src = 'lampikus/lamp_off.png'; // Изображение выключенной лампы
        body.style.backgroundImage = 'url(lampikus/night.jpg)'; // Меняем фон на night.jpg
    }
}