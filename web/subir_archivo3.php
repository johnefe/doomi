<?php
if (isset($_FILES['archivo2'])) {
    $archivo = $_FILES['archivo2'];
    $extension = pathinfo($archivo['name'], PATHINFO_EXTENSION);
	$time = time();
    $nombre = "{$_POST['nombre_archivo']}_$time.$extension";
    if (move_uploaded_file($archivo['tmp_name'], "imagenesportada/$nombre")) {
        echo $nombre;
    } else {
        echo 0;
    }
}
?>

