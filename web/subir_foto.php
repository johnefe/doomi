<?php
$foto = date('Y-m-d').date('H-i-s').trim($_FILES['foto']['name']);

//$ingresar = mysql_query("INSERT INTO personales (desc_foto, ruta_foto)VALUES('$descripcion','$foto')");

move_uploaded_file($_FILES['foto']['tmp_name'], 'imagenesproductos/'.$foto);

//$subida = mysql_query("SELECT * FROM personales ORDER BY id_foto DESC LIMIT 1");

/*while($subida2 = mysql_fetch_array($subida)){

	echo '<li>
				<a href="../php/album/'.$subida2['ruta_foto'].'" target="_blank"><img src="../php/album/'.$subida2['ruta_foto'].'" class="img-subida" title="'.$subida2['desc_foto'].'"></a>
			 <li>';

}*/

?>