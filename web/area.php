
<?php 
$z3fja = $_REQUEST['z3fja'];
$gfgf=$_REQUEST['gfgf'];
if($z3fja=="" or $gfgf==""){
	header ("Location:index.html");
	}
else{
?>
<!DOCTYPE html>
<html>
<head>
<title>productos</title>
<link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="js/jquery.min.js"></script>
<script src="js/area.js"></script>
<script src="js/lecturaimagenes2.js"></script>
<script src="js/upload.js"></script>

<!-- Custom Theme files -->
<link rel="stylesheet" type="text/css" href="css/doomi.css"/> 
<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
<link href="css/form.css" rel="stylesheet" type="text/css" media="all" />
<!-- Custom Theme files -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<!--webfont-->
<link href='http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic' rel='stylesheet' type='text/css'>
<!-- dropdown -->
<script src="js/jquery.easydropdown.js"></script>
<link href="css/nav.css" rel="stylesheet" type="text/css" media="all"/>

		  <script type="text/javascript">
		jQuery(document).ready(function($) {
			$(".scroll").click(function(event){		
				event.preventDefault();
				$('html,body').animate({scrollTop:$(this.hash).offset().top},1200);
			});
		});
	</script>
   
</head>
<body>
	<!-- header-section-starts -->
	<div class="c-header" id="home">
		<div class="top-header">
			<div class="container">
			<div class="logo">
				<a href="index.html"><img src="" alt="" /></a>
			</div>
				<div class="header-top-right">
				<!-- start search
				    <div class="search-box">
					    <div id="sb-search" class="sb-search">
							<form>
								<input class="sb-search-input" placeholder="Enter your search term..." type="search" name="search" id="search">
								<input class="sb-search-submit" type="submit" value="">
								<span class="sb-icon-search"> </span>
							</form>
						</div>
				    </div>
					<!-- search-scripts -->
					<script src="js/classie.js"></script>
					<script src="js/uisearch.js"></script>
						<script>
							new UISearch( document.getElementById( 'sb-search' ) );
						</script>
					<!-- //search-scripts -->

					
				</div>
			<div class="navigation">	
			<div>
             
              <input type="hidden" name="lb" value="<?php echo $gfgf;?>" class="lb" id="lb"/>
                             <input type="hidden" name="lb1" value="<?php echo $z3fja;?>" class="lb" id="lb1"/>
              
				                      
          </ul>
		</div>			
	 </div>
			</div>
		</div>
		</div>
		<!-- start Dresses-page -->
	<!-- content-section-starts -->
	<div class="container">
    
	<div class="dreamcrub">
    	   	 <ul class="breadcrumbs">
				 <li>
                    <span class="cerrarSesion"><a href="javascript:window.history.back();">&laquo; Volver atrás</a></span>
                </li>
                    
                       					
                </ul>

			   	<ul class="previous">
                <li>
                    <span class="salirp"><a href="">Cerrar Sesiòn</a>
                    
                    </span>
                </li>
                </ul>
                <div class="clearfix"></div>
			   </div>
			   </div>
    <!--fin  content-section-starts -->
		
        <div class="container">
	   	<div class="ft-ball">
       <!-- seccion de productos -->
		<div class="cont span_2_of_3">
		  <div class="mens-toolbar">
             <!-- para ordenar productoss -->
              
              
           
             <!-- para ordenar productoss -->
             
	          <!-- ver por paginas productoss-->
              
	        <div class="tituloPrincipal">Productos en <a name="tuNombreSucursal" id="tuNombreSucursal"></a> </div> 
	       				   	
	    	
            <!-- fin ver por paginas productoss -->
     	    
	       </div>
			    <div class="box1" >
               <div class="marcoProducto" id="productos">
                 <!--producto 2 -->
                 
                 <!-- fin producto 2 -->   
				    </div>
				  <div class="clearfix"></div>
			  </div>
			   
			  
			  </div>
        <!-- fin  seccion de productos -->
        
        <!-- seccion de menu de opciones -->
     	<div class="rsidebar span_1_of_left">
            <div class="contenedorOpciones">
            	<div class="tituloOpciones">..Mis opciones..</div>
              <!-- 
                <div class="opcion">
                <a onClick="buscarProducto()">Buscar producto</a>
                <img src="images/up176.png" id="subirb" onClick="subirbu()"/></div>-->
                <div class="buscarProducto" id="buscarProducto">
                <h4>espacio para buscar</h4>
                </div>
                <div class="opcion" id="mostrarFormularioR">
                <a onClick="mostrarFormularioR()">Nuevo producto</a>
                <img src="images/up176.png" id="subir" onClick="subirp()"/></div>
                
                    <div class="nuevoProducto" id="nuevoProducto">
                    	<!--··································· -->
                        <form id="formrp">
                        <select id="categorias2" name="categorias2">
                        </select>
                        <input type="text" id="nombreProducto" name="nombreProducto" placeholder="Nombre producto"/>
                        <input type="text" id="precio" name="precio" placeholder="Precio"/>
                            <textarea id="descripcion" placeholder="Descripciòn"></textarea>
                            <div  class="detallesProducto" id="mains">
                            <h3>Agregar detalles al producto</h3>
                             <a href="#" id="btAdd"><img src="images/rounded54.png"/></a>
                             <a href="#" id="btRemove"><img src="images/round53.png"/></a>                            
                            </div> 
                             <div id="detallesProducto" class="detallesProducto">
                            
                            </div>
                            <div class="upload" align="center">					
                            <input type="file" id="files" class="file" name="files[]" />
                            
                            </div>
                            <div id="urlFoto">
                            
                            </div>	                          
                            <output id="list"></output>
    
                        <div class="botton1">
					<input type="button" value="REGISTRAR" id="registrar" name="registrar" class="botton" onClick="GetTextValue()">
				</div>                       
                        </form>
                        
                        <!-- ···································-->
                    </div>
                    
                <div class="opcion" id=""><a href="#modalAgregar" onClick="AgregarP()">Agregar productos</a></div>
                <div id="modalAgregar" class="modalmask">
                <div class="modalbox rezise">
                    <a href="#close" title="Close"><img src="images/salir.png" class="closed"/></a>
                    <div class="proAgr">
                    	<div class="proAgr1">
                        <div class="tituloproAgr">
                    <h2>Agregar Productos registrados</h2></div>
                            <div class="productosAgr" id="productosAgr">
                            <!--aqui se agregan los productos -->
                                               
                            <!--fin de productos -->
                            </div>                    
                    	</div>
                    	</div>
                    </div>
				</div>
              <!--  <div class="opcion">Ordenar por categoria</div> -->
            <!----- ------------------------------->
                        <!-- --------------------------------------------------->
        	</div>
            
            
                     
		</div>
		<div class="clearfix"></div>
		</div>
        <!-- fin seccion de menu de opciones -->    
		</div>
    
    
		<!-- content-section-ends -->

		<!--footer -->
		<div class="footer">
		<div class="up-arrow">
			<a class="scroll" href="#home"><img src="images/up.png" alt="" /></a>
		</div>
			<div class="container">
				<div class="copyrights">
					<p>Copyright &copy; 2015 Todos los derechos reservados | Desarrollado por WWW.INNOVUS.CENTER</p>
				</div>
				<div class="footer-social-icons">
					<a href="#"><i class="fb"></i></a>
					<a href="#"><i class="tw"></i></a>
					<a href="#"><i class="in"></i></a>
					<a href="#"><i class="pt"></i></a>
				</div>
				  <div class="clearfix"></div>
			</div>
		</div>
        <!-- fin footer -->
        <script>
              function archivo(evt) {
                  var files = evt.target.files; // FileList object
             
                  // Obtenemos la imagen del campo "file".
                  for (var i = 0, f; f = files[i]; i++) {
                    //Solo admitimos imágenes.
                    if (!f.type.match('image.*')) {
                        continue;
                    }
             
                    var reader = new FileReader();
             
                    reader.onload = (function(theFile) {
                        return function(e) {
                          // Insertamos la imagen
                         document.getElementById("list").innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
						//alert(theFile.name);
var dir = "<input type='text'  id='dirFoto' class='dirFoto' value='"+theFile.name+"'/>";
						 document.getElementById("urlFoto").innerHTML =dir ;
                        };
                    })(f);
             
                    reader.readAsDataURL(f);
                  }
              }
             
              document.getElementById('files').addEventListener('change', archivo, false);
      </script>
      <script type="text/javascript">
        
           /* function eliminarArchivos(archivo) {
                $.ajax({
                    url: 'eliminar_archivo.php',
                    type: 'POST',
                    timeout: 10000,
                    data: {archivo: archivo},
                    error: function() {
                        mostrarRespuesta('Error al intentar eliminar el archivo.', false);
                    },
                    success: function(respuesta) {
                        if (respuesta == 1) {
                           // mostrarRespuesta('El archivo ha sido eliminado.', true);
                        } else {
                           // mostrarRespuesta('Error al intentar eliminar el archivo.', false);                            
                        }
                        mostrarArchivos();
                    }
                });
            }*/
           /* function mostrarArchivos() {
                $.ajax({
                    url: 'mostrar_archivos.php',
                    dataType: 'JSON',
                    success: function(respuesta) {
                        if (respuesta) {
                            var html = '';
                            for (var i = 0; i < respuesta.length; i++) {
                                if (respuesta[i] != undefined) {
                                    html += '<div class="row"> <span class="col-lg-2"> ' + respuesta[i] + ' </span><img src="imagenesproductos/' + respuesta[i] + '"/> <div class="col-lg-2"> <a class="eliminar_archivo btn btn-danger" href="javascript:void(0);"> Eliminar </a> </div> </div> <hr />';
                                }
                            }
                            $("#archivos_subidos").html(html);
                        }
                    }
                });
            }*/
			
			/*--------------------------------------
            function mostrarRespuesta(mensaje, ok){
                $("#respuesta").removeClass('alert-success').removeClass('alert-danger').html(mensaje);
                if(ok){
                    $("#respuesta").addClass('alert-success');
                }else{
                    $("#respuesta").addClass('alert-danger');
                }
            }
			/*--------------------------------------*/
			//codigo que me muestra los archivos subidos
          /* $(document).ready(function() {
                mostrarArchivos();
                $("#boton_subir").on('click', function() {
                    subirArchivos();
                });
                $("#archivos_subidos").on('click', '.eliminar_archivo', function() {
                    var archivo = $(this).parents('.row').eq(0).find('span').text();
                    archivo = $.trim(archivo);
                    eliminarArchivos(archivo);
                });
            });*/
        </script>

</body>
</html>
<?php }
/*if(isset($_POST['registrar'])){
		
		//$nomempresa=$_POST['nomempresa'];
		//$descripcion=$_POST['descripcion'];
		$archivo=$_FILES['imgportada']['tmp_name'];
		$destino = "imagenesportada/".$_FILES['imgportada']['name'];
		move_uploaded_file($archivo,$destino); 
		
		$archivo1=$_FILES['perfil']['tmp_name'];
		$destino1 = "imagenesperfil/".$_FILES['perfil']['name'];
		move_uploaded_file($archivo1,$destino1);
		/*---------------------------------------*/
		
	/*	echo $destino;
		echo "<br>";
		echo $destino1;
		echo "<br>";
		//echo $nomempresa;
		echo "<br>";
		//echo $descripcion;
	
	}*/
  
?>

<script type="text/javascript">
        function init() {
           com.innovus.domi.entrar.init('https://domi-app.appspot.com/_ah/api');
		  // com.innovus.domi.entrar1.init('https://domi-app.appspot.com/_ah/api');
        }
</script>
<script src="https://apis.google.com/js/client.js?onload=init"></script>