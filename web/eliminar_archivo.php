<?php
if (isset($_POST['archivo'])) {
    $archivo = $_POST['archivo'];
    if (file_exists("imagenesproductos/$archivo")) {
        unlink("imagenesproductos/$archivo");
        echo 1;
    } else {
        echo 0;
    }
}
?>
