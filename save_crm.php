<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $comment = htmlspecialchars($_POST['comment']);

    // ��������� ���� ��� ������
    $file = fopen("crm.txt", "a");
    if ($file) {
        // ���������� ������ � ����
        fwrite($file, "���: $name\nEmail: $email\n�����������: $comment\n\n");
        fclose($file);
        echo "������ ������� ���������.";
    } else {
        echo "������ ��� �������� ����� ��� ������.";
    }
}
?>