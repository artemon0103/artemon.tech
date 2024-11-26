<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $comment = htmlspecialchars($_POST['comment']);

    // Открываем файл для записи
    $file = fopen("crm.txt", "a");
    if ($file) {
        // Записываем данные в файл
        fwrite($file, "Имя: $name\nEmail: $email\nКомментарий: $comment\n\n");
        fclose($file);
        echo "Данные успешно сохранены.";
    } else {
        echo "Ошибка при открытии файла для записи.";
    }
}
?>